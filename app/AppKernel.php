<?php

use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Config\Loader\LoaderInterface;
use Gaufrette\Filesystem;

class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = array(
            new FOS\UserBundle\FOSUserBundle(),
            new Avalanche\Bundle\ImagineBundle\AvalancheImagineBundle(),
            new Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new Symfony\Bundle\SecurityBundle\SecurityBundle(),
            new Symfony\Bundle\TwigBundle\TwigBundle(),
            new Symfony\Bundle\MonologBundle\MonologBundle(),
            new Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle(),
            new Symfony\Bundle\DoctrineBundle\DoctrineBundle(),
            new Symfony\Bundle\AsseticBundle\AsseticBundle(),
            new Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle(),
            new JMS\SecurityExtraBundle\JMSSecurityExtraBundle(),
            new Airbrake\AirbrakeBundle\AirbrakeBundle(),
            new Symfony\Bundle\DoctrineFixturesBundle\DoctrineFixturesBundle(),
            new Knp\Bundle\MenuBundle\KnpMenuBundle(),
            new Kunstmaan\AdminBundle\KunstmaanAdminBundle(),
            new Kunstmaan\AdminListBundle\KunstmaanAdminListBundle(),
            new Kunstmaan\MediaBundle\KunstmaanMediaBundle(),
            new Kunstmaan\DemoBundle\KunstmaanDemoBundle(),
	        new Kunstmaan\PagePartBundle\KunstmaanPagePartBundle(),
            new Kunstmaan\AdminNodeBundle\KunstmaanAdminNodeBundle(),
        );

        if (in_array($this->getEnvironment(), array('dev', 'test'))) {
            $bundles[] = new Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
            $bundles[] = new Elao\WebProfilerExtraBundle\WebProfilerExtraBundle();
            $bundles[] = new Sensio\Bundle\DistributionBundle\SensioDistributionBundle();
            $bundles[] = new Sensio\Bundle\GeneratorBundle\SensioGeneratorBundle();
        }

        return $bundles;
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(__DIR__.'/config/config_'.$this->getEnvironment().'.yml');
    }
}
