<?php

namespace Kunstmaan\AdminBundle\Controller;

use Symfony\Component\Routing\Annotation\Route;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller
{
    
    public function indexAction()
    {
        return $this->render('KunstmaanAdminBundle:Default:index.html.twig');
    }
	
    /**
     * @param string $locale
     * @return array
     */
    public function setLocaleAction($locale) {
    	/** @var \Symfony\Component\HttpFoundation\Session $session  */
    	$session = $this->get('session');
    	$session->setLocale($locale);
    	$last_route = $session->get('last_route', array('name' => 'index'));
    	$last_route['params']['_locale'] = $locale;
    	return ($this->redirect($this->generateUrl($last_route['name'], $last_route['params'])));
    }
    
}
