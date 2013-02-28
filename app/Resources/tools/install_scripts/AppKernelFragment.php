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
        // KunstmaanBehatBundle
        $bundles[] = new Kunstmaan\BehatBundle\KunstmaanBehatBundle();
        // LiipCacheControlBundle
        $bundles[] = new Liip\CacheControlBundle\LiipCacheControlBundle();

        if (in_array($this->getEnvironment(), array('prod'))){
            // KunstmaanSentryBundle
            $bundles[] = new Kunstmaan\SentryBundle\KunstmaanSentryBundle();
        }

        return $bundles;
