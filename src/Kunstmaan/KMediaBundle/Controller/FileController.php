<?php
// src/Kunstmaan/KAdminBundle/controller/PictureController.php

namespace Kunstmaan\KMediaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Kunstmaan\KMediaBundle\Helper\ImageHelper;
use Kunstmaan\KMediaBundle\Form\ImageType;
use Kunstmaan\KMediaBundle\Entity\File;

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
        $media = $em->find('\Kunstmaan\KMediaBundle\Entity\File', $media_id);
        $gallery = $media->getFilegallery();
        $galleries = $em->getRepository('KunstmaanKMediaBundle:FileGallery')
                                ->getAllGalleries();

        $picturehelper = new ImageHelper();
        $form = $this->createForm(new ImageType(), $picturehelper);

        return $this->render('KunstmaanKMediaBundle:File:show.html.twig', array(
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
        $galleries = $em->getRepository('KunstmaanKMediaBundle:FileGallery')
                        ->getAllGalleries();

        $picturehelper = new ImageHelper();
        $form = $this->createForm(new ImageType(), $picturehelper);

        return $this->render('KunstmaanKMediaBundle:File:create.html.twig', array(
            'form'   => $form->createView(),
            'gallery' => $gallery,
            'galleries' => $galleries
        ));
    }

    public function createAction($gallery_id)
    {
        $gallery = $this->getFileGallery($gallery_id);

        $em = $this->getDoctrine()->getEntityManager();
        $galleries = $em->getRepository('KunstmaanKMediaBundle:FileGallery')
                         ->getAllGalleries();

        $request = $this->getRequest();
        $picturehelper = new ImageHelper();
        $form = $this->createForm(new ImageType(), $picturehelper);

        if ('POST' == $request->getMethod()) {
            $form->bindRequest($request);
            if ($form->isValid()){
                if ($picturehelper->getPicture()!=null) {
                    $picture = new File();
                    $picture->setName($picturehelper->getPicture()->getClientOriginalName());
                    $picture->setContent($picturehelper->getPicture());
                    $picture->setFilegallery($gallery);

                    $em = $this->getDoctrine()->getEntityManager();
                    $em->persist($picture);
                    $em->flush();

                    //$picturehelp = $this->getPicture($picture->getId());
                    return $this->render('KunstmaanKMediaBundle:FileGallery:show.html.twig', array(
                                   'gallery' => $gallery,
                                   'galleries' => $galleries
                                   // 'picture' => $picturehelp
                    ));
                }
            }
        }
        return $this->render('KunstmaanKMediaBundle:File:create.html.twig', array(
            'form' => $form->createView(),
            'gallery' => $gallery,
            'galleries' => $galleries
        ));
    }

    protected function getFile($picture_id){
        $em = $this->getDoctrine()
                   ->getEntityManager();

        $picture = $em->getRepository('KunstmaanKMediaBundle:File')->find($picture_id);

        if (!$picture) {
            throw $this->createNotFoundException('Unable to find file.');
        }

        return $picture;
    }

    protected function getFileGallery($gallery_id)
    {
        $em = $this->getDoctrine()
                    ->getEntityManager();

        $imagegallery = $em->getRepository('KunstmaanKMediaBundle:FileGallery')->find($gallery_id);

        if (!$imagegallery) {
            throw $this->createNotFoundException('Unable to find file gallery.');
        }

        return $imagegallery;
    }



}