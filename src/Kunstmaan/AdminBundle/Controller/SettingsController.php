<?php

namespace Kunstmaan\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Kunstmaan\AdminBundle\AdminList\UserAdminListConfigurator;

class SettingsController extends Controller
{
    
    public function indexAction()
    {
        return $this->redirect($this->generateUrl('KunstmaanAdminBundle_settings_users'));
    }

    public function usersAction()
    {
        $em = $this->getDoctrine()->getEntityManager();
        $request = $this->getRequest();
        $adminlist    = $this->get("adminlist.factory")->createList(new UserAdminListConfigurator(), $em);
        $adminlist->bindRequest($request);
        return $this->render('KunstmaanAdminBundle:Settings:users.html.twig', array(
            'useradminlist'    => $adminlist,
        ));
    }
	
}
