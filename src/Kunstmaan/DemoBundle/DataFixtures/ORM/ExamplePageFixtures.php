<?php
// src/Blogger/BlogBundle/DataFixtures/ORM/BlogFixtures.php

namespace Kunstmaan\DemoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\DemoBundle\Entity\ExamplePage;

class ExamplePageFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $page1 = new ExamplePage();
        $page1->setTitle('PageParts');
        $page1->setTranslatableLocale('en');
        $manager->persist($page1);
        $manager->flush();
        
        $page1->setTranslatableLocale('nl');
        $manager->refresh($page1);
        $page1->setTitle("Blokken");
        $manager->persist($page1);
        $manager->flush();
        
        $page1->setTranslatableLocale('fr');
        $manager->refresh($page1);
        $page1->setTitle("Blocs");
        $manager->persist($page1);
        $manager->flush();
        $manager->getRepository('KunstmaanAdminNodeBundle:Node')->createNodeFor($page1);
        
        $page2 = new ExamplePage();
        $page2->setParent($page1);
        $page2->setTitle('Text');
        $manager->persist($page2);
        $manager->flush();
        $manager->getRepository('KunstmaanAdminNodeBundle:Node')->createNodeFor($page2);

        $page3 = new ExamplePage();
        $page3->setParent($page1);
        $page3->setTitle('Headers');
        $manager->persist($page3);
        $manager->flush();
        $manager->getRepository('KunstmaanAdminNodeBundle:Node')->createNodeFor($page3);
        
        $this->addReference('page1', $page1);
        $this->addReference('page2', $page2);
        $this->addReference('page3', $page3);
    }

    public function getOrder()
    {
        return 100;
    }

}