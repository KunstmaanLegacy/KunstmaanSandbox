<?php
// src/Blogger/BlogBundle/Form/EnquiryType.php

namespace Kunstmaan\AdminBundle\Form;

use Symfony\Component\DependencyInjection\Container;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilder;

class EditGroupType extends AbstractType
{
	private $container;
	
	public function __construct(Container $container){
		$this->container = $container;
	}
	
    public function buildForm(FormBuilder $builder, array $options)
    {
        $builder->add('name');

    }

    public function getName()
    {
        return 'editgroup';
    }
}