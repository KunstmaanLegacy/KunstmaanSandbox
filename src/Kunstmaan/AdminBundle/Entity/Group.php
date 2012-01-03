<?php

namespace Kunstmaan\AdminBundle\Entity;

use FOS\UserBundle\Entity\Group as BaseGroup;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="user_group")
 * @ORM\Entity(repositoryClass="Kunstmaan\AdminBundle\Repository\GroupRepository")
 */
class Group extends BaseGroup
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\generatedValue(strategy="AUTO")
     */
    protected $id;

    /**
    * @ORM\OneToMany(targetEntity="Permission", mappedBy="refGroup")
    */
    protected $permissions;

    public function getPermissions()
    {
        return $this->permissions;
    }

    public function __construct()
    {
        $this->permissions = new \Doctrine\Common\Collections\ArrayCollection();
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
}