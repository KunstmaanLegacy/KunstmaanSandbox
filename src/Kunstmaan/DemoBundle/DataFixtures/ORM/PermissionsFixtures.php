<?php

namespace Kunstmaan\DemoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\AdminBundle\Entity\Permission;
use Kunstmaan\AdminBundle\Modules\ClassLookup;

class PermissionsFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $page1 = $this->getReference('page1');
        $page2 = $this->getReference('page2');
        $page3 = $this->getReference('page3');
        $page4 = $this->getReference('page4');

        $kunstmaanGroup     = $this->getReference('kunstmaan-group');
        $adminGroup         = $this->getReference('admin-group');
        $guestGroup         = $this->getReference('guest-group');

        //Page 1
        //----------------------------------
        $page1Permission1 = new Permission();
        $page1Permission1->setRefId($page1->getId());
        $page1Permission1->setRefEntityname(ClassLookup::getClass($page1));
        $page1Permission1->setRefGroup($kunstmaanGroup->getId());
        $page1Permission1->setPermissions('|read:1|write:1|delete:1|');
        $manager->persist($page1Permission1);
        $manager->flush();

        $page1Permission2 = new Permission();
        $page1Permission2->setRefId($page1->getId());
        $page1Permission2->setRefEntityname(ClassLookup::getClass($page1));
        $page1Permission2->setRefGroup($adminGroup->getId());
        $page1Permission2->setPermissions('|read:1|write:1|delete:1|');
        $manager->persist($page1Permission2);
        $manager->flush();

        $page1Permission3 = new Permission();
        $page1Permission3->setRefId($page1->getId());
        $page1Permission3->setRefEntityname(ClassLookup::getClass($page1));
        $page1Permission3->setRefGroup($guestGroup->getId());
        $page1Permission3->setPermissions('|read:1|write:0|delete:0|');
        $manager->persist($page1Permission3);
        $manager->flush();
        //----------------------------------



        //Page 2
        //----------------------------------
        $page2Permission1 = new Permission();
        $page2Permission1->setRefId($page2->getId());
        $page2Permission1->setRefEntityname(ClassLookup::getClass($page2));
        $page2Permission1->setRefGroup($kunstmaanGroup->getId());
        $page2Permission1->setPermissions('|read:1|write:1|delete:1|');
        $manager->persist($page2Permission1);
        $manager->flush();

        $page2Permission2 = new Permission();
        $page2Permission2->setRefId($page2->getId());
        $page2Permission2->setRefEntityname(ClassLookup::getClass($page2));
        $page2Permission2->setRefGroup($adminGroup->getId());
        $page2Permission2->setPermissions('|read:1|write:1|delete:1|');
        $manager->persist($page2Permission2);
        $manager->flush();

        $page2Permission3 = new Permission();
        $page2Permission3->setRefId($page2->getId());
        $page2Permission3->setRefEntityname(ClassLookup::getClass($page2));
        $page2Permission3->setRefGroup($guestGroup->getId());
        $page2Permission3->setPermissions('|read:1|write:0|delete:0|');
        $manager->persist($page2Permission3);
        $manager->flush();
        //----------------------------------



        //Page 3
        //----------------------------------
        $page3Permission1 = new Permission();
        $page3Permission1->setRefId($page3->getId());
        $page3Permission1->setRefEntityname(ClassLookup::getClass($page3));
        $page3Permission1->setRefGroup($kunstmaanGroup->getId());
        $page3Permission1->setPermissions('|read:1|write:1|delete:1|');
        $manager->persist($page3Permission1);
        $manager->flush();

        $page3Permission2 = new Permission();
        $page3Permission2->setRefId($page3->getId());
        $page3Permission2->setRefEntityname(ClassLookup::getClass($page3));
        $page3Permission2->setRefGroup($adminGroup->getId());
        $page3Permission2->setPermissions('|read:1|write:1|delete:1|');
        $manager->persist($page3Permission2);
        $manager->flush();

        $page3Permission3 = new Permission();
        $page3Permission3->setRefId($page3->getId());
        $page3Permission3->setRefEntityname(ClassLookup::getClass($page3));
        $page3Permission3->setRefGroup($guestGroup->getId());
        $page3Permission3->setPermissions('|read:1|write:0|delete:0|');
        $manager->persist($page3Permission3);
        $manager->flush();
        //----------------------------------


        //Page 4
        //----------------------------------
        $page4Permission1 = new Permission();
        $page4Permission1->setRefId($page4->getId());
        $page4Permission1->setRefEntityname(ClassLookup::getClass($page4));
        $page4Permission1->setRefGroup($kunstmaanGroup->getId());
        $page4Permission1->setPermissions('|read:1|write:1|delete:1|');
        $manager->persist($page4Permission1);
        $manager->flush();

        $page4Permission2 = new Permission();
        $page4Permission2->setRefId($page4->getId());
        $page4Permission2->setRefEntityname(ClassLookup::getClass($page4));
        $page4Permission2->setRefGroup($adminGroup->getId());
        $page4Permission2->setPermissions('|read:1|write:1|delete:1|');
        $manager->persist($page4Permission2);
        $manager->flush();

        $page4Permission3 = new Permission();
        $page4Permission3->setRefId($page4->getId());
        $page4Permission3->setRefEntityname(ClassLookup::getClass($page4));
        $page4Permission3->setRefGroup($guestGroup->getId());
        $page4Permission3->setPermissions('|read:1|write:0|delete:0|');
        $manager->persist($page4Permission3);
        $manager->flush();
        //----------------------------------
    }

    public function getOrder()
    {
        return 300;
    }

}