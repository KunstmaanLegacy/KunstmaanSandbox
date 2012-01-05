<?php

namespace Kunstmaan\AdminBundle\Controller;

use Kunstmaan\AdminBundle\Form\EditUserType;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Kunstmaan\AdminBundle\Entity\User;
use Kunstmaan\AdminBundle\Form\UserType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Kunstmaan\AdminBundle\AdminList\UserAdminListConfigurator;

class SettingsController extends Controller
{
    public function indexAction()
    {
    	$em = $this->getDoctrine()->getEntityManager();
    	$request = $this->getRequest();
    	$adminlist = $this->get("adminlist.factory")->createList(new UserAdminListConfigurator(), $em);
    	$adminlist->bindRequest($request);
    	
    	return $this->render('KunstmaanAdminBundle:Settings:index.html.twig', array(
    			'useradminlist' => $adminlist
    	));
    }

    public function usersAction()
    {
        $em = $this->getDoctrine()->getEntityManager();
        $request = $this->getRequest();
        $adminlist = $this->get("adminlist.factory")->createList(new UserAdminListConfigurator(), $em);
        $adminlist->bindRequest($request);

        return $this->render('KunstmaanAdminBundle:Settings:users.html.twig', array(
            'useradminlist' => $adminlist,
            'addparams'     => array()
        ));
    }
    
    public function adduserAction()
    {
    	$em = $this->getDoctrine()->getEntityManager();
    	
    	$request = $this->getRequest();
    	$helper = new User();
    	$form = $this->createForm(new UserType($this->container), $helper);
    	
    	if ('POST' == $request->getMethod()) {
    		$form->bindRequest($request);
    		if ($form->isValid()){
    				$em->persist($helper);
    				$em->flush();
    			return new RedirectResponse($this->generateUrl('KunstmaanAdminBundle_settings_users'));
    		}
    	}
    	    	
    	return $this->render('KunstmaanAdminBundle:Settings:adduser.html.twig', array(
    			'form' => $form->createView(),
    	));
    }
    
    public function edituserAction($user_id)
    {
    	$em = $this->getDoctrine()->getEntityManager();
    
    	$request = $this->getRequest();
    	$helper = $em->getRepository('KunstmaanAdminBundle:User')->getUser($user_id, $em);
    	$form = $this->createForm(new EditUserType($this->container), $helper);
    	
    	if ('POST' == $request->getMethod()) {
    		$form->bindRequest($request);
    		if ($form->isValid()){
    			$em->persist($helper);
    			$em->flush();
    			return new RedirectResponse($this->generateUrl('KunstmaanAdminBundle_settings_users'));
    		}
    	}
    
    	return $this->render('KunstmaanAdminBundle:Settings:edituser.html.twig', array(
    			'form' => $form->createView(),
    			'user' => $helper
    	));
    }
}
