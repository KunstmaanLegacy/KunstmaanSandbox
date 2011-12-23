<?php

namespace Kunstmaan\AdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * omnext group permissions
 *
 * @ORM\Entity(repositoryClass="Kunstmaan\AdminBundle\Repository\PermissionRepository")
 * @ORM\Table(name="permissions")
 */
class Permission
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="bigint")
     */
    protected $refId;

    /**
     * @ORM\Column(type="string")
     */
    protected $refEntityname;

    /**
     * @ORM\Column(type="bigint")
     */
    protected $refGroup;

    /**
     * @ORM\Column(type="string")
     */
    protected $permissions;

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
     * @param id integer
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * Get refId
     *
     * @return integer
     */
    public function getRefId()
    {
        return $this->refId;
    }

    /**
     * Set refId
     *
     * @param string $refId
     */
    public function setRefId($num)
    {
        $this->refId = $num;
    }

    /**
     * Set refEntityname
     *
     * @param string $refEntityname
     */
    public function setRefEntityname($refEntityname)
    {
        $this->refEntityname = $refEntityname;
    }

    /**
     * Get refEntityname
     *
     * @return string
     */
    public function getRefEntityname()
    {
        return $this->refEntityname;
    }


    /**
     * Get refGroup
     *
     * @return integer
     */
    public function getRefGroup()
    {
        return $this->refGroup;
    }

    /**
     * Set refGroup
     *
     * @param string $refGroup
     */
    public function setRefGroup($refGroup)
    {
        $this->refGroup = $refGroup;
    }

    /**
     * Set title
     *
     * @param string $permissions
     */
    public function setPermissions($permissions)
    {
        $this->permissions = $permissions;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getPermissions()
    {
        return $this->permissions;
    }

}