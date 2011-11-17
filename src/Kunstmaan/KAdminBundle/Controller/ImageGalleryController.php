<?php
// src/Blogger/BlogBundle/Controller/CommentController.php

namespace Kunstmaan\KAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Kunstmaan\KAdminBundle\Helper\PictureHelper;

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

        $gallery = $em->getRepository('KunstmaanKAdminBundle:ImageGallery')->find($id);
        $galleries = $em->getRepository('KunstmaanKAdminBundle:ImageGallery')
                        ->getAllGalleries();

        if (!$gallery) {
            throw $this->createNotFoundException('Unable to find image gallery.');
        }

        return $this->render('KunstmaanKAdminBundle:ImageGallery:show.html.twig', array(
            'gallery'       => $gallery,
            'galleries'     => $galleries
         ));
    }

    public function newAction(){
        $gallery = new \Kunstmaan\KAdminBundle\Entity\ImageGallery();
        $form = $this->createForm(new \Kunstmaan\KAdminBundle\Form\ImageGalleryType(), $gallery);

        $em = $this->getDoctrine()->getEntityManager();
        $galleries = $em->getRepository('KunstmaanKAdminBundle:ImageGallery')
                               ->getAllGalleries();

        return $this->render('KunstmaanKAdminBundle:ImageGallery:create.html.twig', array(
            'form'   => $form->createView(),
            'galleries'     => $galleries
        ));
    }

    public function subnewAction($id){
           $gallery = new \Kunstmaan\KAdminBundle\Entity\ImageGallery();

           $em = $this->getDoctrine()->getEntityManager();
           $parent = $em->find('\Kunstmaan\KAdminBundle\Entity\ImageGallery', $id);

           $gallery->setParent($parent);
           $form = $this->createForm(new \Kunstmaan\KAdminBundle\Form\SubImageGalleryType(), $gallery);

           $em = $this->getDoctrine()->getEntityManager();
           $galleries = $em->getRepository('KunstmaanKAdminBundle:ImageGallery')
                                  ->getAllGalleries();

           return $this->render('KunstmaanKAdminBundle:ImageGallery:subcreate.html.twig', array(
               'form'   => $form->createView(),
               'galleries'     => $galleries,
               'parent' => $parent
           ));
       }

    public function createAction(){
        $request = $this->getRequest();
        $gallery = new \Kunstmaan\KAdminBundle\Entity\ImageGallery();
        $form = $this->createForm(new \Kunstmaan\KAdminBundle\Form\ImageGalleryType(), $gallery);

        if ('POST' == $request->getMethod()) {
            $form->bindRequest($request);
            if ($form->isValid()){
                $em = $this->getDoctrine()->getEntityManager();
                $em->persist($gallery);
                $em->flush();

                $galleries = $em->getRepository('KunstmaanKAdminBundle:ImageGallery')
                                               ->getAllGalleries();

                return $this->render('KunstmaanKAdminBundle:ImageGallery:show.html.twig', array(
                          'gallery' => $gallery,
                          'galleries'     => $galleries,
                ));
            }
        }

        $em = $this->getDoctrine()->getEntityManager();
        $galleries = $em->getRepository('KunstmaanKAdminBundle:ImageGallery')
                                       ->getAllGalleries();

        return $this->render('KunstmaanKAdminBundle:ImageGallery:create.html.twig', array(
            'form' => $form->createView(),
            'galleries'     => $galleries
        ));
    }

    public function subcreateAction($id){
            $request = $this->getRequest();

            $em = $this->getDoctrine()->getEntityManager();
            $parent = $em->find('\Kunstmaan\KAdminBundle\Entity\ImageGallery', $id);

            $gallery = new \Kunstmaan\KAdminBundle\Entity\ImageGallery();
            $gallery->setParent($parent);
            $form = $this->createForm(new \Kunstmaan\KAdminBundle\Form\SubImageGalleryType(), $gallery);

            if ('POST' == $request->getMethod()) {
                $form->bindRequest($request);
                if ($form->isValid()){
                    $em = $this->getDoctrine()->getEntityManager();
                    $em->persist($gallery);
                    $em->flush();

                    $galleries = $em->getRepository('KunstmaanKAdminBundle:ImageGallery')
                                                   ->getAllGalleries();

                    return $this->render('KunstmaanKAdminBundle:ImageGallery:show.html.twig', array(
                              'gallery' => $gallery,
                              'galleries'     => $galleries,
                    ));
                }
            }

            $em = $this->getDoctrine()->getEntityManager();
            $galleries = $em->getRepository('KunstmaanKAdminBundle:ImageGallery')
                                           ->getAllGalleries();

            return $this->render('KunstmaanKAdminBundle:ImageGallery:subcreate.html.twig', array(
                'form' => $form->createView(),
                'galleries'     => $galleries,
                'parent' => $parent
            ));
        }

    public function ckeditorAction(){
        $em = $this->getDoctrine()->getEntityManager();
        $galleries = $em->getRepository('KunstmaanKAdminBundle:ImageGallery')
                        ->getAllGalleries();

        return $this->render('KunstmaanKAdminBundle:ImageGallery:ckeditor.html.twig', array(
            'galleries'     => $galleries
        ));
    }

}