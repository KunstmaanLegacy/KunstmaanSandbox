<?php

namespace  Kunstmaan\KAdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Ano\Bundle\MediaBundle\Model\Media as BaseMedia;

/**
 * Class that defines a Media object from the AnoBundle in the database
 *
 * @author Kristof Van Cauwenbergh
 *
 * @ORM\Entity(repositoryClass="Kunstmaan\KAdminBundle\Repository\MediaRepository")
 * @ORM\Table(name="media")
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\DiscriminatorColumn(name="discr", type="string")
 * @ORM\DiscriminatorMap({"media" = "Media", "image" = "Image"})
 */
abstract class Media extends BaseMedia{

    /**
         * @ORM\Id
         * @ORM\Column(type="integer")
         * @ORM\GeneratedValue(strategy="AUTO")
    */
    protected $id;


    public function setId($id){
        $this->id = $id;
    }

    public function getId(){
        return $this->id;
    }

        /**
         * @ORM\Column(type="string")
         */
        protected $name;

        /**
         * @ORM\Column(type="string")
         */
        protected $contentType;

        /**
         * @ORM\Column(type="array")
         */
        protected $metadata;

        /**
         * @ORM\Column(type="integer")
         */
       // protected $width;

        /**
         * @ORM\Column(type="integer")
         */
        //protected $height;

        /**
         * @ORM\Column(type="datetime")
         */
        protected $createdAt;

        /**
         * @ORM\Column(type="datetime")
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