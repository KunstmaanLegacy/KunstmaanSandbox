<?php
// src/Blogger/BlogBundle/DataFixtures/ORM/BlogFixtures.php

namespace Kunstmaan\DemoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\DemoBundle\Entity\HomePage;

class HomePageFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $homepage = new HomePage();
        $homepage->setTitle('Home');
        $manager->persist($homepage);
        $manager->flush();
        $node = $manager->getRepository('KunstmaanAdminNodeBundle:Node')->createNodeFor($homepage, 'en', 'admin');
        
        $this->addReference('homepage', $homepage);
        
        $homepage = new HomePage();
        $homepage->setTitle("Home");
        $manager->persist($homepage);
        $manager->flush();
        $nodeTranslation = $manager->getRepository('KunstmaanAdminNodeBundle:NodeTranslation')->createNodeTranslationFor($homepage, 'nl', $node, 'admin');
        
        $homepage = new HomePage();
        $homepage->setTitle("Home");
        $manager->persist($homepage);
        $manager->flush();
        $nodeTranslation = $manager->getRepository('KunstmaanAdminNodeBundle:NodeTranslation')->createNodeTranslationFor($homepage, 'fr', $node, 'admin');
        
    }

    public function getOrder()
    {
        return 50;
    }

}