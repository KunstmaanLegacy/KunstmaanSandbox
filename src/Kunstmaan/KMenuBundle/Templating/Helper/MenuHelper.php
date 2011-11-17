<?php
/**
 * Created by JetBrains PhpStorm.
 * User: kris
 * Date: 10/11/11
 * Time: 15:36
 * To change this template use File | Settings | File Templates.
 */

namespace Kunstmaan\KAdminBundle\Templating\Helper;

use Symfony\Component\Templating\Helper\Helper as TemplatingHelper;

class MenuHelper extends TemplatingHelper
{
    private $helper;

    /**
     * @param \Knp\Menu\Twig\Helper $helper
     */
    public function __construct(Helper $helper)
    {
        $this->helper = $helper;
    }

    /**
     * Retrieves an item following a path in the tree.
     *
     * @param \Knp\Menu\ItemInterface|string $menu
     * @param array $path
     * @return \Knp\Menu\ItemInterface
     */
    public function get($menu, array $path = array())
    {
        return $this->helper->getByPath($menu, $path);
    }

    /**
     * Renders a menu with the specified renderer.
     *
     * @param \Knp\Menu\ItemInterface|string|array $menu
     * @param array $options
     * @param string $renderer
     * @return string
     */
    public function render($menu, array $options = array(), $renderer = null)
    {
        return $this->helper->render($menu, $options, $renderer);
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'kmenu';
    }
}