<?php
// src/Kunstmaan/KAdminBundle/controller/PictureController.php

namespace Kunstmaan\KAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Kunstmaan\KAdminBundle\Helper\PictureHelper;

/**
 * picture controller.
 *
 * @author Kristof Van Cauwenbergh
 */
class PictureController extends Controller
{
    public function newAction($gallery_id)
    {
        $gallery = $this->getImageGallery($gallery_id);

        $picturehelper = new PictureHelper();
        $form = $this->createForm(new \Kunstmaan\KAdminBundle\Form\PictureType(), $picturehelper);

        return $this->render('KunstmaanKAdminBundle:Picture:create.html.twig', array(
            'form'   => $form->createView(),
            'gallery' => $gallery
        ));
    }

    public function createAction($gallery_id)
    {
        $gallery = $this->getImageGallery($gallery_id);

        $request = $this->getRequest();
        $picturehelper = new PictureHelper();
        $form = $this->createForm(new \Kunstmaan\KAdminBundle\Form\PictureType(), $picturehelper);

        if ('POST' == $request->getMethod()) {
            $form->bindRequest($request);
            if ($form->isValid()){
                if ($picturehelper->getPicture()!=null) {
                    $picture = new \Kunstmaan\KAdminBundle\Entity\Picture();
                    $picture->setName($picturehelper->getPicture()->getClientOriginalName());
                    $picture->setContent($picturehelper->getPicture());
                    $picture->setImagegallery($gallery);

                    $em = $this->getDoctrine()->getEntityManager();
                    $em->persist($picture);
                    $em->flush();

                    $em = $this->getDoctrine()->getEntityManager();
                           $galleries = $em->getRepository('KunstmaanKAdminBundle:ImageGallery')
                                                  ->getAllGalleries();

                    //$picturehelp = $this->getPicture($picture->getId());
                    return $this->render('KunstmaanKAdminBundle:ImageGallery:show.html.twig', array(
                                   'gallery' => $gallery,
                                   'galleries' => $galleries
                                   // 'picture' => $picturehelp
                    ));
                }
            }
        }
        return $this->render('KunstmaanKAdminBundle:Picture:create.html.twig', array(
            'form' => $form->createView(),
            'gallery' => $gallery
        ));
    }

    protected function getPicture($picture_id){
        $em = $this->getDoctrine()
                   ->getEntityManager();

        $picture = $em->getRepository('KunstmaanKAdminBundle:Picture')->find($picture_id);

        if (!$picture) {
            throw $this->createNotFoundException('Unable to find picture.');
        }

        return $picture;
    }

    protected function getImageGallery($gallery_id)
    {
        $em = $this->getDoctrine()
                    ->getEntityManager();

        $imagegallery = $em->getRepository('KunstmaanKAdminBundle:ImageGallery')->find($gallery_id);

        if (!$imagegallery) {
            throw $this->createNotFoundException('Unable to find image gallery.');
        }

        return $imagegallery;
    }

}