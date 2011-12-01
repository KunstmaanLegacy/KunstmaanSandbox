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
        $page1->setTitle('2 weeks with Symfony2');
        $manager->persist($page1);

        $manager->flush();

        $page2 = new ExamplePage();
        $page2->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page2);

        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);

        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);
        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);
        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);
        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);
        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);
        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);
        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);
        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);
        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);
        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);
        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);
        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);
        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);
        $page3 = new ExamplePage();
        $page3->setTitle('2 weeks with Symfony2 sub 1');
        $manager->persist($page3);

        $manager->flush();

        $this->addReference('page1', $page1);
        $this->addReference('page2', $page2);
        $this->addReference('page3', $page3);
    }

    public function getOrder()
    {
        return 1;
    }

}