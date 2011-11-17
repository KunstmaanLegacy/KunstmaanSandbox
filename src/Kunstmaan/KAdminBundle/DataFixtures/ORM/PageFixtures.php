<?php
// src/Blogger/BlogBundle/DataFixtures/ORM/BlogFixtures.php

namespace Kunstmaan\KAdminBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\KAdminBundle\Entity\Page;

class PageFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $page = new Page();
        $page->setTitle('2 weeks with Symfony2');
        //$page->setSlug('2weekswithsymfony2');
        //$page->setSequenceNumber(1);
        $manager->persist($page);

        $manager->flush();

        $subpage = new Page();
        $subpage->setTitle('2 weeks with Symfony2 sub 1');
        //$subpage->setSlug('2weekswithsymfony2sub1');
        //$subpage->setParent($page);
        //$subpage->setSequenceNumber(1);
        $manager->persist($subpage);

        $subpage = new Page();
        $subpage->setTitle('2 weeks with Symfony2 sub 1');
        //$subpage->setSlug('2weekswithsymfony2sub1');
        //$subpage->setParent($page);
        //$subpage->setSequenceNumber(2);
        $manager->persist($subpage);

        $manager->flush();

        $this->addReference('topnode', $page);
    }

    public function getOrder()
    {
        return 1;
    }

}