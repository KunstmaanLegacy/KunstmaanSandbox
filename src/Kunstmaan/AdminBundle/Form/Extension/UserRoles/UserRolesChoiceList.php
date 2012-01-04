<?php

namespace Kunstmaan\AdminBundle\Form\Extension\UserRoles;

use Symfony\Component\Form\Extension\Core\ChoiceList\ChoiceListInterface;

class UserRolesChoiceList implements ChoiceListInterface
{
    private $definedRoles;

    public function __construct($definedRoles)
    {
        $this->definedRoles = $definedRoles;
    }

    public function getChoices()
    {
        $roles = array();
        foreach ($this->definedRoles as $name => $rolesHierarchy) {
            $roles[$name] = $name;// . ': ' . implode(', ', $rolesHierarchy);

            foreach ($rolesHierarchy as $role) {
                if (!isset($roles[$role])) {
                    $roles[$role] = $role;
                }
            }
        }
        return $roles;
    }
}