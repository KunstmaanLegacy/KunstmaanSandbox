<?php

namespace Kunstmaan\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class ModulesController extends Controller
{
    
    public function indexAction()
    {
        return $this->render('KunstmaanAdminBundle:Modules:index.html.twig');
    }
	
}
