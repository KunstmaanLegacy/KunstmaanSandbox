<?php
// src/Blogger/BlogBundle/Form/EnquiryType.php

namespace Kunstmaan\KAdminBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilder;

class MyPageAdminType extends PageAdminType
{
    public function buildForm(FormBuilder $builder, array $options)
    {
        parent::buildForm($builder, $options);
        $builder->add('customfield');
    }

    public function getName()
    {
        return 'mypage';
    }

}