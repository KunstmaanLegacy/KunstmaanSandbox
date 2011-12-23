<?php

namespace Kunstmaan\AdminBundle\Controller;

use Kunstmaan\AdminNodeBundle\Modules\NodeMenu;

use \Kunstmaan\AdminBundle\Form\PageAdminType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Kunstmaan\AdminBundle\Entity\PageIFace;
use Kunstmaan\DemoBundle\AdminList\PageAdminListConfigurator;
use Kunstmaan\DemoBundle\PagePartAdmin\PagePartAdminConfigurator;
use Kunstmaan\PagePartBundle\Form\TextPagePartAdminType;

class PagesController extends Controller
{
    
    public function indexAction()
    {
        $em = $this->getDoctrine()->getEntityManager();

        $topnodes = $em->getRepository('KunstmaanAdminNodeBundle:Node')->getTopNodes();
        $nodemenus = array();
        foreach($topnodes as $node){
        	$nodemenus[$node->getId()] = new NodeMenu($em, $node);
        	foreach($node->getChildren() as $node) $nodemenus[$node->getId()] = new NodeMenu($em, $node);
        }

        $request = $this->getRequest();
        $adminlist    = $this->get("adminlist.factory")->createList(new PageAdminListConfigurator(), $em);
        $adminlist->bindRequest($request);

        return $this->render('KunstmaanAdminBundle:Pages:index.html.twig', array(
            'topnodes'      => $topnodes,
        	'nodemenus' 	=> $nodemenus,
            'pageadminlist'    => $adminlist,
        ));
    }

    public function editAction($id, $entityname)
    {
        $em = $this->getDoctrine()->getEntityManager();
        $request = $this->getRequest();

        $topnodes = $em->getRepository('KunstmaanAdminNodeBundle:Node')->getTopNodes();
        $nodemenus = array();
        foreach($topnodes as $node){
        	$nodemenus[$node->getId()] = new NodeMenu($em, $node);
        	foreach($node->getChildren() as $node) $nodemenus[$node->getId()] = new NodeMenu($em, $node);
        }

        $page = $em->getRepository($entityname)->find($id);  //'KunstmaanAdminBundle:Page'
        $locale = $request->getSession()->getLocale();
        $page->setTranslatableLocale($locale);
        $em->refresh($page);
        $repo = $em->getRepository('StofDoctrineExtensionsBundle:LogEntry');
        $logs = $repo->getLogEntries($page);
        if(!is_null($this->getRequest()->get('version'))){
        	$repo->revert($page, $this->getRequest()->get('version'));
        }

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
                $em = $this->getDoctrine()->getEntityManager();
                $em->persist($page);
                $em->flush();
                return $this->redirect($this->generateUrl('KunstmaanAdminBundle_pages_edit', array(
                    'id' => $page->getId(),
                    'entityname' => get_class($page)
                )));
            }
        }
        
        return $this->render('KunstmaanAdminBundle:Pages:edit.html.twig', array(
            'topnodes' => $topnodes,
            'page' => $page,
            'entityname' => get_class($page),
            'form'    => $form->createView(),
            'pagepartadmin'    => $pagepartadmin,
        	'logs' => $logs,
        	'nodemenus' => $nodemenus
            //'topnode'      => $topnode
        ));
    }
	
}
