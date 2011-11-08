<?php

namespace Kunstmaan\KAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class MediaController extends Controller
{
    
    public function indexAction()
    {
        return $this->render('KunstmaanKAdminBundle:Media:index.html.twig');
    }
	
}
