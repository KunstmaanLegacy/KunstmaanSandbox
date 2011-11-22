<?php

namespace Kunstmaan\KMediaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller
{
    
    public function indexAction($name)
    {
        return $this->render('KunstmaanKMediaBundle:Default:index.html.twig', array('name' => $name));
    }
}
