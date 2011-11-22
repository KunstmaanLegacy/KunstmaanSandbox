<?php
// src/Kunstmaan/KAdminBundle/controller/PictureController.php

namespace Kunstmaan\KAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Kunstmaan\KAdminBundle\Helper\ImageHelper;

/**
 * picture controller.
 *
 * @author Kristof Van Cauwenbergh
 */
class FileController extends Controller
{

    public function showAction($media_id, $format = null, array $options = array())
    {
        $em = $this->getDoctrine()->getEntityManager();
        $media = $em->find('\Kunstmaan\KAdminBundle\Entity\File', $media_id);
        $gallery = $media->getFilegallery();
        $galleries = $em->getRepository('KunstmaanKAdminBundle:FileGallery')
                                ->getAllGalleries();

        $picturehelper = new ImageHelper();
        $form = $this->createForm(new \Kunstmaan\KAdminBundle\Form\ImageType(), $picturehelper);

        return $this->render('KunstmaanKAdminBundle:File:show.html.twig', array(
                    'form' => $form->createView(),
                    'media' => $media,
                    'format' => $format,
                    'gallery' => $gallery,
                    'galleries' => $galleries
                ));
    }

    public function newAction($gallery_id)
    {
        $gallery = $this->getFileGallery($gallery_id);

        $em = $this->getDoctrine()->getEntityManager();
        $galleries = $em->getRepository('KunstmaanKAdminBundle:FileGallery')
                        ->getAllGalleries();

        $picturehelper = new ImageHelper();
        $form = $this->createForm(new \Kunstmaan\KAdminBundle\Form\ImageType(), $picturehelper);

        return $this->render('KunstmaanKAdminBundle:File:create.html.twig', array(
            'form'   => $form->createView(),
            'gallery' => $gallery,
            'galleries' => $galleries
        ));
    }

    public function createAction($gallery_id)
    {
        $gallery = $this->getFileGallery($gallery_id);

        $em = $this->getDoctrine()->getEntityManager();
        $galleries = $em->getRepository('KunstmaanKAdminBundle:FileGallery')
                         ->getAllGalleries();

        $request = $this->getRequest();
        $picturehelper = new ImageHelper();
        $form = $this->createForm(new \Kunstmaan\KAdminBundle\Form\ImageType(), $picturehelper);

        if ('POST' == $request->getMethod()) {
            $form->bindRequest($request);
            if ($form->isValid()){
                if ($picturehelper->getPicture()!=null) {
                    $picture = new \Kunstmaan\KAdminBundle\Entity\File();
                    $picture->setName($picturehelper->getPicture()->getClientOriginalName());
                    $picture->setContent($picturehelper->getPicture());
                    $picture->setFilegallery($gallery);

                    $em = $this->getDoctrine()->getEntityManager();
                    $em->persist($picture);
                    $em->flush();

                    //$picturehelp = $this->getPicture($picture->getId());
                    return $this->render('KunstmaanKAdminBundle:FileGallery:show.html.twig', array(
                                   'gallery' => $gallery,
                                   'galleries' => $galleries
                                   // 'picture' => $picturehelp
                    ));
                }
            }
        }
        return $this->render('KunstmaanKAdminBundle:File:create.html.twig', array(
            'form' => $form->createView(),
            'gallery' => $gallery,
            'galleries' => $galleries
        ));
    }

    protected function getFile($picture_id){
        $em = $this->getDoctrine()
                   ->getEntityManager();

        $picture = $em->getRepository('KunstmaanKAdminBundle:File')->find($picture_id);

        if (!$picture) {
            throw $this->createNotFoundException('Unable to find file.');
        }

        return $picture;
    }

    protected function getFileGallery($gallery_id)
    {
        $em = $this->getDoctrine()
                    ->getEntityManager();

        $imagegallery = $em->getRepository('KunstmaanKAdminBundle:FileGallery')->find($gallery_id);

        if (!$imagegallery) {
            throw $this->createNotFoundException('Unable to find file gallery.');
        }

        return $imagegallery;
    }



}