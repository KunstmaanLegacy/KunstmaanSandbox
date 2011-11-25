<?php
/**
 * Created by JetBrains PhpStorm.
 * User: kris
 * Date: 18/11/11
 * Time: 13:44
 * To change this template use File | Settings | File Templates.
 */

namespace Kunstmaan\DemoBundle\PagePartAdmin;

use Kunstmaan\PagePartBundle\PagePartAdmin\AbstractPagePartAdminConfigurator;

use Kunstmaan\PagePartBundle\Entity\TextPagePart;

class PagePartAdminConfigurator extends AbstractPagePartAdminConfigurator
{
    function getPossiblePagePartTypes($array){
        $array[] = array('name' => 'Header', 'class'=>'Kunstmaan\PagePartBundle\Entity\HeaderPagePart');
        $array[] = array('name' => 'Text', 'class'=>'Kunstmaan\PagePartBundle\Entity\TextPagePart');
        return $array;
    }
}
