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

class UserAdminListConfigurator extends AbstractAdminListConfigurator{

    /**
     *
     * @return void
     */
    public function configureListFields($array)
    {
        $array[] = "username";
        $array[] = "email";
        $array[] = "lastLogin";
        $array[] = "groups";
        return $array;
    }

    public function getRepositoryName(){
        return 'KunstmaanKAdminBundle:User';
    }

    function adaptQueryBuilder($querybuilder){
        parent::adaptQueryBuilder($querybuilder);
        //not needed to change something here yet but already
    }
}
