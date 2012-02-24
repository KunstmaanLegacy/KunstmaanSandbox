<?php

namespace Kunstmaan\DemoBundle\Entity;

use Kunstmaan\DemoBundle\PagePartAdmin\BannerPagePartAdminConfigurator;

use Kunstmaan\DemoBundle\PagePartAdmin\ContentPagePagePartAdminConfigurator;

use Kunstmaan\AdminNodeBundle\Entity\HasNode;

use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\Request;

use Kunstmaan\AdminBundle\Entity\DeepCloneableIFace;

use Gedmo\Mapping\Annotation as Gedmo;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Annotations\Annotation;
use Doctrine\Common\Collections\ArrayCollection;
use Kunstmaan\DemoBundle\Form\ContentPageAdminType;
use Kunstmaan\AdminBundle\Entity\PageIFace;
use Kunstmaan\SearchBundle\Entity\Indexable;
use Kunstmaan\AdminBundle\Modules\ClassLookup;

/**
 * @ORM\Entity(repositoryClass="Kunstmaan\DemoBundle\Repository\ContentPageRepository")
 * @ORM\Table(name="democontentpage")
 * @ORM\HasLifecycleCallbacks()
 */

class ContentPage implements PageIFace, Indexable, DeepCloneableIFace
{
    /**
     * @ORM\Id
     * @ORM\Column(type="bigint")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="string")
     */
    protected $title;

    protected $parent;

    public function getParent(){
    	return $this->parent;
    }

    public function setParent(HasNode $parent){
    	$this->parent = $parent;
    }


    protected $possiblePermissions = array(
        'read', 'write', 'delete'
    );

    public function __construct()
    {
    }

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set id
     *
     * @param string $id
     */
    public function setId($num)
    {
        $this->id = $num;
    }

    /**
     * Set title
     *
     * @param string $title
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    public function __toString()
    {
        return $this->getTitle();
    }

    public function getDefaultAdminType()
    {
        return new ContentPageAdminType();
    }

    public function isOnline()
    {
        return true;
    }

    public function getContentForIndexing($container, $entity)
    {
        $renderer = $container->get('templating');
    	$em = $container->get('doctrine')->getEntityManager();

    	$pageparts = $em->getRepository('KunstmaanPagePartBundle:PagePartRef')->getPageParts($this);

    	$classname = ClassLookup::getClassName($this);

    	$view = 'KunstmaanDemoBundle:Elastica:'.$classname.'.elastica.twig';

    	$temp = $renderer->render($view, array('page' => $this, 'pageparts' => $pageparts));
    	return strip_tags($temp);
    }

    public function setTranslatableLocale($locale)
    {
    	$this->locale = $locale;
    }

    public function getPossiblePermissions()
    {
        return $this->possiblePermissions;
    }


    public function getPossibleChildPageTypes()
    {
    	$array[] = array('name' => 'ContentPage', 'class'=>"Kunstmaan\DemoBundle\Entity\ContentPage");
    	return $array;
    }

    public function deepClone(EntityManager $em){
    	$newpage = new ContentPage();
    	$newpage->setTitle($this->getTitle());
    	$em->persist($newpage);
    	$em->flush();
    	$em->getRepository('KunstmaanPagePartBundle:PagePartRef')->copyPageParts($em, $this, $newpage, $context = "main");
    	return $newpage;
    }

    public function getPagePartAdminConfigurations(){
    	return array(new ContentPagePagePartAdminConfigurator(), new BannerPagePartAdminConfigurator());
    }

    public function service($container, Request $request, &$result){

    }

    public function getDefaultView(){
    	return "KunstmaanDemoBundle:ContentPage:view.html.twig";
    }
}