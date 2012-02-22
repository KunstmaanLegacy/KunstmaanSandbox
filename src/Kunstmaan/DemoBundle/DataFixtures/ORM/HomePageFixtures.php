<?php
// src/Blogger/BlogBundle/DataFixtures/ORM/BlogFixtures.php

namespace Kunstmaan\DemoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\DemoBundle\Entity\HomePage;
use Doctrine\Common\Persistence\ObjectManager;
use Kunstmaan\AdminNodeBundle\Entity\Node;
use Kunstmaan\AdminBundle\Entity\Permission;
use Kunstmaan\AdminBundle\Modules\ClassLookup;

class HomePageFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $homepage = new HomePage();
        $homepage->setTitle('Home');
        $manager->persist($homepage);
        $manager->flush();
        $node = $manager->getRepository('KunstmaanAdminNodeBundle:Node')->createNodeFor($homepage, 'en', $this->getReference('adminuser'));
        $this->initPermissions($manager, $node);
        $this->addReference('homepage', $homepage);

        $homepage = new HomePage();
        $homepage->setTitle("Home");
        $manager->persist($homepage);
        $manager->flush();
        $nodeTranslation = $manager->getRepository('KunstmaanAdminNodeBundle:NodeTranslation')->createNodeTranslationFor($homepage, 'nl', $node, $this->getReference('adminuser'));

        $homepage = new HomePage();
        $homepage->setTitle("Home");
        $manager->persist($homepage);
        $manager->flush();
        $nodeTranslation = $manager->getRepository('KunstmaanAdminNodeBundle:NodeTranslation')->createNodeTranslationFor($homepage, 'fr', $node, $this->getReference('adminuser'));

    }

    private function initPermissions($manager, Node $node){
    	$kunstmaanGroup     = $this->getReference('kunstmaan-group');
    	$adminGroup         = $this->getReference('admin-group');
    	$guestGroup         = $this->getReference('guest-group');

    	//Page 1
    	//----------------------------------
    	$page1Permission1 = new Permission();
    	$page1Permission1->setRefId($node->getId());
    	$page1Permission1->setRefEntityname(ClassLookup::getClass($node));
    	$page1Permission1->setRefGroup($kunstmaanGroup);
    	$page1Permission1->setPermissions('|read:1|write:1|delete:1|');
    	$manager->persist($page1Permission1);
    	$manager->flush();

    	$page1Permission2 = new Permission();
    	$page1Permission2->setRefId($node->getId());
    	$page1Permission2->setRefEntityname(ClassLookup::getClass($node));
    	$page1Permission2->setRefGroup($adminGroup);
    	$page1Permission2->setPermissions('|read:1|write:1|delete:1|');
    	$manager->persist($page1Permission2);
    	$manager->flush();

    	$page1Permission3 = new Permission();
    	$page1Permission3->setRefId($node->getId());
    	$page1Permission3->setRefEntityname(ClassLookup::getClass($node));
    	$page1Permission3->setRefGroup($guestGroup);
    	$page1Permission3->setPermissions('|read:1|write:0|delete:0|');
    	$manager->persist($page1Permission3);
    	$manager->flush();
    }

    public function getOrder()
    {
        return 50;
    }

}