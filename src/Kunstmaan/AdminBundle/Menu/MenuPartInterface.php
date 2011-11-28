<?php
// src/Acme/DemoBundle/Menu/Builder.php
namespace Kunstmaan\AdminBundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\DependencyInjection\ContainerAware;

abstract class MenuPartInterface
{
    protected $name;
    protected $attr;

    protected $children;

    public function getName(){
        return $this->name;
    }

    public function getAttributes(){
        return $this->attr;
    }

    public function addChild($name, MenuPartInterface $child){
        $this->children[$name] = $child;
    }

    public function getChildren(){
        return $this->children;
    }

    public function getParent(){
        return null;
    }

    abstract function menu(\Symfony\Component\HttpFoundation\Request $request, $menu);
}