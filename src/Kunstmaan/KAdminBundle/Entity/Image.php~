<?php

namespace Kunstmaan\KAdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Kunstmaan\KAdminBundle\Entity\Image
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
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", unique=true, length=255)
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $uuid;

    /**
     * @ORM\ManyToOne(targetEntity="Image", inversedBy="edits")
     * @ORM\JoinColumn(name="original", referencedColumnName="id", nullable=true)
     */
    protected $original;

    /**
     * @ORM\OneToMany(targetEntity="Image", mappedBy="original")
     */
    protected $edits;

    /**
     * @var string $context
     *
     */
    protected $context = "omnext_picture";

    /**
     * @ORM\ManyToOne(targetEntity="ImageGallery", inversedBy="images")
     * @ORM\JoinColumn(name="imagegallery_id", referencedColumnName="id")
     */
    protected $imagegallery;

    /**
     * @var string $name
     */
    protected $name;

    /**
     * @var string $contentType
     */
    protected $contentType;

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
     * @var array $metadata
     */
    protected $metadata;

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

    /**
     * Set uuid
     *
     * @param string $uuid
     */
    public function setUuid($uuid)
    {
        $this->uuid = $uuid;
    }

    /**
     * Get uuid
     *
     * @return string 
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    public function show($format=null, $options = array()){
        $path = $this->getContext()."/";
        $path = $path.$this->getUuid();
        if(isset($format)){
            $path = $path."_".$format;
        }
        $path = $path.".".\Ano\Bundle\SystemBundle\HttpFoundation\File\MimeType\ExtensionGuesser::guess($this->getContentType());
        return $path;
    }


    /**
     * Set original
     *
     * @param Kunstmaan\KAdminBundle\Entity\Image $original
     */
    public function setOriginal(\Kunstmaan\KAdminBundle\Entity\Image $original)
    {
        $this->original = $original;
    }

    /**
     * Get original
     *
     * @return Kunstmaan\KAdminBundle\Entity\Image 
     */
    public function getOriginal()
    {
        return $this->original;
    }

    public function __construct()
    {
        $this->edits = new \Doctrine\Common\Collections\ArrayCollection();
        $this->setCreatedAt(new \DateTime());
        $this->setUpdatedAt(new \DateTime());
    }
    
    /**
     * Add edits
     *
     * @param Kunstmaan\KAdminBundle\Entity\Image $edits
     */
    public function addImage(\Kunstmaan\KAdminBundle\Entity\Image $edits)
    {
        $this->edits[] = $edits;
    }

    /**
     * Get edits
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getEdits()
    {
        return $this->edits;
    }
}