<?php

namespace Kunstmaan\SandboxDemoBundle\Entity\Pages;

use Kunstmaan\SandboxDemoBundle\Form\Pages\FormPageAdminType;

use Doctrine\ORM\Mapping as ORM;
use Kunstmaan\FormBundle\Entity\AbstractFormPage;
use Kunstmaan\PagePartBundle\Helper\HasPageTemplateInterface;
use Symfony\Component\Form\AbstractType;

/**
 * FormPage
 *
 * @ORM\Entity()
 * @ORM\Table(name="sandbox_form_pages")
 */
class FormPage extends AbstractFormPage implements HasPageTemplateInterface
{

    /**
     * Returns the default backend form type for this form
     *
     * @return AbstractType
     */
    public function getDefaultAdminType()
    {
        return new FormPageAdminType();
    }

    /**
     * @return array
     */
    public function getPossibleChildTypes()
    {
        return array(
            array(
                'name' => 'ContentPage',
                'class' => "Kunstmaan\SandboxDemoBundle\Entity\Pages\ContentPage"
            ),
            array (
                'name' => 'FormPage',
                'class' => "Kunstmaan\SandboxDemoBundle\Entity\Pages\FormPage"
            )
        );
    }

    /**
     * @return string[]
     */
    public function getPagePartAdminConfigurations()
    {
        return array("KunstmaanSandboxDemoBundle:form", "KunstmaanSandboxDemoBundle:banners", "KunstmaanSandboxDemoBundle:footer");
    }

    /**
     * {@inheritdoc}
     */
    public function getPageTemplates()
    {
        return array("KunstmaanSandboxDemoBundle:formpage", "KunstmaanSandboxDemoBundle:formpage-singlecolumn");
    }

    /**
     * @return string
     */
    public function getDefaultView()
    {
        return "KunstmaanSandboxDemoBundle:Pages\FormPage:view.html.twig";
    }
}
