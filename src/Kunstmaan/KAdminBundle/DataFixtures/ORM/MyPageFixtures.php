<?php
// src/Blogger/BlogBundle/DataFixtures/ORM/BlogFixtures.php

namespace Kunstmaan\KAdminBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\KAdminBundle\Entity\MyPage;

class MyPageFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $mypage = new MyPage();
        $mypage->setTitle('My custom page');
        $mypage->setCustomfield('My custom page custom title');
        //$mypage->setSlug('mycustompage');
        //$mypage->setSequenceNumber(1);
        //$mypage->setParent($this->getReference('topnode'));
        $manager->persist($mypage);

        $manager->flush();
    }

    public function getOrder()
    {
        return 2;
    }

}