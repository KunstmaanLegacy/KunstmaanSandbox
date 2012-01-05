<?php
// src/Blogger/BlogBundle/Entity/Blog.php

namespace Kunstmaan\DemoBundle\Entity;

use Gedmo\Mapping\Annotation as Gedmo;
use Gedmo\Translatable\Translatable;
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
 * @Gedmo\Loggable
 */
class ExamplePage implements PageIFace, Translatable
{
    /**
     * @ORM\Id
     * @ORM\Column(type="bigint")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @Gedmo\Versioned
     * @Gedmo\Translatable
     * @ORM\Column(type="string")
     */
    protected $title;
    
    /**
     * @Gedmo\Locale
     * Used locale to override Translation listener`s locale
     * this is not a mapped field of entity metadata, just a simple property
     */
    protected $locale;


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
        return new ExamplePageAdminType();
    }

    public function isOnline()
    {
        return true;
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
    	$array[] = array('name' => 'ExamplePage', 'class'=>"Kunstmaan\DemoBundle\Entity\ExamplePage");
    	$array[] = array('name' => 'MyExamplePage', 'class'=>"Kunstmaan\DemoBundle\Entity\MyExamplePage");
    	return $array;
    }
}