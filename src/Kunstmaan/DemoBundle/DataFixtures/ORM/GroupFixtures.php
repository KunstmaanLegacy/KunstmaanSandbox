<?php

namespace Kunstmaan\DemoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\AdminBundle\Entity\Group;
use Doctrine\Common\Persistence\ObjectManager;

class GroupFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $group1 = new Group("Kunstmaan");
        $group1->setName("Kunstmaan");
        $group1->addRole($this->getReference('permissionmanager-role'));
        $group1->addRole($this->getReference('superadmin-role'));
        $manager->persist($group1);
        $manager->flush();

        $this->addReference('kunstmaan-group',  $group1);
    }

    public function getOrder()
    {
        return 12;
    }

}