<?php
// src/Blogger/BlogBundle/Controller/CommentController.php

namespace Kunstmaan\KMediaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Kunstmaan\KMediaBundle\Form\GalleryType;
use Kunstmaan\KMediaBundle\Entity\ImageGallery;
use Kunstmaan\KMediaBundle\Form\SubGalleryType;

/**
 * imagegallery controller.
 *
 * @author Kristof Van Cauwenbergh
 */
class ImageGalleryController extends Controller
{

    public function showAction($id, $slug)
    {
        $em = $this->getDoctrine()->getEntityManager();

        $gallery = $em->getRepository('KunstmaanKMediaBundle:ImageGallery')->find($id);
        $galleries = $em->getRepository('KunstmaanKMediaBundle:ImageGallery')
                        ->getAllGalleries();

        if (!$gallery) {
            throw $this->createNotFoundException('Unable to find image gallery.');
        }

        return $this->render('KunstmaanKMediaBundle:ImageGallery:show.html.twig', array(
            'gallery'       => $gallery,
            'galleries'     => $galleries
         ));
    }

    public function newAction(){
        $gallery = new ImageGallery();
        $form = $this->createForm(new GalleryType('Kunstmaan\KMediaBundle\Entity\ImageGallery'), $gallery);

        $em = $this->getDoctrine()->getEntityManager();
        $galleries = $em->getRepository('KunstmaanKMediaBundle:ImageGallery')
                               ->getAllGalleries();

        return $this->render('KunstmaanKMediaBundle:ImageGallery:create.html.twig', array(
            'form'   => $form->createView(),
            'galleries'     => $galleries
        ));
    }

    public function subnewAction($id){
           $gallery = new ImageGallery();

           $em = $this->getDoctrine()->getEntityManager();
           $parent = $em->find('\Kunstmaan\KMediaBundle\Entity\ImageGallery', $id);

           $gallery->setParent($parent);
           $form = $this->createForm(new SubGalleryType(), $gallery);

           $em = $this->getDoctrine()->getEntityManager();
           $galleries = $em->getRepository('KunstmaanKMediaBundle:ImageGallery')
                                  ->getAllGalleries();

           return $this->render('KunstmaanKMediaBundle:ImageGallery:subcreate.html.twig', array(
               'form'   => $form->createView(),
               'galleries'     => $galleries,
               'parent' => $parent
           ));
       }

    public function createAction(){
        $request = $this->getRequest();
        $gallery = new ImageGallery();
        $form = $this->createForm(new GalleryType('Kunstmaan\KMediaBundle\Entity\ImageGallery'), $gallery);

        if ('POST' == $request->getMethod()) {
            $form->bindRequest($request);
            if ($form->isValid()){
                $em = $this->getDoctrine()->getEntityManager();
                $em->persist($gallery);
                $em->flush();

                $galleries = $em->getRepository('KunstmaanKMediaBundle:ImageGallery')
                                               ->getAllGalleries();

                return $this->render('KunstmaanKMediaBundle:ImageGallery:show.html.twig', array(
                          'gallery' => $gallery,
                          'galleries'     => $galleries,
                ));
            }
        }

        $em = $this->getDoctrine()->getEntityManager();
        $galleries = $em->getRepository('KunstmaanKMediaBundle:ImageGallery')
                                       ->getAllGalleries();

        return $this->render('KunstmaanKMediaBundle:ImageGallery:create.html.twig', array(
            'form' => $form->createView(),
            'galleries'     => $galleries
        ));
    }

    public function subcreateAction($id){
            $request = $this->getRequest();

            $em = $this->getDoctrine()->getEntityManager();
            $parent = $em->find('\Kunstmaan\KMediaBundle\Entity\ImageGallery', $id);

            $gallery = new ImageGallery();
            $gallery->setParent($parent);
            $form = $this->createForm(new SubGalleryType(), $gallery);

            if ('POST' == $request->getMethod()) {
                $form->bindRequest($request);
                if ($form->isValid()){
                    $em = $this->getDoctrine()->getEntityManager();
                    $em->persist($gallery);
                    $em->flush();

                    $galleries = $em->getRepository('KunstmaanKMediaBundle:ImageGallery')
                                                   ->getAllGalleries();

                    return $this->render('KunstmaanKMediaBundle:ImageGallery:show.html.twig', array(
                              'gallery' => $gallery,
                              'galleries'     => $galleries,
                    ));
                }
            }

            $em = $this->getDoctrine()->getEntityManager();
            $galleries = $em->getRepository('KunstmaanKMediaBundle:ImageGallery')
                                           ->getAllGalleries();

            return $this->render('KunstmaanKMediaBundle:ImageGallery:subcreate.html.twig', array(
                'form' => $form->createView(),
                'galleries'     => $galleries,
                'parent' => $parent
            ));
        }

    public function ckeditorAction(){
        $em = $this->getDoctrine()->getEntityManager();
        $galleries = $em->getRepository('KunstmaanKMediaBundle:ImageGallery')
                        ->getAllGalleries();

        return $this->render('KunstmaanKMediaBundle:ImageGallery:ckeditor.html.twig', array(
            'galleries'     => $galleries
        ));
    }

}