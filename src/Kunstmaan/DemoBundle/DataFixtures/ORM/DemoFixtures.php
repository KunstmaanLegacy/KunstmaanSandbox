<?php
// src/Blogger/BlogBundle/DataFixtures/ORM/BlogFixtures.php

namespace Kunstmaan\DemoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\DemoBundle\Entity\HomePage;
use Kunstmaan\DemoBundle\Entity\ContentPage;
use Kunstmaan\ViewBundle\Entity\SearchPage;
use Kunstmaan\AdminNodeBundle\Entity\Node;
use Kunstmaan\AdminBundle\Entity\Permission;
use Kunstmaan\AdminBundle\Modules\ClassLookup;
use Doctrine\Common\Persistence\ObjectManager;

class DemoFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {
    	$homepage = new HomePage();
    	$homepage->setTitle('Home');
    	$manager->persist($homepage);
    	$manager->flush();
    	$node = $manager->getRepository('KunstmaanAdminNodeBundle:Node')->createNodeFor($homepage, 'en', 'admin');
    	$this->initPermissions($manager, $node);

    	$homepage = new HomePage();
    	$homepage->setTitle("Home");
    	$manager->persist($homepage);
    	$manager->flush();
    	$nodeTranslation = $manager->getRepository('KunstmaanAdminNodeBundle:NodeTranslation')->createNodeTranslationFor($homepage, 'nl', $node, 'admin');

    	$homepage = new HomePage();
    	$homepage->setTitle("Home");
    	$manager->persist($homepage);
    	$manager->flush();
    	$nodeTranslation = $manager->getRepository('KunstmaanAdminNodeBundle:NodeTranslation')->createNodeTranslationFor($homepage, 'fr', $node, 'admin');

    	$search = $this->createSearchPage($manager, "search", $homepage);
    	
        $page1 = new ContentPage();
        $page1->setParent($homepage);
        $page1->setTitle('PageParts');
        $manager->persist($page1);
        $manager->flush();
        $node = $manager->getRepository('KunstmaanAdminNodeBundle:Node')->createNodeFor($page1, 'en', 'admin');
        $this->initPermissions($manager, $node);

        $page1_nl = new ContentPage();
        $page1->setParent($homepage);
        $page1_nl->setTitle("Blokken");
        $manager->persist($page1_nl);
        $manager->flush();
        $nodeTranslation = $manager->getRepository('KunstmaanAdminNodeBundle:NodeTranslation')->createNodeTranslationFor($page1_nl, 'nl', $node, 'admin');

        $page1_fr = new ContentPage();
        $page1->setParent($homepage);
        $page1_fr->setTitle("Blocs");
        $manager->persist($page1_fr);
        $manager->flush();
        $nodeTranslation = $manager->getRepository('KunstmaanAdminNodeBundle:NodeTranslation')->createNodeTranslationFor($page1_fr, 'fr', $node, 'admin');

        $page2 = new ContentPage();
        $page2->setParent($page1);
        $page2->setTitle('Text');
        $manager->persist($page2);
        $manager->flush();
        $node = $manager->getRepository('KunstmaanAdminNodeBundle:Node')->createNodeFor($page2, 'en', 'admin');
        $this->initPermissions($manager, $node);

        $page3 = new ContentPage();
        $page3->setParent($page1);
        $page3->setTitle('Headers');
        $manager->persist($page3);
        $manager->flush();
        $node = $manager->getRepository('KunstmaanAdminNodeBundle:Node')->createNodeFor($page3, 'en', 'admin');
        $this->initPermissions($manager, $node);

        $this->addReference('homepage', $homepage);
        $this->addReference('contentpage', $page1);
        $this->addReference('textpage', $page2);
        $this->addReference('headerpage', $page3);
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

    private function createSearchPage($manager, $title, $parent) {
    	$page = new SearchPage();
    	$page->setParent($parent);
    	$page->setTitle($title);
    	$manager->persist($page);
    	$manager->flush();
    	$node = $manager->getRepository('KunstmaanAdminNodeBundle:Node')->createNodeFor($page, 'en', 'admin');
    	$this->initPermissions($manager, $node);
    	
    	$page = new SearchPage();
    	$page->setParent($parent);
    	$page->setTitle($title);
    	$manager->persist($page);
    	$manager->flush();
    	$nodeTranslation = $manager->getRepository('KunstmaanAdminNodeBundle:NodeTranslation')->createNodeTranslationFor($page, 'nl', $node, 'admin');
    	
    	
    	$page = new SearchPage();
    	$page->setParent($parent);
    	$page->setTitle($title);
    	$manager->persist($page);
    	$manager->flush();
    	$nodeTranslation = $manager->getRepository('KunstmaanAdminNodeBundle:NodeTranslation')->createNodeTranslationFor($page, 'nl', $node, 'admin');
    	return $page;
    }
    
    public function getOrder()
    {
        return 51;
    }

}