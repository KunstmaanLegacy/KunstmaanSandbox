<?php
/**
 * Created by JetBrains PhpStorm.
 * User: kris
 * Date: 15/11/11
 * Time: 23:02
 * To change this template use File | Settings | File Templates.
 */

namespace Kunstmaan\KAdminListBundle\AdminList;

class AdminListFactory {

    public function createList(AbstractAdminListConfigurator $configurator, $em){
        return new AdminList($configurator, $em);
    }
}
