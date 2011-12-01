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
    }

    public function getSortFields() {
        $array = array();
        $array[] = "title";
        $array[] = "updated";
        $array[] = "online";
        return $array;
    }

    public function configureListFields(&$array)
    {
        $array[] = "title";
        $array[] = "created";
        $array[] = "updated";
        $array[] = "online";
    }

    public function canEdit($item) {
        return true;
    }

    public function getEditUrlFor($item) {
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
