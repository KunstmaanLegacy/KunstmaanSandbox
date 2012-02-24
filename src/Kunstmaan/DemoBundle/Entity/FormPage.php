<?php

namespace Kunstmaan\DemoBundle\Entity;
use Symfony\Component\HttpFoundation\Request;

use Kunstmaan\FormBundle\Entity\FormAdaptorIFace;
use Kunstmaan\FormBundle\Entity\FormSubmission;

use Kunstmaan\DemoBundle\PagePartAdmin\FormPagePagePartAdminConfigurator;

use Kunstmaan\DemoBundle\PagePartAdmin\BannerPagePartAdminConfigurator;

use Kunstmaan\DemoBundle\PagePartAdmin\ContentPagePagePartAdminConfigurator;

use Kunstmaan\AdminNodeBundle\Entity\HasNode;

use Doctrine\ORM\EntityManager;

use Kunstmaan\AdminBundle\Entity\DeepCloneableIFace;

use Gedmo\Mapping\Annotation as Gedmo;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Annotations\Annotation;
use Doctrine\Common\Collections\ArrayCollection;
use Kunstmaan\DemoBundle\Form\ContentPageAdminType;
use Kunstmaan\AdminBundle\Entity\PageIFace;
use Kunstmaan\SearchBundle\Entity\Indexable;
use Kunstmaan\AdminBundle\Modules\ClassLookup;

/**
 * @ORM\Entity(repositoryClass="Kunstmaan\DemoBundle\Repository\ContentPageRepository")
 * @ORM\Table(name="demo_formpage")
 * @ORM\HasLifecycleCallbacks()
 */

class FormPage implements PageIFace, Indexable, DeepCloneableIFace {
	/**
	 * @ORM\Id
	 * @ORM\Column(type="bigint")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @ORM\Column(type="string")
	 */
	protected $title;

	/**
	 * @ORM\Column(type="text")
	 */
	protected $thanks;

	protected $parent;

	public function getParent() {
		return $this->parent;
	}

	public function setParent(HasNode $parent) {
		$this->parent = $parent;
	}

	protected $possiblePermissions = array('read', 'write', 'delete');

	public function __construct() {
	}

	/**
	 * Get id
	 *
	 * @return integer
	 */
	public function getId() {
		return $this->id;
	}

	/**
	 * Set id
	 *
	 * @param string $id
	 */
	public function setId($num) {
		$this->id = $num;
	}

	/**
	 * Set title
	 *
	 * @param string $title
	 */
	public function setTitle($title) {
		$this->title = $title;
	}

	/**
	 * Get title
	 *
	 * @return string
	 */
	public function getTitle() {
		return $this->title;
	}

	public function setThanks($thanks) {
		$this->thanks = $thanks;
	}

	public function getThanks() {
		return $this->thanks;
	}

	public function __toString() {
		return $this->getTitle();
	}

	public function getDefaultAdminType() {
		return new ContentPageAdminType();
	}

	public function isOnline() {
		return true;
	}

	public function getContentForIndexing($container, $entity) {
		$renderer = $container->get('templating');
		$em = $container->get('doctrine')->getEntityManager();

		$pageparts = $em->getRepository('KunstmaanPagePartBundle:PagePartRef')->getPageParts($this);

		$classname = ClassLookup::getClassName($this);

		$view = 'KunstmaanDemoBundle:Elastica:' . $classname . '.elastica.twig';

		$temp = $renderer->render($view, array('page' => $this, 'pageparts' => $pageparts));
		return strip_tags($temp);
	}

	public function setTranslatableLocale($locale) {
		$this->locale = $locale;
	}

	public function getPossiblePermissions() {
		return $this->possiblePermissions;
	}

	public function getPossibleChildPageTypes() {
		$array[] = array('name' => 'ContentPage', 'class' => "Kunstmaan\DemoBundle\Entity\ContentPage");
		$array[] = array('name' => 'FormPage', 'class' => "Kunstmaan\DemoBundle\Entity\FormPage");
		return $array;
	}

	public function deepClone(EntityManager $em) {
		$newpage = new ContentPage();
		$newpage->setTitle($this->getTitle());
		$em->persist($newpage);
		$em->flush();
		$em->getRepository('KunstmaanPagePartBundle:PagePartRef')->copyPageParts($em, $this, $newpage, "main");
		$em->getRepository('KunstmaanPagePartBundle:PagePartRef')->copyPageParts($em, $this, $newpage, "banners");
		return $newpage;
	}

	public function getPagePartAdminConfigurations() {
		return array(new FormPagePagePartAdminConfigurator(), new BannerPagePartAdminConfigurator());
	}

	public function service($container, Request $request, &$result){
		$formbuilder = $container->get('form.factory')->createBuilder('form');
		$em = $container->get('doctrine')->getEntityManager();
		$pageparts = $em->getRepository('KunstmaanPagePartBundle:PagePartRef')->getPageParts($this, "main");
		$fields = array();
		foreach($pageparts as $pagepart){
			if($pagepart instanceof FormAdaptorIFace){
				$pagepart->adaptForm($formbuilder, $fields);
			}
		}
		$form = $formbuilder->getForm();
		if ($request->getMethod() == 'POST') {
			$form->bindRequest($request);

			if ($form->isValid()) {
				$formsubmission = new FormSubmission();
				$formsubmission->setIpAddress($request->getClientIp());
				$formsubmission->setNode($em->getRepository('KunstmaanAdminNodeBundle:Node')->getNodeFor($this));
				$formsubmission->setLang($locale = $request->getSession()->getLocale());
				$em->persist($formsubmission);
				$em->flush();
				foreach($fields as &$field){
					$field->setSubmission($formsubmission);
					$em->persist($field);
				}
				$em->flush();
				$result["thanks"] = true;
				return;
			}
		}
		$result["frontendform"] = $form->createView();
	}

	public function getDefaultView() {
		return "KunstmaanDemoBundle:FormPage:view.html.twig";
	}
}
