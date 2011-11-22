<?php

namespace Kunstmaan\KAdminBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilder;

/**
 * class to define the form to upload a picture
 *
 */
class FileType extends AbstractType
{
    public function buildForm(FormBuilder $builder, array $options)
    {
        $builder
            ->add('file', 'file')
        ;
    }

    public function getName()
    {
        return 'kunstmaan_kadminbundle_filetype';
    }
}

?>