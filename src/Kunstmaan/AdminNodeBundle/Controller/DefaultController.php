<?php

namespace Kunstmaan\AdminNodeBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller
{
    
    public function indexAction($name)
    {
        return $this->render('KunstmaanAdminNodeBundle:Default:index.html.twig', array('name' => $name));
    }
}
