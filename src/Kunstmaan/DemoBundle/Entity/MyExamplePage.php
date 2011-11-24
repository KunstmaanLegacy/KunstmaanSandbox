<?php
// src/KAdminBundle/Entity/User.php

namespace Kunstmaan\DemoBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Annotations\Annotation;
use Doctrine\Common\Collections\ArrayCollection;
use Kunstmaan\DemoBundle\Form\MyExamplePageAdminType;

/**
 * @ORM\Entity
 * @ORM\Table(name="myexamplepage")
 */
class MyExamplePage extends ExamplePage
{

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    protected $customfield;

    /**
     * Set customfield
     *
     * @param string $customfield
     */
    public function setCustomfield($customfield) {
        $this->customfield = $customfield;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getCustomfield() {
        return $this->customfield;
    }

    public function getDefaultAdminType() {
        return new MyExamplePageAdminType();
    }

}