<?php

namespace Kunstmaan\KAdminBundle\Controller;

use \Kunstmaan\KAdminBundle\Form\PageAdminType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Kunstmaan\KAdminBundle\Entity\Page;
use Kunstmaan\KAdminBundle\AdminList\PageAdminListConfigurator;

class PagesController extends Controller
{
    
    public function indexAction()
    {
        $em = $this->getDoctrine()->getEntityManager();

        $topnodes = $em->getRepository('KunstmaanKAdminBundle:Node')->getTopNodes();

        $request = $this->getRequest();
        $adminlist    = $this->get("adminlist.factory")->createList(new PageAdminListConfigurator(), $em);
        $adminlist->bindRequest($request);

        return $this->render('KunstmaanKAdminBundle:Pages:index.html.twig', array(
            'topnodes'      => $topnodes,
            'pageadminlist'    => $adminlist,
        ));
    }

    public function editAction($id, $entityname)
    {
        $em = $this->getDoctrine()->getEntityManager();
        $topnodes = $em->getRepository('KunstmaanKAdminBundle:Node')->getTopNodes();

        $page = $em->getRepository($entityname)->find($id);  //'KunstmaanKAdminBundle:Page'

        $request = $this->getRequest();
        $form    = $this->createForm($page->getDefaultAdminType(), $page);
        if ($request->getMethod() == 'POST') {
            $form->bindRequest($request);

            if ($form->isValid()) {
                $em = $this->getDoctrine()
                    ->getEntityManager();
                $em->getEventManager()->addEventSubscriber(new Debugger());
                $em->persist($page);
                $em->flush();

                /*return $this->redirect($this->generateUrl('KunstmaanKAdminBundle_pages_edit', array(
                    'id' => $page->getId()
                )));*/
            }
        }

        return $this->render('KunstmaanKAdminBundle:Pages:edit.html.twig', array(
            'topnodes' => $topnodes,
            'page' => $page,
            'form'    => $form->createView(),
            //'topnode'      => $topnode
        ));
    }
	
}
