<?php
// src/Blogger/BlogBundle/Entity/Blog.php

namespace Kunstmaan\DemoBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Annotations\Annotation;
use Doctrine\Common\Collections\ArrayCollection;
use Kunstmaan\DemoBundle\Form\ExamplePageAdminType;
use Kunstmaan\AdminBundle\Entity\PageIFace;

/**
 * @ORM\Entity(repositoryClass="Kunstmaan\DemoBundle\Repository\ExamplePageRepository")
 * @ORM\Table(name="examplepage")
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\DiscriminatorColumn(name="discr", type="string")
 *
 * @ORM\DiscriminatorMap({ "examplepage" = "ExamplePage" , "myexamplepage" = "MyExamplePage" })
 * @ORM\HasLifecycleCallbacks()
 */
class ExamplePage implements PageIFace
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
}