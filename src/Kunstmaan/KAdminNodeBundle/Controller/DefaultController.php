<?php

namespace Kunstmaan\KAdminNodeBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller
{
    
    public function indexAction($name)
    {
        return $this->render('KunstmaanKAdminNodeBundle:Default:index.html.twig', array('name' => $name));
    }
}
