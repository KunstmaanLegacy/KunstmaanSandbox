#!/bin/sh
sudo chmod -R 777 app/cache/
sudo chmod -R 777 app/logs/
rm -R app/cache/*
rm -R app/logs/*
php app/console assets:install web
php app/console assetic:dump
php app/console cache:clear --env=dev
php app/console cache:clear --env=prod
php app/console cache:warmup
sudo chmod -R 777 app/cache/
sudo chmod -R 777 app/logs/
