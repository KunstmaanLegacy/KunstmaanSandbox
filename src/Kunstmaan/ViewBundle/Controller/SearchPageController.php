<?php

namespace Kunstmaan\ViewBundle\Controller;

use Kunstmaan\AdminBundle\Entity\PageIFace;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class SearchPageController extends Controller
{
    /**
     * @Route("/search", name="_search")
     * @Template()
     */
    public function searchAction()
    {
    	$query = $this->getRequest()->get("query");
    	$request = $this->getRequest();
    	$locale = $request->getSession()->getLocale();
    	$node = $em->getRepository('KunstmaanAdminNodeBundle:Node')->getNodeForSlug(null, '_search', $locale);
    	$nodeMenu = new NodeMenu($this->container, $node);
    	return array('query' => $query, 'nodemenu' => $nodeMenu);
    }
}
