        $bundles[] = new JMS\SecurityExtraBundle\JMSSecurityExtraBundle();
        $bundles[] = new JMS\AopBundle\JMSAopBundle();
        $bundles[] = new Kunstmaan\UtilitiesBundle\KunstmaanUtilitiesBundle();
        // KunstmaanNodeBundle
        $bundles[] = new Kunstmaan\NodeBundle\KunstmaanNodeBundle();
        $bundles[] = new Kunstmaan\SeoBundle\KunstmaanSeoBundle();
        $bundles[] = new Symfony\Cmf\Bundle\RoutingBundle\CmfRoutingBundle();
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
        // KunstmaanSearchBundle
        $bundles[] = new Kunstmaan\SearchBundle\KunstmaanSearchBundle();
        // KunstmaanNodeSearchBundle
        $bundles[] = new Kunstmaan\NodeSearchBundle\KunstmaanNodeSearchBundle();
        // KunstmaanGeneratorBundle
        $bundles[] = new Kunstmaan\GeneratorBundle\KunstmaanGeneratorBundle();
        // KunstmaanNewRelicBundle
        $bundles[] = new Kunstmaan\NewRelicBundle\KunstmaanNewRelicBundle();
        // KunstmaanBehatBundle
        $bundles[] = new Kunstmaan\BehatBundle\KunstmaanBehatBundle();
        // KunstmaanSitemapBundle
        $bundles[] = new Kunstmaan\SitemapBundle\KunstmaanSitemapBundle();
        // KunstmaanArticleBundle
        $bundles[] = new Kunstmaan\ArticleBundle\KunstmaanArticleBundle();
        // LiipCacheControlBundle
        $bundles[] = new Liip\CacheControlBundle\LiipCacheControlBundle();
        // KunstmaanLanguageChooserBundle
        $bundles[] = new Kunstmaan\LanguageChooserBundle\KunstmaanLanguageChooserBundle();
        // LuneticsLocaleBundle
        $bundles[] = new Lunetics\LocaleBundle\LuneticsLocaleBundle();

        if (in_array($this->getEnvironment(), array('prod'))){
            // KunstmaanSentryBundle
            $bundles[] = new Kunstmaan\SentryBundle\KunstmaanSentryBundle();
        }

        if (in_array($this->getEnvironment(), array('dev'))){
            // KunstmaanLiveReloadBundle
            $bundles[] = new Kunstmaan\LiveReloadBundle\KunstmaanLiveReloadBundle();
        }

        return $bundles;
