<?php

namespace Kunstmaan\KAdminBundle\Controller;

use \Kunstmaan\KAdminBundle\Form\PageAdminType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Kunstmaan\KAdminBundle\Entity\Page;


class MenuController extends Controller
{
    
    public function indexAction()
    {
        $em = $this->getDoctrine()->getEntityManager();

        $topnode = $em->getRepository('KunstmaanKAdminBundle:Page')->getTopNode();

        return $this->render('KunstmaanKAdminBundle:Pages:index.html.twig', array(
            'topnode'      => $topnode
        ));
    }

    /**
     * this method will render the tree in json format
     */
    public function treeAction(String $type)
    {
        $em = $this->getDoctrine()->getEntityManager();

        $menu = $em->getRepository('KunstmaanKAdminBundle:Menu')->getMenu(type);

        return $this->render('KunstmaanKAdminBundle:Menu:tree.json.twig', array(
            'menu'      => $menu
        ));
    }
	
}
