<?php

namespace Kunstmaan\SandboxDemoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     * @Template()
     */
    public function indexAction()
    {
        return $this->forward("KunstmaanNodeBundle:Slug:slug", array("_locale" => "en", "slug" => null, "redirected" => "true"));
    }
}
