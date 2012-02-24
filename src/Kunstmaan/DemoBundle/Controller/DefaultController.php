<?php

namespace Kunstmaan\DemoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller
{

    public function indexAction($name)
    {
        return $this->forward("KunstmaanViewBundle:Slug:slug", array("_locale"=>"en", "slug"=>"home"));
    }
}
