<?php

namespace Kunstmaan\KAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class SettingsController extends Controller
{
    
    public function indexAction()
    {
        return $this->render('KunstmaanKAdminBundle:Settings:index.html.twig');
    }
	
}
