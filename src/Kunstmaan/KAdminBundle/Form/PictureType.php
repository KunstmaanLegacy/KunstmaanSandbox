<?php

namespace Kunstmaan\KAdminBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilder;

/**
 * class to define the form to upload a picture
 *
 */
class PictureType extends AbstractType
{
    public function buildForm(FormBuilder $builder, array $options)
    {
        $builder
            ->add('picture', 'file')
        ;
    }

    public function getName()
    {
        return 'kunstmaan_kadminbundle_picturetype';
    }
}

?>