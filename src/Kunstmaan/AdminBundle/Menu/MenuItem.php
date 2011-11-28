<?php
// src/Acme/DemoBundle/Menu/Builder.php
namespace Kunstmaan\AdminBundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\DependencyInjection\ContainerAware;

class MenuItem extends MenuPartInterface
{
    /**
     * @param FactoryInterface $factory
     */
    public function __construct($name, $attr=array())
    {
        $this->name = $name;
        $this->attr = $attr;
        $this->children = array();
    }

    public function getName(){
        return $this->name;
    }

    public function getAttributes(){
        return $this->attr;
    }

    public function menu(\Symfony\Component\HttpFoundation\Request $request, $menu)
    {
        $menu->addChild($this->getName(), $this->getAttributes());
        $children = $this->getChildren();
        foreach($children as  $child){
            //$menu[$this->getName()]->addChild($child->getName(), $child->getAttributes());
            $child->menu($request, $menu[$this->getName()]);
        }
    }
}