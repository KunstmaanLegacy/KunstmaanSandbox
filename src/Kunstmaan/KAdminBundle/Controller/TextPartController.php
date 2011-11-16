<?php
// src/Blogger/BlogBundle/Controller/CommentController.php

namespace Kunstmaan\KAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * textpart controller.
 *
 * @author Kristof Van Cauwenbergh
 */
class TextPartController extends Controller
{

    public function newAction(){
        $textpart = new \Kunstmaan\KAdminBundle\Entity\TextPart();
        $form = $this->createForm(new \Kunstmaan\KAdminBundle\Form\TextPartType(), $textpart);

        return $this->render('KunstmaanKAdminBundle:TextPart:create.html.twig', array(
            'form'   => $form->createView()
        ));
    }

    public function createAction(){
        $request = $this->getRequest();
        $textpart = new \Kunstmaan\KAdminBundle\Entity\TextPart();
        $form = $this->createForm(new \Kunstmaan\KAdminBundle\Form\TextPartType(), $textpart);

        if ('POST' == $request->getMethod()) {
            $form->bindRequest($request);
            if ($form->isValid()){
                $em = $this->getDoctrine()->getEntityManager();
                $em->persist($textpart);
                $em->flush();

                return $this->render('KunstmaanKAdminBundle:TextPart:show.html.twig', array(
                          'textpart' => $textpart
                ));
            }
        }

        return $this->render('KunstmaanKAdminBundle:TextPart:create.html.twig', array(
            'form' => $form->createView()
        ));
    }
}