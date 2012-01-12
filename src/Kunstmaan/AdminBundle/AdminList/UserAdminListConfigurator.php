<?php
/**
 * Created by JetBrains PhpStorm.
 * User: kris
 * Date: 15/11/11
 * Time: 22:23
 * To change this template use File | Settings | File Templates.
 */

namespace Kunstmaan\AdminBundle\AdminList;

use Kunstmaan\AdminListBundle\AdminList\AdminListFilter;

use Kunstmaan\AdminListBundle\AdminList\FilterDefinitions\DateFilterType;
use Kunstmaan\AdminListBundle\AdminList\FilterDefinitions\StringFilterType;
use Kunstmaan\AdminListBundle\AdminList\AbstractAdminListConfigurator;

class UserAdminListConfigurator extends AbstractAdminListConfigurator{

	public function buildFilters(AdminListFilter $builder){
        $builder->add('username', new StringFilterType("username"));
        $builder->add('email', new StringFilterType("email"));
    }
    
	public function buildFields()
    {
    	$this->addField("username", "Username", true);
    	$this->addField("email", "E-Mail", true);
    	$this->addField("lastlogin", "Last Login", false);
    	$this->addField("groups", "Groups", false); 	
    }

	public function canAdd() {
        return false;
    }

    public function getAddUrlFor() {
    	return "";
    }

    public function canEdit() {
    	return false;
    }
    
    public function getEditUrlFor($item) {
    	return array();
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
