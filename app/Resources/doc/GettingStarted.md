# Getting Started Guide

In this getting started guide we will guide you throug setting up a project like the [Kunstmaan Sandbox project](https://github.com/Kunstmaan/KunstmaanSandbox) but for your own website. We will use Vagrant to ensure an optimal development and test environment. This guide should be the same for OSX and Linux hosts.

## Choosing a project name

First off, just to make scripting the rest a little bit more easy, we will put the new project name in an environment variable.

```bash
export PROJECTNAME="YOUR PROJECT NAME HERE, NO SPACES OR SPECIAL CHARACTERS"
export NAMESPACE="YOUR COMPANY NAME HERE, NO SPACES OR SPECIAL CHARACTERS, STARTING WITH A CAPITAL LETTER"
export BUNDLENAME="THE NAME OF YOUR WEBSITE BUNDLE, ENDING WITH Bundle"
export TABLEPREFIX="THE TABLE PREFIX YOU WANT FOR YOUR TABLES ENDING WITH AN UNDERSCORE"
```

## Basic project structure using Composer

Next up, basic project structure using [Composer](http://getcomposer.org/). We assume you have got [Composer installed globally like documented in the composer install guide](http://getcomposer.org/doc/00-intro.md#globally) and you know where you want the project folder so it works in your webserver.

```bash
composer create-project --no-interaction symfony/framework-standard-edition ./$PROJECTNAME 2.1.7
cd $PROJECTNAME
```

## Cleaning out the Acme bundle

The Symfony standard distribution contains a demo bundle. We need to remove it first. After some experimenting we have concocted this little script that does just this.

```bash
rm -Rf src/Acme/
grep -v "Acme" app/AppKernel.php > app/AppKernel.php.tmp
mv app/AppKernel.php.tmp app/AppKernel.php
grep "wdt\|profiler\|configurator\|main\|routing" app/config/routing_dev.yml > app/config/routing_dev.yml.tmp
mv app/config/routing_dev.yml.tmp app/config/routing_dev.yml
rm -Rf web/bundles/acmedemo
```

## Configuration

Get your database (mysql) info nearby and let's start with the configuration. First we start the built in PHP server (PHP 5.4 only!)

```
app/console server:run
```

Now browse to [http://localhost:8000/config.php](http://localhost:8000/config.php) and configure your database settings.

## Add the project to git

Version control is vital to a developer, so we get everything setup for using GIT.

```bash
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/.gitignore)" > .gitignore
rm -Rf .git
git init
git add .
git commit -a -m "Symfony base install"
```

## Custom app.php, adding bundles.

In this phase we will install the Kunstmaan Bundles and their dependencies, and we will configure the kernel, config, routing and security files.

```bash
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/app.php)" | sed s/sf2/$PROJECTNAME/ > web/app.php
mkdir -p app/Resources/tools/java
curl -L# http://github.com/downloads/Kunstmaan/KunstmaanSandbox/yuicompressor-2.4.7.jar -o app/Resources/tools/java/yuicompressor-2.4.7.jar
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/fullreload)" > fullreload
chmod a+x fullreload
gem install json  #when ruby is installed as root you need to sudo here
ruby -e "require 'open-uri'; eval open('https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/sandboxinstaller.rb').read" install-bundles composer.json app/AppKernel.php
ruby -e "require 'open-uri'; eval open('https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/sandboxinstaller.rb').read" configure-bundles app/config/parameters.yml $PROJECTNAME
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/config.dist.yml)" >> app/config/config.yml
curl http://www.kunstmaan.be/html/2010/favicon.ico -o web/favicon.ico
mkdir -p web/uploads/media
sudo chown -R $PROJECTNAME web/uploads
```

## Routing

for a single-language-website:

```bash
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/routing-singlelang.dist.yml)" > app/config/routing.yml
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/security-singlelang.dist.yml)" | sed s/sandbox/$PROJECTNAME/ > app/config/security.yml
```

for a multi-language-website:

```bash
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/routing-multilang.dist.yml)" > app/config/routing.yml
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/security-multilang.dist.yml)" | sed s/sandbox/$PROJECTNAME/ > app/config/security.yml
ruby -e "require 'open-uri'; eval open('https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/sandboxinstaller.rb').read" configure-multilanguage app/config/parameters.yml $PROJECTNAME
```

```bash
composer update
```

## Generate

Generate bundle and the default site

```bash
app/console kuma:generate:bundle --namespace=$NAMESPACE/$BUNDLENAME --dir=src --no-interaction
app/console kuma:generate:default-site --namespace=$NAMESPACE/$BUNDLENAME --prefix=$TABLEPREFIX --no-interaction
```

## Initialize assets and database

```bash
./fullreload
```

## CMS Admin

You can now go to the CMS login screen on path : [http://localhost:8000/admin](http://localhost:8000/admin) <br/>
In case you are using a multi-language-website : [http://localhost:8000/en/admin](http://localhost:8000/en/admin)

You can log in with the following account :

Username : admin <br/>
Password : admin

You can access the public part of the website on the [http://localhost:8000/](http://localhost:8000/) or when you're using the multi-language-website, on [http://localhost:8000/en](http://localhost:8000/en)

## Behat

```bash
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/behat.yml-dist)"
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/behat.yml)"
```

In order to setup Behat testing, replace the 'hostname' in the behat.yml in your project's root folder.

You will need the Google Chrome browser installed on your system.

### Chrome Driver

Dowload the Chrome Driver from the following link : [WebDriver for Google Chrome](http://code.google.com/p/chromedriver/downloads/list)

### Selenium driver

Download the [Selenium Server](http://docs.seleniumhq.org/download/) jar file.

## Aviary image editor (optional)

See ["Add Aviary image editor" in the MediaBundle](http://bundles.kunstmaan.be/doc/MediaBundle.html#Add Aviary image editor)
