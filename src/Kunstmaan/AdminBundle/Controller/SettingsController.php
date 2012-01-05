<?php

namespace Kunstmaan\AdminBundle\Controller;

use Kunstmaan\AdminBundle\Form\EditUserType;
use Kunstmaan\AdminBundle\Form\EditGroupType;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Kunstmaan\AdminBundle\Entity\User;
use Kunstmaan\AdminBundle\Entity\Group;
use Kunstmaan\AdminBundle\Form\UserType;
use Kunstmaan\AdminBundle\Form\GroupType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Kunstmaan\AdminBundle\AdminList\UserAdminListConfigurator;
use Kunstmaan\AdminBundle\AdminList\GroupAdminListConfigurator;

class SettingsController extends Controller {
    public function indexAction() {
        return $this->redirect($this->generateUrl('KunstmaanAdminBundle_settings_users'));
    }

    public function usersAction() {
        $em = $this->getDoctrine()->getEntityManager();
        $request = $this->getRequest();
        $adminlist = $this->get("adminlist.factory")->createList(new UserAdminListConfigurator(), $em);
        $adminlist->bindRequest($request);

        return $this->render('KunstmaanAdminBundle:Settings:users.html.twig', array(
            'useradminlist' => $adminlist,
            'addparams'     => array()
        ));
    }
    
    public function adduserAction() {
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
    
    public function edituserAction($user_id) {
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

    public function groupsAction() {
        $em = $this->getDoctrine()->getEntityManager();
        $request = $this->getRequest();
        $adminlist = $this->get("adminlist.factory")->createList(new GroupAdminListConfigurator(), $em);
        $adminlist->bindRequest($request);

        return $this->render('KunstmaanAdminBundle:Settings:groups.html.twig', array(
            'groupadminlist' => $adminlist,
            'addparams'     => array()
        ));
    }

    public function addgroupAction() {
        $em = $this->getDoctrine()->getEntityManager();

        $request = $this->getRequest();
        $helper = new Group();
        $form = $this->createForm(new GroupType($this->container), $helper);

        if ('POST' == $request->getMethod()) {
            $form->bindRequest($request);
            if ($form->isValid()){
                $em->persist($helper);
                $em->flush();
                return new RedirectResponse($this->generateUrl('KunstmaanAdminBundle_settings_groups'));
            }
        }

        return $this->render('KunstmaanAdminBundle:Settings:addgroup.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    public function editgroupAction($group_id) {
        $em = $this->getDoctrine()->getEntityManager();

        $request = $this->getRequest();
        $helper = $em->getRepository('KunstmaanAdminBundle:Group')->find($group_id);
        $form = $this->createForm(new EditGroupType($this->container), $helper);

        if ('POST' == $request->getMethod()) {
            $form->bindRequest($request);
            if ($form->isValid()){
                $em->persist($helper);
                $em->flush();
                return new RedirectResponse($this->generateUrl('KunstmaanAdminBundle_settings_groups'));
            }
        }

        return $this->render('KunstmaanAdminBundle:Settings:editgroup.html.twig', array(
            'form' => $form->createView(),
            'group' => $helper
        ));
    }
}
