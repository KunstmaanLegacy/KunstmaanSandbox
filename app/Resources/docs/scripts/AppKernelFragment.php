        $bundles[] = new FOS\UtilitiesBundle\KunstmaanUtilitiesBundle();
        // KunstmaanAdminBundle
        $bundles[] = new FOS\UserBundle\FOSUserBundle();
        $bundles[] = new Knp\Bundle\MenuBundle\KnpMenuBundle();
        $bundles[] = new Doctrine\Bundle\FixturesBundle\DoctrineFixturesBundle();
        $bundles[] = new Kunstmaan\AdminBundle\KunstmaanAdminBundle();
        // KunstmaanMediaBundle
        $bundles[] = new Stof\DoctrineExtensionsBundle\StofDoctrineExtensionsBundle();
        $bundles[] = new Liip\ImagineBundle\LiipImagineBundle();
        $bundles[] = new Knp\Bundle\GaufretteBundle\KnpGaufretteBundle();
        $bundles[] = new Kunstmaan\MediaBundle\KunstmaanMediaBundle();
        // KunstmaanPagePartBundle
        $bundles[] = new Kunstmaan\PagePartBundle\KunstmaanPagePartBundle();
        // KunstmaanMediaPagePartBundle
        $bundles[] = new Kunstmaan\MediaPagePartBundle\KunstmaanMediaPagePartBundle();
        // KunstmaanFormBundle
        $bundles[] = new Kunstmaan\FormBundle\KunstmaanFormBundle();
        // KunstmaanAdminListBundle
        $bundles[] = new Kunstmaan\AdminListBundle\KunstmaanAdminListBundle();
        $bundles[] = new WhiteOctober\PagerfantaBundle\WhiteOctoberPagerfantaBundle();
        // KunstmaanNodeBundle
        $bundles[] = new Kunstmaan\NodeBundle\KunstmaanNodeBundle();
        // KunstmaanSearchBundle
        $bundles[] = new FOQ\ElasticaBundle\FOQElasticaBundle();
        $bundles[] = new Kunstmaan\SearchBundle\KunstmaanSearchBundle();
        // KunstmaanGeneratorBundle
        $bundles[] = new Kunstmaan\GeneratorBundle\KunstmaanGeneratorBundle();
        // LiipMonitorBundle
        $bundles[] = new Liip\MonitorBundle\LiipMonitorBundle();
        // LiipCacheControlBundle
        $bundles[] = new Liip\CacheControlBundle\LiipCacheControlBundle();

        if (in_array($this->getEnvironment(), array('prod'))){
            // KunstmaanSentryBundle
            $bundles[] = new Kunstmaan\SentryBundle\KunstmaanSentryBundle();
        }

        return $bundles;
