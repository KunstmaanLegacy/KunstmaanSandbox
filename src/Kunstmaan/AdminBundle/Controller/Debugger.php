<?php
/**
 * Created by JetBrains PhpStorm.
 * User: kris
 * Date: 14/11/11
 * Time: 14:44
 * To change this template use File | Settings | File Templates.
 */

namespace Kunstmaan\AdminBundle\Controller;

use Doctrine\ORM\Events;

class Debugger implements \Doctrine\Common\EventSubscriber
{
    public $preFooInvoked = false;

    public function preUpdate()
    {
        $this->preFooInvoked = true;
        error_log("jow");
    }

    public function getSubscribedEvents()
    {
        return array(Events::preUpdate);
    }
}
