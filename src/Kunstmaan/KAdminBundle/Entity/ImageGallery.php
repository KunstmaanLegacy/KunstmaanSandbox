<?php

namespace  Kunstmaan\KAdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class that defines a Media object from the AnoBundle in the database
 *
 * @author Kristof Van Cauwenbergh
 *
 * @ORM\Entity(repositoryClass="Kunstmaan\KAdminBundle\Repository\ImageGalleryRepository")
 * @ORM\Table(name="image_gallery")
 * @ORM\HasLifecycleCallbacks
 */
class ImageGallery extends Gallery{

    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;


    public function setId($id){
        $this->id = $id;
    }

    public function getId(){
        return $this->id;
    }

    /**
     * @ORM\Column(type="string")
     */
    protected $slug;

    public function slugify($text)
    {
            // replace non letter or digits by -
            $text = preg_replace('#[^\\pL\d]+#u', '-', $text);

            // trim
            $text = trim($text, '-');

            // transliterate
            if (function_exists('iconv'))
            {
                $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
            }

            // lowercase
            $text = strtolower($text);

            // remove unwanted characters
            $text = preg_replace('#[^-\w]+#', '', $text);

            if (empty($text))
            {
                return 'n-a';
            }

            return $text;
    }

    /**
       * Set slug
       *
       * @param string $slug
       */
      public function setSlug($slug)
      {
          $this->slug = $slug;
      }

      /**
       * Get slug
       *
       * @return string
       */
      public function getSlug()
      {
          return $this->slug;
      }


    public function __construct()
    {
        $this->children = new \Doctrine\Common\Collections\ArrayCollection();
        $this->images = new \Doctrine\Common\Collections\ArrayCollection();
        $this->setCreated(new \DateTime());
        $this->setUpdated(new \DateTime());
    }

    /**
         * @ORM\Column(type="datetime")
         */
        protected $created;

        /**
         * @ORM\Column(type="datetime")
         */
        protected $updated;

    /**
     * Set created
     *
     * @param datetime $created
     */
    public function setCreated($created)
    {
        $this->created = $created;
    }

    /**
     * Get created
     *
     * @return datetime
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * Set updated
     *
     * @param datetime $updated
     */
    public function setUpdated($updated)
    {
        $this->updated = $updated;
    }

    /**
     * Get updated
     *
     * @return datetime
     */
    public function getUpdated()
    {
        return $this->updated;
    }

    /**
     * @ORM\Column(type="string")
     */
    protected $name;

    public function setName($name){
        $this->name = $name;
        $this->setSlug($this->name);
    }

    public function getName(){
        return $this->name;
    }

    /**
     * @ORM\OneToMany(targetEntity="Image", mappedBy="imagegallery")
     */
    protected $images;

    public function addImage(Image $child)
    {
        $this->images[] = $child;
        $child->setImageGallery($this);
    }


    public function getImages()
    {
        return $this->images;
    }

    public function setImages($children)
    {
        $this->images = $children;
    }

    /**
     * Add images
     *
     * @param Kunstmaan\KAdminBundle\Entity\Picture $images
     */
    public function addPicture(\Kunstmaan\KAdminBundle\Entity\Image $images)
    {
        $this->images[] = $images;
    }

    /**
     * Add children
     *
     * @param \Kunstmaan\KAdminBundle\Entity\ImageGallery $children
     */
    public function addChild(ImageGallery $child)
    {
        $this->children[] = $child;

        $child->setParent($this);
    }


    public function getChildren()
    {
        return $this->children;
    }

    public function setChildren($children)
    {
        $this->children = $children;
    }

    public function disableChildrenLazyLoading()
    {
        if (is_object($this->children)) {
            $this->children->setInitialized(true);
        }
    }

    /**
     * Set parent
     *
     * @param integer $parent
     */
    public function setParent($parent)
    {
        $this->parent = $parent;
    }

    /**
     * Get parent
     *
     * @return integer
     */
    public function getParent()
    {
        return $this->parent;
    }

    public function getParents()
    {
        $parent = $this->getParent();
        $parents=array();
        while($parent!=null){
            $parents[] = $parent;
            $parent = $parent->getParent();
        }
        return array_reverse($parents);
    }

    /**
     * Add children
     *
     * @param Kunstmaan\KAdminBundle\Entity\ImageGallery $children
     */
    public function addImageGallery(\Kunstmaan\KAdminBundle\Entity\ImageGallery $children)
    {
        $this->children[] = $children;
    }

    public function __toString()
    {
        return $this->getName();
    }

}