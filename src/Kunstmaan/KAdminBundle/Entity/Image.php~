<?php

namespace Kunstmaan\KAdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Kunstmaan\KAdminBundle\Entity\Picture
 * Class that defines a picture in the system
 *
 * @author Kristof Van Cauwenbergh
 *
 * @ORM\Table("image")
 * @ORM\Entity
 */
class Image extends Media
{
    /**
     * @var integer $id
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string $context
     *
     */
    protected $context = "omnext_picture";


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
     * Get context
     *
     * @return string
     */
    public function getContext()
    {
        return $this->context;
    }

    /**
     * @ORM\ManyToOne(targetEntity="ImageGallery", inversedBy="images")
     * @ORM\JoinColumn(name="imagegallery_id", referencedColumnName="id")
     */
    protected $imagegallery;

    /**
     * Set imagegallery
     *
     * @param Kunstmaan\KAdminBundle\Entity\ImageGallery $imagegallery
     */
    public function setImagegallery(\Kunstmaan\KAdminBundle\Entity\ImageGallery $imagegallery)
    {
        $this->imagegallery = $imagegallery;
    }

    /**
     * Get imagegallery
     *
     * @return Kunstmaan\KAdminBundle\Entity\ImageGallery 
     */
    public function getImagegallery()
    {
        return $this->imagegallery;
    }

    /**
     * @var string $name
     */
    protected $name;

    /**
     * @var string $contentType
     */
    protected $contentType;

    /**
     * @var integer $width
     */
    protected $width;

    /**
     * @var integer $height
     */
    protected $height;

    /**
     * @var datetime $createdAt
     */
    protected $createdAt;

    /**
     * @var datetime $updatedAt
     */
    protected $updatedAt;

    protected $content;


    /**
     * Set name
     *
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set contentType
     *
     * @param string $contentType
     */
    public function setContentType($contentType)
    {
        $this->contentType = $contentType;
    }

    /**
     * Get contentType
     *
     * @return string 
     */
    public function getContentType()
    {
        return $this->contentType;
    }

    /**
     * Set width
     *
     * @param integer $width
     */
    public function setWidth($width)
    {
        $this->width = $width;
    }

    /**
     * Get width
     *
     * @return integer 
     */
    public function getWidth()
    {
        return $this->width;
    }

    /**
     * Set height
     *
     * @param integer $height
     */
    public function setHeight($height)
    {
        $this->height = $height;
    }

    /**
     * Get height
     *
     * @return integer 
     */
    public function getHeight()
    {
        return $this->height;
    }

    /**
     * Set createdAt
     *
     * @param datetime $createdAt
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;
    }

    /**
     * Get createdAt
     *
     * @return datetime 
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set updatedAt
     *
     * @param datetime $updatedAt
     */
    public function setUpdatedAt($updatedAt)
    {
        $this->updatedAt = $updatedAt;
    }

    /**
     * Get updatedAt
     *
     * @return datetime 
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * Set content
     *
     * @param mixed $content
     */
    public function setContent($content)
    {
        $this->content = $content;
    }

    /**
     * Get content
     *
     * @return mixed 
     */
    public function getContent()
    {
        return $this->content;
    }
    /**
     * @var array $metadata
     */
    protected $metadata;


    /**
     * Set metadata
     *
     * @param array $metadata
     */
    public function setMetadata($metadata)
    {
        $this->metadata = $metadata;
    }

    /**
     * Get metadata
     *
     * @return array 
     */
    public function getMetadata()
    {
        return $this->metadata;
    }
}