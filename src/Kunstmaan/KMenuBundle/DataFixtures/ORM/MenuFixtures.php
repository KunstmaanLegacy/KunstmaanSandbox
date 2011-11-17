<?php
// src/Blogger/BlogBundle/DataFixtures/ORM/BlogFixtures.php

namespace Kunstmaan\KAdminBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\KMenuBundle\Entity\Menu;
use Kunstmaan\KMenuBundle\Entity\MenuItem;

class MenuFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        /*
        {
            $menuitem = new MenuItem();
            $menuitem->setTitle("Page 1");
            $menuitem->setSequencenumber(1);
            $menuitem->setSlug("page1");
            $manager->persist($menuitem);

            $menu = new Menu();
            $menu->setType('backend');
            $menu->setTitle('Backend 1');
            $menu->setRoot($menuitem);
            $manager->persist($menu);
        }
        {
            $menu = new Menu();
            $menu->setType('backend');
            $menu->setTitle('Backend 2');
            $manager->persist($menu);
        }
        {
            $menu = new Menu();
            $menu->setType('frontend');
            $menu->setTitle('Main');
            $manager->persist($menu);
        }
        {
            $menu = new Menu();
            $menu->setType('frontend');
            $menu->setTitle('Footer column 1');
            $manager->persist($menu);
        }

        {
            $menu = new Menu();
            $menu->setType('frontend');
            $menu->setTitle('Footer column 2');
            $manager->persist($menu);
        }

        {
            $menu = new Menu();
            $menu->setType('frontend');
            $menu->setTitle('Footer column 3');
            $manager->persist($menu);
        }

        {
            $menu = new Menu();
            $menu->setType('frontend');
            $menu->setTitle('Footer column 4');
            $manager->persist($menu);
        }

        $manager->flush();
        */
    }

    public function getOrder()
    {
        return 1;
    }

}