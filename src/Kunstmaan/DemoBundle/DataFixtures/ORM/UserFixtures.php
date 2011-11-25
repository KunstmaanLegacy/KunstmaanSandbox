<?php
// src/Kunstmaan/DemoBundle/DataFixtures/ORM/UserFixtures.php

namespace Kunstmaan\DemoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\AdminBundle\Entity\User;

class UserFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $user1 = new User();
        $user1->setUsername("admin");
        $user1->setPlainPassword("admin");
        $user1->setRoles(array("ROLE_SUPER_ADMIN"));
        $user1->setEmail("test@example.be");
        $user1->setEnabled(true);
        $manager->persist($user1);
        $manager->flush();

        $user2 = new User();
        $user2->setUsername("kris");
        $user2->setPlainPassword("test");
        $user2->setRoles(array("ROLE_ADMIN"));
        $user2->setEmail("kris.pypen@kunstmaan.be");
        $user2->setEnabled(true);
        $manager->persist($user2);
        $manager->flush();

        $user3 = new User();
        $user3->setUsername("kristof");
        $user3->setPlainPassword("test");
        $user3->setRoles(array("ROLE_ADMIN"));
        $user3->setEmail("kristof.van.cauwenbergh@kunstmaan.be");
        $user3->setEnabled(true);
        $manager->persist($user3);
        $manager->flush();
    }

    public function getOrder()
    {
        return 1;
    }

}