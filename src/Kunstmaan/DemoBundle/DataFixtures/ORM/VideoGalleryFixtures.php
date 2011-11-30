<?php
// src/Kunstmaan/DemoBundle/DataFixtures/ORM/VideoGalleryFixtures.php

namespace Kunstmaan\DemoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Kunstmaan\MediaBundle\Entity\VideoGallery;
use Kunstmaan\MediaBundle\Entity\Video;

class VideoGalleryFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $gal = new VideoGallery();
        $gal->setName('First Video Gallery');
        $manager->persist($gal);
        $manager->flush();

            $subgal = new VideoGallery();
            $subgal->setParent($gal);
            $subgal->setName('Sub of first Video Gallery');
            $manager->persist($subgal);
            $manager->flush();

                $subgal3 = new VideoGallery();
                $subgal3->setParent($subgal);
                $subgal3->setName('Sub of the first sub');
                $manager->persist($subgal3);
                $manager->flush();

            $subgal2 = new VideoGallery();
            $subgal2->setParent($gal);
            $subgal2->setName('Second sub of first Video Gallery');
            $manager->persist($subgal2);

        $manager->flush();

        $gal2 = new VideoGallery();
        $gal2->setName('Second Video Gallery');
        $manager->persist($gal2);
        $manager->flush();

        $Video = new Video();
        $Video->setName('Template Override');
        $Video->setContent('eumgRULsR3g');
        $Video->setType('youtube');
        $Video->setGallery($gal);
        $manager->persist($Video);
        $manager->flush();

        $Video = new Video();
        $Video->setName('The Denali Experiment ');
        $Video->setContent('32718192');
        $Video->setType('vimeo');
        $Video->setGallery($gal);
        $manager->persist($Video);
        $manager->flush();

        $Video = new Video();
        $Video->setName('The Nord - extended trailer');
        $Video->setContent('xmdian');
        $Video->setType('dailymotion');
        $Video->setGallery($gal);
        $manager->persist($Video);
        $manager->flush();

    }

    public function getOrder()
    {
        return 1;
    }

}