<?php
/**
 * Created by JetBrains PhpStorm.
 * User: kris
 * Date: 15/11/11
 * Time: 22:23
 * To change this template use File | Settings | File Templates.
 */

namespace Kunstmaan\DemoBundle\AdminList;

use Kunstmaan\AdminListBundle\AdminList\AbstractAdminListConfigurator;
use Kunstmaan\AdminListBundle\AdminList\AdminListFilter;
use Kunstmaan\AdminListBundle\AdminList\FilterDefinitions\StringFilterType;
use Kunstmaan\AdminListBundle\AdminList\FilterDefinitions\DateFilterType;
use Kunstmaan\AdminListBundle\AdminList\FilterDefinitions\BooleanFilterType;

class PageAdminListConfigurator extends AbstractAdminListConfigurator{

    public function buildFilters(AdminListFilter $builder){
        $builder->add('title', new StringFilterType("title"));
        $builder->add('online', new BooleanFilterType("online"));
        $builder->add('created', new DateFilterType("created"));
        $builder->add('updated', new DateFilterType("updated"));
    }

    public function buildFields()
    {
    	$this->addField("title", "Title", true);
    	$this->addField("created", "Created At", true);
    	$this->addField("updated", "Updated At", true);
    	$this->addField("online", "Online", true);
    }

    public function canEdit() {
        return false;
    }

    public function getEditUrlFor($item) {
        return "";
    }
    
    public function canAdd() {
    	return false;
    }
    
    public function getAddUrlFor() {
    	return "";
    }

    public function canDelete($item) {
        return true;
    }

    public function getRepositoryName(){
        return 'KunstmaanAdminNodeBundle:Node';
    }

    function adaptQueryBuilder($querybuilder){
        parent::adaptQueryBuilder($querybuilder);
    }
}
