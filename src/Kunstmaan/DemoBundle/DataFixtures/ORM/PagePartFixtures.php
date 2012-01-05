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
    		$headerpagepart = new \Kunstmaan\PagePartBundle\Entity\HeaderPagePart();
    		$headerpagepart->setNiv(1);
    		$headerpagepart->setTitle("Header 1");
    		$manager->persist($headerpagepart);
    		$page1 = $this->getReference('page1');
    		$manager->flush();
    		$manager->getRepository('KunstmaanPagePartBundle:PagePartRef')->addPagePart($page1, $headerpagepart, 1);
    	}
        {
            $textpagepart = new \Kunstmaan\PagePartBundle\Entity\TextPagePart();
            $textpagepart->setContent("<p>whoele whoele 1</p>");
            $manager->persist($textpagepart);
            $page1 = $this->getReference('page1');
            $manager->flush();
            $manager->getRepository('KunstmaanPagePartBundle:PagePartRef')->addPagePart($page1, $textpagepart, 2);
        }
        {
            $textpagepart = new \Kunstmaan\PagePartBundle\Entity\TextPagePart();
            $textpagepart->setContent("<p>whoele whoele 2</p>");
            $manager->persist($textpagepart);
            $page1 = $this->getReference('page1');
            $manager->flush();
            $manager->getRepository('KunstmaanPagePartBundle:PagePartRef')->addPagePart($page1, $textpagepart, 3);
        }
        {
            $textpagepart = new \Kunstmaan\PagePartBundle\Entity\TextPagePart();
            $textpagepart->setContent("<p>whoele whoele 3</p>");
            $manager->persist($textpagepart);
            $page1 = $this->getReference('page1');
            $manager->flush();
            $manager->getRepository('KunstmaanPagePartBundle:PagePartRef')->addPagePart($page1, $textpagepart, 4);
        }
        $manager->flush();

    }



    public function getOrder()
    {
        return 200;
    }

}