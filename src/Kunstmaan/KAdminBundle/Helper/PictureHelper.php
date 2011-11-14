<?php

namespace Kunstmaan\KAdminBundle\Helper;

/**
 * Comment controller.
 */
class PictureHelper{

    protected $picture;

    public function getPicture(){
        return $this->picture;
    }

    public function setPicture($picture){
            $this->picture = $picture;
        }

}

?>