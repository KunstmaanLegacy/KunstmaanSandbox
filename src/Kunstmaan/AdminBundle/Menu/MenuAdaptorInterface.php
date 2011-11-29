<?php
// src/Acme/DemoBundle/Menu/Builder.php
namespace Kunstmaan\AdminBundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\DependencyInjection\ContainerAware;
use Knp\Menu\ItemInterface as KnpMenu;

interface MenuAdaptorInterface
{
    function adaptMenu(KnpMenu $menu);
}