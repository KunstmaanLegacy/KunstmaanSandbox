<?php

namespace Kunstmaan\KAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class MediaController extends Controller
{
    
    public function indexAction()
    {
        return $this->render('KunstmaanKAdminBundle:Media:index.html.twig', array());
    }

    public function imagesAction()
    {
        $em = $this->getDoctrine()
                   ->getEntityManager();

        $galleries = $em->getRepository('KunstmaanKAdminBundle:ImageGallery')
                        ->getAllGalleries();

        return $this->render('KunstmaanKAdminBundle:Media:images.html.twig', array(
            'galleries' => $galleries
        ));
    }

    public function videosAction()
    {
        return $this->render('KunstmaanKAdminBundle:Media:videos.html.twig', array());
    }

    public function slidesAction()
    {
        return $this->render('KunstmaanKAdminBundle:Media:slides.html.twig', array());
    }

    public function filesAction()
    {
        return $this->render('KunstmaanKAdminBundle:Media:files.html.twig', array());
    }
}
