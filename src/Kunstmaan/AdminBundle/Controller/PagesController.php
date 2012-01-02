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
        $nodeMenu = new NodeMenu($em, null);

        $request = $this->getRequest();
        $adminlist    = $this->get("adminlist.factory")->createList(new PageAdminListConfigurator(), $em);
        $adminlist->bindRequest($request);

        return $this->render('KunstmaanAdminBundle:Pages:index.html.twig', array(
            'topnodes'      => $topnodes,
        	'nodemenu' 	=> $nodeMenu,
            'pageadminlist'    => $adminlist,
        ));
    }

    public function editAction($id)
    {
        $em = $this->getDoctrine()->getEntityManager();
        $request = $this->getRequest();
        
        $node = $em->getRepository('KunstmaanAdminNodeBundle:Node')->find($id);
        $page = $em->getRepository($node->getRefEntityname())->find($node->getRefId());
        
        $addpage = $request->get("addpage");
        $addpagetitle = $request->get("title");
        if(is_string($addpage) && $addpage != ''){
        	$newpage = new $addpage();
        	$newpage->setTitle('New page');
        	if(is_string($addpagetitle) && $addpagetitle != ''){
        		$newpage->setTitle($addpagetitle);
        	}
        	$newpage->setTranslatableLocale('en');
        	$em->persist($newpage);
        	$em->flush();
        	$nodeparent = $em->getRepository('KunstmaanAdminNodeBundle:Node')->getNodeFor($page);
        	$nodenewpage = $em->getRepository('KunstmaanAdminNodeBundle:Node')->getNodeFor($newpage);
        	$nodenewpage->setParent($nodeparent);
        	$em->persist($nodenewpage);
        	$em->flush();
        	return $this->redirect($this->generateUrl("KunstmaanAdminBundle_pages_edit", array('id'=>$nodenewpage->getId())));
        }
        
        $delete = $request->get("delete");
        if(is_string($delete) && $delete == 'true'){
        	//remove node and page
        	$nodeparent = $node->getParent();
        	$em->remove($page);
        	$em->flush();
        	return $this->redirect($this->generateUrl("KunstmaanAdminBundle_pages_edit", array('id'=>$nodeparent->getId())));
        }

        $topnodes = $em->getRepository('KunstmaanAdminNodeBundle:Node')->getTopNodes();

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
                    'id' => $node->getId()
                )));
            }
        }
        $nodeMenu = new NodeMenu($em, $node);
        
        return $this->render('KunstmaanAdminBundle:Pages:edit.html.twig', array(
            'topnodes' => $topnodes,
        	'node' => $node,
            'page' => $page,
            'entityname' => $node->getRefEntityname(),
            'form'    => $form->createView(),
            'pagepartadmin'    => $pagepartadmin,
        	'logs' => $logs,
        	'nodemenu' => $nodeMenu,
            //'topnode'      => $topnode
        ));
    }
	
}
