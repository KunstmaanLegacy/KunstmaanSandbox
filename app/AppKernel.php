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
            new Kunstmaan\SandboxDemoBundle\KunstmaanSandboxDemoBundle(),
        );

        if (in_array($this->getEnvironment(), array('dev', 'test'))) {
            $bundles[] = new Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
            $bundles[] = new Sensio\Bundle\DistributionBundle\SensioDistributionBundle();
            $bundles[] = new Sensio\Bundle\GeneratorBundle\SensioGeneratorBundle();
        }

        // KunstmaanUtilitiesBundle
        $bundles[] = new Kunstmaan\UtilitiesBundle\KunstmaanUtilitiesBundle();

        // KunstmaanNodeBundle
        $bundles[] = new Kunstmaan\NodeBundle\KunstmaanNodeBundle();
        $bundles[] = new Kunstmaan\SeoBundle\KunstmaanSeoBundle();
        $bundles[] = new Symfony\Cmf\Bundle\RoutingExtraBundle\SymfonyCmfRoutingExtraBundle();
        // KunstmaanMediaBundle
        $bundles[] = new Stof\DoctrineExtensionsBundle\StofDoctrineExtensionsBundle();
        $bundles[] = new Liip\ImagineBundle\LiipImagineBundle();
        $bundles[] = new Knp\Bundle\GaufretteBundle\KnpGaufretteBundle();
        $bundles[] = new Kunstmaan\MediaBundle\KunstmaanMediaBundle();
        // KunstmaanAdminBundle
        $bundles[] = new FOS\UserBundle\FOSUserBundle();
        $bundles[] = new Knp\Bundle\MenuBundle\KnpMenuBundle();
        $bundles[] = new Doctrine\Bundle\FixturesBundle\DoctrineFixturesBundle();
        $bundles[] = new Kunstmaan\AdminBundle\KunstmaanAdminBundle();
        // KunstmaanPagePartBundle
        $bundles[] = new Kunstmaan\PagePartBundle\KunstmaanPagePartBundle();
        // KunstmaanMediaPagePartBundle
        $bundles[] = new Kunstmaan\MediaPagePartBundle\KunstmaanMediaPagePartBundle();
        // KunstmaanFormBundle
        $bundles[] = new Kunstmaan\FormBundle\KunstmaanFormBundle();
        // KunstmaanAdminListBundle
        $bundles[] = new Kunstmaan\AdminListBundle\KunstmaanAdminListBundle();
        $bundles[] = new WhiteOctober\PagerfantaBundle\WhiteOctoberPagerfantaBundle();
        // KunstmaanGeneratorBundle
        $bundles[] = new Kunstmaan\GeneratorBundle\KunstmaanGeneratorBundle();
        // KunstmaanNewRelicBundle
        $bundles[] = new Kunstmaan\NewRelicBundle\KunstmaanNewRelicBundle();
        // LiipCacheControlBundle
        $bundles[] = new Liip\CacheControlBundle\LiipCacheControlBundle();

        if (in_array($this->getEnvironment(), array('prod'))){
            // KunstmaanSentryBundle
            $bundles[] = new Kunstmaan\SentryBundle\KunstmaanSentryBundle();
        }

        return $bundles;

    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(__DIR__.'/config/config_'.$this->getEnvironment().'.yml');
    }
}
