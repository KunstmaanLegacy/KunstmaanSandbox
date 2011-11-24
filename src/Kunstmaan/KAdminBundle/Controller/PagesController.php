<?php

namespace Kunstmaan\KAdminBundle\Controller;

use \Kunstmaan\KAdminBundle\Form\PageAdminType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Kunstmaan\KAdminBundle\Entity\PageIFace;
use Kunstmaan\DemoBundle\AdminList\PageAdminListConfigurator;
use Kunstmaan\DemoBundle\PagePartAdmin\PagePartAdminConfigurator;
use Kunstmaan\PagePartBundle\Form\TextPagePartAdminType;

class PagesController extends Controller
{
    
    public function indexAction()
    {
        $em = $this->getDoctrine()->getEntityManager();

        $topnodes = $em->getRepository('KunstmaanKAdminNodeBundle:Node')->getTopNodes();

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
        $request = $this->getRequest();

        $topnodes = $em->getRepository('KunstmaanKAdminNodeBundle:Node')->getTopNodes();

        $page = $em->getRepository($entityname)->find($id);  //'KunstmaanKAdminBundle:Page'

        $formfactory = $this->container->get('form.factory');
        $formbuilder = $this->createFormBuilder();
        $formbuilder->add('main', $page->getDefaultAdminType());
        $formbuilder->setData(array('main'=>$page));
        //$formbuilder = $formfactory->createBuilder($page->getDefaultAdminType(), $page);
        $pagepartadmin = $this->get("pagepartadmin.factory")->createList(new PagePartAdminConfigurator(), $em, $page);
        $pagepartadmin->preBindRequest($request);
        $pagepartadmin->adaptForm($formbuilder, $formfactory);
        $form = $formbuilder->getForm();

        if ($request->getMethod() == 'POST') {
            $form->bindRequest($request);
            $pagepartadmin->bindRequest($request);
            if ($form->isValid()) {
                $em = $this->getDoctrine()
                    ->getEntityManager();
                $em->persist($page);
                $em->flush();
                return $this->redirect($this->generateUrl('KunstmaanKAdminBundle_pages_edit', array(
                    'id' => $page->getId(),
                    'entityname' => get_class($page)
                )));
            }
        }
        return $this->render('KunstmaanKAdminBundle:Pages:edit.html.twig', array(
            'topnodes' => $topnodes,
            'page' => $page,
            'entityname' => get_class($page),
            'form'    => $form->createView(),
            'pagepartadmin'    => $pagepartadmin,
            //'topnode'      => $topnode
        ));
    }
	
}
