<?php
/**
 * Created by JetBrains PhpStorm.
 * User: kris
 * Date: 15/11/11
 * Time: 22:23
 * To change this template use File | Settings | File Templates.
 */

namespace Kunstmaan\KAdminBundle\AdminList;

use Kunstmaan\KAdminListBundle\AdminList\AbstractAdminListConfigurator;

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
        return $array;
    }

    public function getRepositoryName(){
        return 'KunstmaanKAdminBundle:Node';
    }

    function adaptQueryBuilder($querybuilder){
        parent::adaptQueryBuilder($querybuilder);
        //not needed to change something here yet but already
    }
}
