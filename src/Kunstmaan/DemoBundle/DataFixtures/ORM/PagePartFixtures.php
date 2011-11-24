<?php
// src/Blogger/BlogBundle/DataFixtures/ORM/BlogFixtures.php

namespace Kunstmaan\DemoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\DemoBundle\Entity\MyExamplePage;

class PagePartFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        {
            $textpagepart = new \Kunstmaan\PagePartBundle\Entity\TextPagePart();
            $textpagepart->setContent("whoele whoele 1");
            $manager->persist($textpagepart);
            $page1 = $this->getReference('page1');
            $manager->flush();
            $manager->getRepository('KunstmaanPagePartBundle:PagePartRef')->addPagePart($page1, $textpagepart, 1);
        }
        {
            $textpagepart = new \Kunstmaan\PagePartBundle\Entity\TextPagePart();
            $textpagepart->setContent("whoele whoele 2");
            $manager->persist($textpagepart);
            $page1 = $this->getReference('page1');
            $manager->flush();
            $manager->getRepository('KunstmaanPagePartBundle:PagePartRef')->addPagePart($page1, $textpagepart, 2);
        }
        {
            $textpagepart = new \Kunstmaan\PagePartBundle\Entity\TextPagePart();
            $textpagepart->setContent("whoele whoele 3");
            $manager->persist($textpagepart);
            $page1 = $this->getReference('page1');
            $manager->flush();
            $manager->getRepository('KunstmaanPagePartBundle:PagePartRef')->addPagePart($page1, $textpagepart, 3);
        }
        $manager->flush();

    }



    public function getOrder()
    {
        return 3;
    }

}