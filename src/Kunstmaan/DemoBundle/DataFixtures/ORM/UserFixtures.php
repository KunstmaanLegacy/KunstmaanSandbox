<?php
// src/Kunstmaan/DemoBundle/DataFixtures/ORM/UserFixtures.php

namespace Kunstmaan\DemoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\AdminBundle\Entity\User;
use Doctrine\Common\Persistence\ObjectManager;

class UserFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {       
        $user1 = new User();
        $user1->setUsername("kris");
        $user1->setPlainPassword("test");
        $user1->setRoles(array("ROLE_ADMIN"));
        $user1->setEmail("kris.pypen@kunstmaan.be");
        $user1->setEnabled(true);
        $user1->addGroup($manager->merge($this->getReference('kunstmaan-group')));

        $manager->persist($user1);
        $manager->flush();


        $user2 = new User();
        $user2->setUsername("kristof");
        $user2->setPlainPassword("test");
        $user2->setRoles(array("ROLE_ADMIN"));
        $user2->setEmail("kristof.van.cauwenbergh@kunstmaan.be");
        $user2->setEnabled(true);
        $user2->addGroup($manager->merge($this->getReference('kunstmaan-group')));

        $manager->persist($user2);
        $manager->flush();


        $user3 = new User();
        $user3->setUsername("kim");
        $user3->setPlainPassword("test");
        $user3->setRoles(array("ROLE_ADMIN"));
        $user3->setEmail("kim.ausloos@kunstmaan.be");
        $user3->setEnabled(true);
        
        $guestgroup = $manager->getRepository('KunstmaanAdminBundle:Group')->findOneBy(array('name' => 'Guests'));
        $user3->addGroup($guestgroup);

        $manager->persist($user3);
        $manager->flush();
    }

    public function getOrder()
    {
        return 13;
    }

}