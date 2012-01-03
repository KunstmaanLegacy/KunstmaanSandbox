<?php

namespace Kunstmaan\DemoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\AdminBundle\Entity\Group;

class GroupFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {

        $group1 = new Group("Kunstmaan");
        $group1->setName("Kunstmaan");
        $group1->setRoles(array("ROLE_SUPER_ADMIN", "ROLE_PERMISSIONMANAGAER"));
        $manager->persist($group1);
        $manager->flush();

        $group2 = new Group("Admin");
        $group2->setName("Admin");
        $group2->setRoles(array("ROLE_ADMIN", "ROLE_PERMISSIONMANAGAER"));
        $manager->persist($group2);
        $manager->flush();

        $group3 = new Group('Guest');
        $group3->setName("Guest");
        $group3->setRoles(array("ROLE_GUEST", "ROLE_PERMISSIONMANAGAER"));
        $manager->persist($group3);
        $manager->flush();


        $this->addReference('kunstmaan-group',  $group1);
        $this->addReference('admin-group',      $group2);
        $this->addReference('guest-group',      $group3);
    }

    public function getOrder()
    {
        return 1;
    }

}