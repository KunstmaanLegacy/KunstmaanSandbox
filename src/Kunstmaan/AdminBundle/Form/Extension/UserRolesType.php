<?php

namespace Kunstmaan\AdminBundle\Form\Extension;

use Symfony\Component\Form\AbstractType;
use Kunstmaan\AdminBundle\Form\Extension\UserRoles\UserRolesChoiceList;

class UserRolesType extends AbstractType
{

    protected $roles;

    public function __construct($roles)
    {
        $this->roles = $roles;
    }

    public function getDefaultOptions(array $options)
    {
        return array(
            'choice_list'   => new UserRolesChoiceList($this->roles),
            'multiple'      => true,
            'expanded'      => true,
        );
    }

    public function getParent(array $options)
    {
        return 'choice';
    }

    public function getName()
    {
        return 'userroles';
    }
}