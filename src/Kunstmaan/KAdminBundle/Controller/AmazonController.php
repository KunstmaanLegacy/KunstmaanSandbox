<?php

namespace Kunstmaan\KAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AmazonController extends Controller
{

    public function indexAction($gallery_id, $image_id)
    {
        $ch = curl_init($_GET['url']);

        $url = parse_url($_GET['url']);
        $info = pathinfo($url['path']);
        $filename = $info['filename'].".".$info['extension'];

        $path = sys_get_temp_dir()."/".$filename;


        $savefile = fopen($path, 'w');

        curl_setopt($ch, CURLOPT_FILE, $savefile);
        curl_exec($ch);
        curl_close($ch);

        chmod($path, 777);

        $upload = new \Symfony\Component\HttpFoundation\File\File($path);

        fclose($savefile);

        $gallery = $this->getImageGallery($gallery_id);

        $picturehelper = new \Kunstmaan\KAdminBundle\Helper\ImageHelper();
        $picturehelper->setPicture( $upload );

        if ($picturehelper->getPicture()!=null) {
            $hulp = $this->getPicture($image_id);
            $picture = new \Kunstmaan\KAdminBundle\Entity\Image();
            $picture->setName($hulp->getName()."-edited");
            $picture->setContent($picturehelper->getPicture());
            $picture->setOriginal($hulp);
            $picture->setImagegallery($gallery);

            $em = $this->getDoctrine()->getEntityManager();
            $em->persist($picture);
            $em->flush();

            $em = $this->getDoctrine()->getEntityManager();
                    $galleries = $em->getRepository('KunstmaanKAdminBundle:ImageGallery')
                                     ->getAllGalleries();
            unlink($path);

                           //$picturehelp = $this->getPicture($picture->getId());
            return $this->render('KunstmaanKAdminBundle:ImageGallery:show.html.twig', array(
                         'gallery' => $gallery,
                         'galleries' => $galleries
            ));
        }

        unlink($path);

        return $this->render('KunstmaanKAdminBundle:Amazon:index.html.twig');
    }

    protected function getPicture($picture_id){
        $em = $this->getDoctrine()
                   ->getEntityManager();

        $picture = $em->getRepository('KunstmaanKAdminBundle:Image')->find($picture_id);

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
