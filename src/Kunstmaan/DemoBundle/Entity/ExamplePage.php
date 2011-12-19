<?php
// src/Blogger/BlogBundle/Entity/Blog.php

namespace Kunstmaan\DemoBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Annotations\Annotation;
use Doctrine\Common\Collections\ArrayCollection;
use Kunstmaan\DemoBundle\Form\ExamplePageAdminType;
use Kunstmaan\AdminBundle\Entity\PageIFace;
use Kunstmaan\SearchBundle\Entity\Indexable;

/**
 * @ORM\Entity(repositoryClass="Kunstmaan\DemoBundle\Repository\ExamplePageRepository")
 * @ORM\Table(name="examplepage")
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\DiscriminatorColumn(name="discr", type="string")
 *
 * @ORM\DiscriminatorMap({ "examplepage" = "ExamplePage" , "myexamplepage" = "MyExamplePage" })
 * @ORM\HasLifecycleCallbacks()
 */
class ExamplePage implements PageIFace, Indexable
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
        return new ExamplePageAdminType();
    }

    public function isOnline()
    {
        return true;
    }

    public function getContentForIndexing($container, $entity)
    {
        $renderer = $container->get('templating');
        $em = $container->get('doctrine')->getEntityManager();

        $node = $em->getRepository('KunstmaanAdminNodeBundle:Node')->getNodeForSlug($entity->getParent(), $entity->getSlug());
        $page = $node->getRef($em);

        $pageparts = $em->getRepository('KunstmaanPagePartBundle:PagePartRef')->getPageParts($em, $page);

        $classname = explode('\\', get_class($this));
        $classname = array_pop($classname);

        $view = 'KunstmaanDemoBundle:Elastica:'.$classname.'.elastica.twig';

        return $renderer->render($view, array('page' => $entity, 'pageparts' => $pageparts));
    }

}