<?php

namespace Kunstmaan\KAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Kunstmaan\KAdminBundle\AdminList\UserAdminListConfigurator;

class SettingsController extends Controller
{
    
    public function indexAction()
    {
        return $this->redirect($this->generateUrl('KunstmaanKAdminBundle_settings_users'));
    }

    public function usersAction()
    {
        $em = $this->getDoctrine()->getEntityManager();
        $request = $this->getRequest();
        $adminlist    = $this->get("adminlist.factory")->createList(new UserAdminListConfigurator(), $em);
        $adminlist->bindRequest($request);
        return $this->render('KunstmaanKAdminBundle:Settings:users.html.twig', array(
            'useradminlist'    => $adminlist,
        ));
    }
	
}
