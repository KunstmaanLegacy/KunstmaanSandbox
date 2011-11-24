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

class PageAdminListConfigurator extends AbstractAdminListConfigurator{

    /**
     *
     * @return void
     */
    public function configureListFields($array)
    {
        $array[] = "title";
        $array[] = "created";
        $array[] = "updated";
        $array[] = "online";
        return $array;
    }

    public function getRepositoryName(){
        return 'KunstmaanKAdminNodeBundle:Node';
    }

    function adaptQueryBuilder($querybuilder){
        parent::adaptQueryBuilder($querybuilder);
        //not needed to change something here yet but already
    }
}
