<?php

namespace  Kunstmaan\KAdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class that defines a Media object from the AnoBundle in the database
 *
 * @author Kristof Van Cauwenbergh
 *
 * @ORM\Entity(repositoryClass="Kunstmaan\KAdminBundle\Repository\GalleryRepository")
 * @ORM\Table(name="gallery")
 * @ORM\InheritanceType("JOINED")
 * @ORM\DiscriminatorColumn(name="discr", type="string")
 * @ORM\DiscriminatorMap({ "gallery" = "Gallery" , "imagegallery" = "ImageGallery", "filegallery" = "FileGallery" })
 * @ORM\HasLifecycleCallbacks
 */
class Gallery{

    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="string")
     */
    protected $slug;

    /**
     * @ORM\ManyToOne(targetEntity="Gallery", inversedBy="children")
     * @ORM\JoinColumn(name="parent", referencedColumnName="id", nullable=true)
     */
    protected $parent;

    /**
     * @ORM\OneToMany(targetEntity="Gallery", mappedBy="parent")
     */
    protected $children;


    public function setId($id){
        $this->id = $id;
    }

    public function getId(){
        return $this->id;
    }

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

    public function __toString()
    {
        return $this->getName();
    }

}