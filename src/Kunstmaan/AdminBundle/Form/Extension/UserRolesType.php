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
        $choiceList = new UserRolesChoiceList($this->roles);
        return array(
            'choice_list'   => $choiceList,
            'multiple'      => true,
            'expanded'      => true,
            'displaydata'   => $choiceList->getChoicesForData()
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