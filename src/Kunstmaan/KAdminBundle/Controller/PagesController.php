<?php

namespace Kunstmaan\KAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class PagesController extends Controller
{
    
    public function indexAction()
    {
        $em = $this->getDoctrine()->getEntityManager();

        $topnode = $em->getRepository('KunstmaanKAdminBundle:Page')->getTopNode();

        return $this->render('KunstmaanKAdminBundle:Pages:index.html.twig', array(
            'topnode'      => $topnode
        ));
    }
	
}
