<?php
// src/Blogger/BlogBundle/DataFixtures/ORM/BlogFixtures.php

namespace Kunstmaan\DemoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\DemoBundle\Entity\ContentPage;

class ContentPageFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
    	$homepage = $this->getReference("homepage");
        $page1 = new ContentPage();
        $page1->setParent($homepage);
        $page1->setTitle('PageParts');
        $manager->persist($page1);
        $manager->flush();
        $node = $manager->getRepository('KunstmaanAdminNodeBundle:Node')->createNodeFor($page1, 'en', 'admin');
        
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
        $manager->getRepository('KunstmaanAdminNodeBundle:Node')->createNodeFor($page2, 'en', 'admin');

        $page3 = new ContentPage();
        $page3->setParent($page1);
        $page3->setTitle('Headers');
        $manager->persist($page3);
        $manager->flush();
        $manager->getRepository('KunstmaanAdminNodeBundle:Node')->createNodeFor($page3, 'en', 'admin');
        
        $this->addReference('contentpage', $page1);
        $this->addReference('textpage', $page2);
        $this->addReference('headerpage', $page3);
    }

    public function getOrder()
    {
        return 51;
    }

}