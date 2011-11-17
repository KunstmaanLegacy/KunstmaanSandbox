<?php

namespace Kunstmaan\KAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class ModulesController extends Controller
{
    
    public function indexAction()
    {
        return $this->render('KunstmaanKAdminBundle:Modules:index.html.twig');
    }
	
}
