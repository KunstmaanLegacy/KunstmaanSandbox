<?php
/**
 * Created by JetBrains PhpStorm.
 * User: kris
 * Date: 15/11/11
 * Time: 22:23
 * To change this template use File | Settings | File Templates.
 */

namespace Kunstmaan\AdminBundle\AdminList;

use Kunstmaan\AdminListBundle\AdminList\AbstractAdminListConfigurator;

class UserAdminListConfigurator extends AbstractAdminListConfigurator{

    public function configureListFields(&$array) {
        $array[] = "username";
        $array[] = "email";
        $array[] = "lastLogin";
        $array[] = "groups";
    }

    public function getSortFields() {
        $array = array();
        $array[] = "username";
        $array[] = "email";
        $array[] = "lastLogin";
        $array[] = "groups";
        return $array;
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

    public function getAdminType($item) {
        return null;
    }

    public function getRepositoryName() {
        return 'KunstmaanAdminBundle:User';
    }

    function adaptQueryBuilder($querybuilder) {
        parent::adaptQueryBuilder($querybuilder);
        //not needed to change something here yet but already
    }
}
