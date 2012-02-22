<?php
// src/Blogger/BlogBundle/Form/EnquiryType.php

namespace Kunstmaan\DemoBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilder;

class ContentPageAdminType extends AbstractType
{
    public function buildForm(FormBuilder $builder, array $options)
    {
        $builder->add('title');
    }

    public function getName()
    {
        return 'page';
    }
}