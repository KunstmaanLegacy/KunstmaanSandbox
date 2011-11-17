<?php
// src/Blogger/BlogBundle/Entity/Blog.php

namespace Kunstmaan\KAdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Annotations\Annotation;
use Doctrine\Common\Collections\ArrayCollection;
use Kunstmaan\KAdminBundle\Form\PageAdminType;

/**
 * @ORM\Entity(repositoryClass="Kunstmaan\KadminBundle\Repository\MenuRepository")
 * @ORM\Table(name="menuitem")
 * @ORM\HasLifecycleCallbacks()
 */
class MenuItem

{
    /**
     * @ORM\Id
     * @ORM\Column(type="bigint")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\ManyToOne(targetEntity="MenuItem", inversedBy="children")
     * @ORM\JoinColumn(name="parent", referencedColumnName="id")
     */
    protected $parent;

    /**
     * @ORM\Column(type="integer")
     */
    protected $sequencenumber;

    /**
     * @ORM\OneToMany(targetEntity="MenuItem", mappedBy="parent")
     */
    protected $children;

    /**
     * @ORM\Column(type="string")
     */
    protected $title;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    protected $slug;



    public function __construct()
    {
        $this->children = new \Doctrine\Common\Collections\ArrayCollection();
        $this->comments = new ArrayCollection();
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

    /**
     * Add children
     *
     * @param \Kunstmaan\KAdminBundle\Entity\MenuItem $children
     */
    public function addChild(MenuItem $child)
    {
        $this->children[] = $child;

        $child->setParent($this);
    }


    public function getChildren()
    {
        return $this->children;
    }

    public function setChildren($children)
    {
        $this->children = $children;
    }

    public function disableChildrenLazyLoading()
    {
        if (is_object($this->children)) {
            $this->children->setInitialized(true);
        }
    }

    /**
     * Set parent
     *
     * @param integer $parent
     */
    public function setParent($parent)
    {
        $this->parent = $parent;
    }

    /**
     * Get parent
     *
     * @return integer
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * Set sequencenumber
     *
     * @param integer $sequencenumber
     */
    public function setSequencenumber($sequencenumber)
    {
        $this->sequencenumber = $sequencenumber;
    }

    /**
     * Get sequencenumber
     *
     * @return integer
     */
    public function getSequencenumber()
    {
        return $this->sequencenumber;
    }

    /**
     * Set slug
     *
     * @param string $slug
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;
    }

    /**
     * Get slug
     *
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }

    public function getDefaultAdminType(){
        return new MenuAdminType();
    }
}