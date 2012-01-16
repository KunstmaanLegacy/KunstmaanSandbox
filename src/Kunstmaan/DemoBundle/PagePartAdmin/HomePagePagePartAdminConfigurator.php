<?php

namespace Kunstmaan\DemoBundle\PagePartAdmin;

use Kunstmaan\PagePartBundle\PagePartAdmin\AbstractPagePartAdminConfigurator;

class HomePagePagePartAdminConfigurator extends AbstractPagePartAdminConfigurator {

    protected $pagePartTypes = array();

    public function __construct($pagepartProviders = array()) {
        $this->pagePartTypes = array(
            array('name' => 'Header',   'class'=>'Kunstmaan\PagePartBundle\Entity\HeaderPagePart'),
            array('name' => 'Text',     'class'=>'Kunstmaan\PagePartBundle\Entity\TextPagePart'),
            array('name' => 'Line',     'class'=>'Kunstmaan\PagePartBundle\Entity\LinePagePart'),
            array('name' => 'TOC',      'class'=>'Kunstmaan\PagePartBundle\Entity\TocPagePart'),
        );
    }

    function getPossiblePagePartTypes(){
        return $this->pagePartTypes;
    }
    
    function getName(){
    	return "Pageparts";
    }
    
    function getDefaultContext(){
    	return "main";
    }
}
