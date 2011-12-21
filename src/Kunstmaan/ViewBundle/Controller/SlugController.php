<?php

namespace Kunstmaan\ViewBundle\Controller;

use Kunstmaan\AdminBundle\Entity\PageIFace;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class SlugController extends Controller
{
    /**
     * @Route("/{url}")
     * @Template()
     */
    public function slugAction($url)
    {
    	$em = $this->getDoctrine()->getEntityManager();
    	
    	//1. convert url to slug parts
    	$slugparts = explode("/", $url);
    	$page = null;
    	//2. lookup page by node slug
    	if(1!=1){
    		/*foreach ($slugparts as $slugpart ){
    		 $node = $em->getRepository('KunstmaanAdminNodeBundle:Node')->getNodeForSlug($page, $slugpart);
    		if($node){
    		$page = $node->getPage($em);
    		}
    		}*/
    	} else {
    		$node = $em->getRepository('KunstmaanAdminNodeBundle:Node')->getNodeForSlug(null, $url);
    		if($node){
    			$page = $node->getRef($em);
    		} else {
    			throw $this->createNotFoundException('No page found for slug ' . $url);
    		}
    	}
    	//3. render page
    	$pageparts = $em->getRepository('KunstmaanPagePartBundle:PagePartRef')->getPageParts($em, $page);
        return array('page' => $page, 'pageparts' => $pageparts);
    }
}
