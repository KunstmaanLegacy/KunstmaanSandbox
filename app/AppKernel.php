<?php

use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Config\Loader\LoaderInterface;

class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = array(
            new Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new Symfony\Bundle\SecurityBundle\SecurityBundle(),
            new Symfony\Bundle\TwigBundle\TwigBundle(),
            new Symfony\Bundle\MonologBundle\MonologBundle(),
            new Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle(),
            new Symfony\Bundle\AsseticBundle\AsseticBundle(),
            new Doctrine\Bundle\DoctrineBundle\DoctrineBundle(),
            new Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle(),
            new JMS\AopBundle\JMSAopBundle(),
            new JMS\DiExtraBundle\JMSDiExtraBundle($this),
            new JMS\SecurityExtraBundle\JMSSecurityExtraBundle(),
        );

        if (in_array($this->getEnvironment(), array('dev', 'test'))) {
            $bundles[] = new Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
            $bundles[] = new Sensio\Bundle\DistributionBundle\SensioDistributionBundle();
            $bundles[] = new Sensio\Bundle\GeneratorBundle\SensioGeneratorBundle();
        }

        // Kunstmaan Bundles
        $bundles[] = new Kunstmaan\SandboxDemoBundle\KunstmaanSandboxDemoBundle();
        $bundles[] = new Kunstmaan\UtilitiesBundle\KunstmaanUtilitiesBundle();
        $bundles[] = new Kunstmaan\NodeBundle\KunstmaanNodeBundle();
        $bundles[] = new Kunstmaan\SeoBundle\KunstmaanSeoBundle();
        $bundles[] = new Kunstmaan\MediaBundle\KunstmaanMediaBundle();
        $bundles[] = new Kunstmaan\AdminBundle\KunstmaanAdminBundle();
        $bundles[] = new Kunstmaan\PagePartBundle\KunstmaanPagePartBundle();
        $bundles[] = new Kunstmaan\MediaPagePartBundle\KunstmaanMediaPagePartBundle();
        $bundles[] = new Kunstmaan\FormBundle\KunstmaanFormBundle();
        $bundles[] = new Kunstmaan\AdminListBundle\KunstmaanAdminListBundle();
        $bundles[] = new Kunstmaan\GeneratorBundle\KunstmaanGeneratorBundle();
        $bundles[] = new Kunstmaan\NewRelicBundle\KunstmaanNewRelicBundle();

        // KunstmaanSentryBundle
        if (in_array($this->getEnvironment(), array('prod'))){
            $bundles[] = new Kunstmaan\SentryBundle\KunstmaanSentryBundle();
        }

        $bundles[] = new Symfony\Cmf\Bundle\RoutingBundle\CmfRoutingBundle();
        $bundles[] = new Stof\DoctrineExtensionsBundle\StofDoctrineExtensionsBundle();
        $bundles[] = new Liip\ImagineBundle\LiipImagineBundle();
        $bundles[] = new Knp\Bundle\GaufretteBundle\KnpGaufretteBundle();
        $bundles[] = new FOS\UserBundle\FOSUserBundle();
        $bundles[] = new Knp\Bundle\MenuBundle\KnpMenuBundle();
        $bundles[] = new Doctrine\Bundle\FixturesBundle\DoctrineFixturesBundle();
        $bundles[] = new WhiteOctober\PagerfantaBundle\WhiteOctoberPagerfantaBundle();
        $bundles[] = new Liip\CacheControlBundle\LiipCacheControlBundle();

        return $bundles;

    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(__DIR__.'/config/config_'.$this->getEnvironment().'.yml');
    }
}
