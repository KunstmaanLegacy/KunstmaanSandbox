<?php
// src/Blogger/BlogBundle/Form/EnquiryType.php

namespace Kunstmaan\KAdminNodeBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilder;

class NodeAdminType extends AbstractType
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