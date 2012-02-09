<?php
// src/Blogger/BlogBundle/DataFixtures/ORM/BlogFixtures.php

namespace Kunstmaan\DemoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\DemoBundle\Entity\MyExamplePage;
use Doctrine\Common\Persistence\ObjectManager;

class PagePartFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {
    	{ // Text page
	    	{
	    		$headerpagepart = new \Kunstmaan\PagePartBundle\Entity\HeaderPagePart();
	    		$headerpagepart->setNiv(1);
	    		$headerpagepart->setTitle("Text");
	    		$manager->persist($headerpagepart);
	    		$page1 = $this->getReference('textpage');
	    		$manager->flush();
	    		$manager->getRepository('KunstmaanPagePartBundle:PagePartRef')->addPagePart($page1, $headerpagepart, 1);
	    	}
	    	{
	    		$textpagepart = new \Kunstmaan\PagePartBundle\Entity\TextPagePart();
	    		$textpagepart->setContent("<strong>Lorem ipsum dolor sit amet</strong>, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci <a href=\"#\">textlink</a> tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim.</p>");
	    		$manager->persist($textpagepart);
	    		$page1 = $this->getReference('textpage');
	    		$manager->flush();
	    		$manager->getRepository('KunstmaanPagePartBundle:PagePartRef')->addPagePart($page1, $textpagepart, 2);
	    	}
    	}
    	{ // Header page
    		for ($i = 1; $i <= 6; $i++) {
    			$headerpagepart = new \Kunstmaan\PagePartBundle\Entity\HeaderPagePart();
    			$headerpagepart->setNiv($i);
    			$headerpagepart->setTitle("Header ".$i);
    			$manager->persist($headerpagepart);
    			$page1 = $this->getReference('headerpage');
    			$manager->flush();
    			$manager->getRepository('KunstmaanPagePartBundle:PagePartRef')->addPagePart($page1, $headerpagepart, $i);
    		}
    	}

        $manager->flush();
    }

    public function getOrder()
    {
        return 200;
    }

}