<?php

namespace Kunstmaan\KAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class MediaController extends Controller
{
    
    public function indexAction()
    {
        $em = $this->getDoctrine()
                           ->getEntityManager();

        $galleries = $em->getRepository('KunstmaanKAdminBundle:ImageGallery')
                        ->getAllGalleries();

        return $this->render('KunstmaanKAdminBundle:Media:index.html.twig', array(
                    'galleries' => $galleries
        ));
    }
	
}
