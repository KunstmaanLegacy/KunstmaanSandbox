<?php

namespace Kunstmaan\SearchBundle\Transformers;

use Elastica_Document;
use FOQ\ElasticaBundle\Transformer\ModelToElasticaAutoTransformer;
use Symfony\Component\DependencyInjection\ContainerInterface;


class NodeTransformer extends ModelToElasticaAutoTransformer
{
    // Contains the Symfony2 DependencyInjection container
    protected $container;


    public function __construct(array $options = array())
    {
        $this->container = $options['container'];

        parent::__construct($options);
    }


    public function transform($object, array $fields)
    {
        $identifierGetter = 'get'.ucfirst($this->options['identifier']);
        $identifier = $object->$identifierGetter();

        $em = $this->container->get('doctrine')->getEntityManager();

        $node = $em->getRepository('KunstmaanAdminNodeBundle:Node')->getNodeForSlug($object->getParent(), $object->getSlug());
        $page = $node->getRef($em);

        $pageparts = $em->getRepository('KunstmaanPagePartBundle:PagePartRef')->getPageParts($em, $page);

        $output = array();
        $output['id'] = $identifier;
        $output['title'] = $object->getTitle();
        $output['search_content'] = '';

        if(count($pageparts)) {
            foreach($pageparts as $pagepart) {
                $output['search_content'] .= $this->container->get('templating')->render($pagepart->getDefaultView(), array('resource' => $pagepart));
            }
        }

        return new Elastica_Document($identifier, array_filter($output));
    }
}