<?php

namespace Kunstmaan\SandboxDemoBundle\Entity\Pages;

use Kunstmaan\SandboxDemoBundle\Form\Pages\HomePageAdminType;

use Doctrine\ORM\Mapping as ORM;
use Kunstmaan\NodeBundle\Entity\AbstractPage;
use Kunstmaan\PagePartBundle\Helper\HasPageTemplateInterface;
use Symfony\Component\Form\AbstractType;

/**
 * HomePage
 *
 * @ORM\Entity()
 * @ORM\Table(name="sandbox_home_pages")
 */
class HomePage extends AbstractPage  implements HasPageTemplateInterface
{

    /**
     * Returns the default backend form type for this page
     *
     * @return AbstractType
     */
    public function getDefaultAdminType()
    {
        return new HomePageAdminType();
    }

    /**
     * @return array
     */
    public function getPossibleChildTypes()
    {
        return array(
            array(
                'name' => 'ContentPage',
                'class'=> "Kunstmaan\SandboxDemoBundle\Entity\Pages\ContentPage"
            ),
            array(
                'name' => 'FormPage',
                'class'=> "Kunstmaan\SandboxDemoBundle\Entity\Pages\FormPage"
            )
        );
    }

    /**
     * @return string[]
     */
    public function getPagePartAdminConfigurations()
    {
        return array("KunstmaanSandboxDemoBundle:main", "KunstmaanSandboxDemoBundle:slider", "KunstmaanSandboxDemoBundle:banners", "KunstmaanSandboxDemoBundle:footer");
    }

    /**
     * {@inheritdoc}
     */
    public function getPageTemplates()
    {
        return array("KunstmaanSandboxDemoBundle:homepage");
    }

    /**
     * @return string
     */
    public function getDefaultView()
    {
        return "KunstmaanSandboxDemoBundle:Pages\HomePage:view.html.twig";
    }
}
