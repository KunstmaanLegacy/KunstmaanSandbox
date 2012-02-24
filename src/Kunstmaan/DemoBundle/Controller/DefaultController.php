<?php

namespace Kunstmaan\DemoBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{

    /**
     * @Route("/", name="KunstmaanDemoBundle_default")
     * @Template()
     */
    public function indexAction()
    {
        return $this->forward("KunstmaanViewBundle:Slug:slug", array("_locale"=>"en", "slug"=>"home"));
    }
}
