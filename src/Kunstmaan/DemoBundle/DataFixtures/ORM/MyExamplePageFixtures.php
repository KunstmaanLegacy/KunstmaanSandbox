<?php
// src/Blogger/BlogBundle/DataFixtures/ORM/BlogFixtures.php

namespace Kunstmaan\DemoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\DemoBundle\Entity\MyExamplePage;

class MyPageFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $mypage = new MyExamplePage();
        $mypage->setTitle('My custom page');
        $mypage->setCustomfield('My custom page custom title');
        $manager->persist($mypage);

        $manager->flush();
    }

    public function getOrder()
    {
        return 2;
    }

}