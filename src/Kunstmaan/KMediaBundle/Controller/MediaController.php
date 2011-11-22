<?php

namespace Kunstmaan\KMediaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class MediaController extends Controller
{
    
    public function indexAction()
    {
        return $this->render('KunstmaanKMediaBundle:Media:index.html.twig', array());
    }

    public function imagesAction()
    {
        $em = $this->getDoctrine()
                   ->getEntityManager();
        $galleries = $em->getRepository('KunstmaanKMediaBundle:ImageGallery')
                        ->getAllGalleries();

        return $this->render('KunstmaanKMediaBundle:Media:images.html.twig', array(
            'galleries' => $galleries
        ));
    }

    public function videosAction()
    {
        return $this->render('KunstmaanKMediaBundle:Media:videos.html.twig', array());
    }

    public function slidesAction()
    {
        return $this->render('KunstmaanKMediaBundle:Media:slides.html.twig', array());
    }

    public function filesAction()
    {
        $em = $this->getDoctrine()
                           ->getEntityManager();
        $galleries = $em->getRepository('KunstmaanKMediaBundle:FileGallery')
                                ->getAllGalleries();

        return $this->render('KunstmaanKMediaBundle:Media:files.html.twig', array(
            'galleries' => $galleries
        ));
    }
}
