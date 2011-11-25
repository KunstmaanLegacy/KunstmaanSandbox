<?php

namespace Kunstmaan\AdminBundle\Controller;

use \Kunstmaan\AdminBundle\Form\PageAdminType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Kunstmaan\AdminBundle\Entity\Page;


class MenuController extends Controller
{
    
    public function indexAction()
    {
        $em = $this->getDoctrine()->getEntityManager();

        $topnode = $em->getRepository('KunstmaanAdminBundle:Page')->getTopNode();

        return $this->render('KunstmaanAdminBundle:Pages:index.html.twig', array(
            'topnode'      => $topnode
        ));
    }

    /**
     * this method will render the tree in json format
     */
    public function treeAction(String $type)
    {
        $em = $this->getDoctrine()->getEntityManager();

        $menu = $em->getRepository('KunstmaanAdminBundle:Menu')->getMenu(type);

        return $this->render('KunstmaanAdminBundle:Menu:tree.json.twig', array(
            'menu'      => $menu
        ));
    }
	
}
