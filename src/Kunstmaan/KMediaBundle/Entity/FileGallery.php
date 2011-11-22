<?php

namespace  Kunstmaan\KMediaBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class that defines a Media object from the AnoBundle in the database
 *
 * @author Kristof Van Cauwenbergh
 *
 * @ORM\Entity(repositoryClass="Kunstmaan\KMediaBundle\Repository\FileGalleryRepository")
 * @ORM\Table(name="file_gallery")
 * @ORM\HasLifecycleCallbacks
 */
class FileGallery extends Gallery{

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
     * @ORM\ManyToOne(targetEntity="FileGallery", inversedBy="children")
     * @ORM\JoinColumn(name="parent", referencedColumnName="id", nullable=true)
     */
    protected $parent;

    /**
     * @ORM\OneToMany(targetEntity="FileGallery", mappedBy="parent")
     */
    protected $children;

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
     * @ORM\OneToMany(targetEntity="File", mappedBy="filegallery")
     */
    protected $files;

    public function addFile(File $child)
    {
        $this->files[] = $child;
        $child->setFileGallery($this);
    }


    public function getFiles()
    {
        return $this->files;
    }

    public function setFiles($children)
    {
        $this->files = $children;
    }

    /**
     * Add images
     *
     * @param Kunstmaan\KMediaBundle\Entity\File $images
     */
    public function addFiles(File $images)
    {
        $this->files[] = $images;
    }

    /**
     * Add children
     *
     * @param \Kunstmaan\KMediaBundle\Entity\ImageGallery $children
     */
    public function addChild(FileGallery $child)
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
     * @param Kunstmaan\KMediaBundle\Entity\ImageGallery $children
     */
    public function addFileGallery(FileGallery $children)
    {
        $this->children[] = $children;
    }

    public function __toString()
    {
        return $this->getName();
    }
}