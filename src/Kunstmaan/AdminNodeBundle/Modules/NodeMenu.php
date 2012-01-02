<?php
// src/Acme/DemoBundle/Menu/Builder.php
namespace Kunstmaan\AdminNodeBundle\Modules;

use Kunstmaan\AdminNodeBundle\Entity\Node;

use Symfony\Component\Translation\Translator;

use Knp\Menu\FactoryInterface;
use Symfony\Component\DependencyInjection\ContainerAware;

class NodeMenu
{
    private $em;
    private $topNodeMenuItems = array();
    private $breadCrumb = array();

    /**
     * @param FactoryInterface $factory
     */
    public function __construct($em, $currentNode)
    {
        $this->em = $em;
        $tempNode = $currentNode;
        
        //Breadcrumb
        $nodeBreadCrumb = array();
        while($tempNode){
        	array_unshift($nodeBreadCrumb, $tempNode);
        	$tempNode = $tempNode->getParent();
        }
        $parentNode = null;
        foreach($nodeBreadCrumb as $nodeBreadCrumbItem){
        	$this->breadCrumb[] = new NodeMenuItem($em, $nodeBreadCrumbItem, $parentNode, $this);
        	$parentNode = $nodeBreadCrumbItem;
        }
        
        //topNodes
        $topNodes = $this->em->getRepository('KunstmaanAdminNodeBundle:Node')->getTopNodes();
        foreach($topNodes as $topNode){
        	if(sizeof($this->breadCrumb)>0 && $this->breadCrumb[0]->getNode()->getId() == $topNode->getId()){
        		$this->topNodeMenuItems[] = $this->breadCrumb[0];
        	} else {
        		$this->topNodeMenuItems[] = new NodeMenuItem($em, $topNode, null, $this);
        	}
        }
    }

    public function getTopNodes(){
        return $this->topNodeMenuItems;
    }
    
    public function getCurrent(){
    	if(sizeof($this->breadCrumb)>0){
    		return $this->breadCrumb[sizeof($this->breadCrumb)-1];
    	}
    	return null;
    }
    
    public function getActiveForDepth($depth){
    	if(sizeof($this->breadCrumb)>=$depth){
    		return $this->breadCrumb[$depth-1];
    	}
    	return null;
    }
    
    public function getBreadCrumb(){
    	return $this->breadCrumb;
    }
    
}