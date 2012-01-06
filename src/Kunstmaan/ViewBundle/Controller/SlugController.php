<?php

namespace Kunstmaan\ViewBundle\Controller;

use Kunstmaan\AdminNodeBundle\Modules\NodeMenu;

use Kunstmaan\AdminBundle\Entity\PageIFace;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class SlugController extends Controller
{
	/**
	 * @Route("/draft/{slug}", requirements={"slug" = ".+"}, name="_slug_draft")
	 * @Template("KunstmaanViewBundle:Slug:slug.html.twig")
	 */
	public function slugDraftAction($slug)
	{
		$em = $this->getDoctrine()->getEntityManager();
		$topnodes = $em->getRepository('KunstmaanAdminNodeBundle:Node')->getTopNodes();
		$node = $em->getRepository('KunstmaanAdminNodeBundle:Node')->getNodeForSlug(null, $slug);
		if($node){
			$page = $node->getRef($em);
			$page = $page = $em->getRepository('KunstmaanAdminBundle:DraftConnector')->getDraft($page);
			$nodeMenu = new NodeMenu($em, $node);
			//3. render page
			$pageparts = $em->getRepository('KunstmaanPagePartBundle:PagePartRef')->getPageParts($page);
			return array(
					'page' => $page,
					'pageparts' => $pageparts,
					'nodemenu' => $nodeMenu);
		} else {
			throw $this->createNotFoundException('No page found for slug ' . $slug);
		}
	}
	
    /**
     * @Route("/{slug}", requirements={"slug" = ".+"}, name="_slug")
     * @Template()
     */
    public function slugAction($slug)
    {
    	$em = $this->getDoctrine()->getEntityManager();
    	$topnodes = $em->getRepository('KunstmaanAdminNodeBundle:Node')->getTopNodes();
    	$node = $em->getRepository('KunstmaanAdminNodeBundle:Node')->getNodeForSlug(null, $slug);
    	if($node){
    		$page = $node->getRef($em);
    		$nodeMenu = new NodeMenu($em, $node);
    		//3. render page
    		$pageparts = $em->getRepository('KunstmaanPagePartBundle:PagePartRef')->getPageParts($page);
    		return array(
    				'page' => $page,
    				'pageparts' => $pageparts,
    				'nodemenu' => $nodeMenu);
    	} else {
    		throw $this->createNotFoundException('No page found for slug ' . $slug);
    	}
    }
    
    
}
