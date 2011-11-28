<?php
// src/Acme/DemoBundle/Menu/Builder.php
namespace Kunstmaan\AdminBundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\DependencyInjection\ContainerAware;

class MenuBuilder
{
    private $factory;
    protected $children = array();

    /**
     * @param FactoryInterface $factory
     */
    public function __construct(FactoryInterface $factory, $extra = array())
    {
        $this->factory = $factory;
        $this->addChild("pages", new MenuItem('Pages', array( 'route' => 'KunstmaanAdminBundle_pages' )));
        $this->addChild("modules", new MenuItem('Modules', array( 'route' => 'KunstmaanAdminBundle_modules')));
        $this->addChild("settings", new MenuItem('Settings', array( 'route' => 'KunstmaanAdminBundle_settings')));
        $this->addChild('tools', new MenuItem('Tools', array('uri' => '#', 'attributes' => array('class' => 'dropdown'), 'linkAttributes' => array('class' => 'dropdown-toggle'), 'childrenAttributes' => array('class' => 'dropdown-menu'))));

        $this->children['tools']->addChild('clearfc', new MenuItem('Clear Frontend Cache', array( 'uri' => '#')));
        $this->children['tools']->addChild('clearbc', new MenuItem('Clear Backend Cache', array( 'uri' => '#')));
        $this->children['tools']->addChild('divider', new MenuItem('', array('attributes' => array('class' => 'divider'))));
        $this->children['tools']->addChild('shutdown', new MenuItem('Shutdown', array( 'uri' => '#')));

        foreach($extra as  $menuitem){
            if($menuitem->getParent()!=null) $this->children[$menuitem->getParent()]->addChild($menuitem->getName(), $menuitem);
            else $this->addChild($menuitem->getName(), $menuitem);
        }
    }

    public function mainMenu(\Symfony\Component\HttpFoundation\Request $request)
    {
        $menu = $this->factory->createItem('root');
        $menu->setCurrentUri($request->getRequestUri());

        $menu->getRoot()->setAttribute('class', 'nav');

        foreach($this->getChildren() as  $menuitem){
            $menuitem->menu($request, $menu);
        }

        return $menu;
    }

    public function addChild($name, MenuPartInterface $child){
        $this->children[$name] = $child;
    }

    public function getChildren(){
        return $this->children;
    }
}