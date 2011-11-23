<?php

namespace Kunstmaan\KMediaBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Kunstmaan\KMediaBundle\Entity\Slide
 * Class that defines a slide in the system
 *
 * @author Kristof Van Cauwenbergh
 *
 * @ORM\Table("file")
 * @ORM\Entity
 */
class Slide extends Media
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
     * @var string $context
     *
     */
    protected $context = "omnext_slide";

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
     * @var Kunstmaan\KMediaBundle\Entity\Gallery
     */
    protected $gallery;

    public function __construct()
    {
        parent::__construct();
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
}