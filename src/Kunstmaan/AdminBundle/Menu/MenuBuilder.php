<?php
// src/Acme/DemoBundle/Menu/Builder.php
namespace Kunstmaan\AdminBundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\DependencyInjection\ContainerAware;

class MenuBuilder
{
    private $factory;
    private $rootItem;

    /**
     * @param FactoryInterface $factory
     */
    public function __construct(FactoryInterface $factory, $extra = array())
    {
        $this->factory = $factory;
        $this->rootItem = $this->populateMenu();

        foreach($extra as  $menuadaptor){
            $menuadaptor->adaptMenu($this->rootItem);
        }
    }

    public function mainMenu(\Symfony\Component\HttpFoundation\Request $request)
    {
        $this->rootItem->setCurrentUri($request->getRequestUri());
        return $this->rootItem;
    }

    public function populateMenu(){
        $rootItem = $this->factory->createItem('root');
        $rootItem->getRoot()->setAttribute('class', 'nav');

        $rootItem->addChild('Pages', array( 'route' => 'KunstmaanAdminBundle_pages' ));
        $rootItem->addChild('Modules', array( 'route' => 'KunstmaanAdminBundle_modules'));
        $rootItem->addChild('Settings', array( 'route' => 'KunstmaanAdminBundle_settings'));
        $rootItem->addChild('Tools', array('uri' => '#', 'attributes' => array('class' => 'dropdown'), 'linkAttributes' => array('class' => 'dropdown-toggle'), 'childrenAttributes' => array('class' => 'dropdown-menu')));

            $rootItem['Tools']->addChild('Clear Frontend Cache', array( 'uri' => '#'));
            $rootItem['Tools']->addChild('Clear Backend Cache', array( 'uri' => '#'));
            $rootItem['Tools']->addChild('', array('attributes' => array('class' => 'divider')));
            $rootItem['Tools']->addChild('Shutdown', array( 'uri' => '#'));

        return $rootItem;
    }
}