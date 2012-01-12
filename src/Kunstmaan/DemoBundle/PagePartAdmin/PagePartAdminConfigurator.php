<?php

namespace Kunstmaan\DemoBundle\PagePartAdmin;

use Kunstmaan\PagePartBundle\PagePartAdmin\AbstractPagePartAdminConfigurator;

class PagePartAdminConfigurator extends AbstractPagePartAdminConfigurator {

    protected $pagePartTypes = array();

    public function __construct($pagepartProviders = array()) {
        if(count($pagepartProviders)) {
            foreach($pagepartProviders as $pagepartProvider) {
                $this->pagePartTypes = array_merge($this->pagePartTypes, $pagepartProvider->getPageParts());
            }
        }
    }

    function getPossiblePagePartTypes(){
        return $this->pagePartTypes;
    }
}
