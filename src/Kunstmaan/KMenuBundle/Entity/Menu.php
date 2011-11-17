<?php
// src/Blogger/BlogBundle/Entity/Blog.php

namespace Kunstmaan\KAdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Annotations\Annotation;
use Doctrine\Common\Collections\ArrayCollection;
use Kunstmaan\KAdminBundle\Form\PageAdminType;

/**
 * @ORM\Entity(repositoryClass="Kunstmaan\KadminBundle\Repository\MenuRepository")
 * @ORM\Table(name="menu")
 * @ORM\HasLifecycleCallbacks()
 */
class Menu
{
    /**
     * @ORM\Id
     * @ORM\Column(type="bigint")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\ManyToOne(targetEntity="MenuItem")
     * @ORM\JoinColumn(name="root", referencedColumnName="id")
     */
    protected $root;


    /**
     * @ORM\Column(type="string")
     */
    protected $type;



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
    public function setType($type)
    {
        $this->type = $type;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    public function __toString()
    {
        return $this->getType(). " menu";
    }

    /**
     * Set parent
     *
     * @param integer $parent
     */
    public function setRoot($root)
    {
        $this->root = $root;
    }

    /**
     * Get parent
     *
     * @return integer
     */
    public function getRoot()
    {
        return $this->root;
    }

    public function getDefaultAdminType(){
        return new MenuAdminType();
    }
}