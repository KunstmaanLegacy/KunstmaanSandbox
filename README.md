# A little help

To make these scripts more easy to follow for other projects, we are going to define the project name in a tmp file.

```bash
echo "YOUR PROJECT NAME HERE, LOWERCASE, NO SPACES OR SPECIAL CHARACTERS" > /tmp/kumas2install
```

# Setting up the project using kDeploy

First we create the new project with kDeploy. If you don't use kDeploy skip this section.

```bash
sudo -i
cd /opt/kDeploy/tools
PROJECTNAME=`cat /tmp/kumas2install`
python newproject.py $PROJECTNAME
python applyskel.py $PROJECTNAME symfony
rm -Rf /home/projects/$PROJECTNAME/data/$PROJECTNAME/*
python fixperms.py $PROJECTNAME
python maintenance.py quick
apachectl restart
exit
```

# Basic project structure using Composer

Next up, basic project structure using Composer.

```bash
PROJECTNAME=`cat /tmp/kumas2install`
cd /home/projects/$PROJECTNAME/data/
sudo rm -Rf $PROJECTNAME/
curl -s http://getcomposer.org/installer | php
php composer.phar create-project --no-interaction symfony/framework-standard-edition ./$PROJECTNAME 2.1.3
mv composer.phar ./$PROJECTNAME/
cd $PROJECTNAME
```

# Cleaning out the Acme bundle

```bash
rm -Rf src/Acme/
grep -v "Acme" app/AppKernel.php > app/AppKernel.php.tmp
mv app/AppKernel.php.tmp app/AppKernel.php
grep "wdt\|profiler\|configurator\|main\|routing" app/config/routing_dev.yml > app/config/routing_dev.yml.tmp
mv app/config/routing_dev.yml.tmp app/config/routing_dev.yml
rm -Rf web/bundles/acmedemo
```

# Configure your application and add the project to git

Configure your application by surfing to http://computername/config.php and make sure parameters.yml or .ini is not readable in git.

```bash
echo "app/config/parameters.yml" >> .gitignore
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/config/parameters.yml)" | sed s/sandbox/$PROJECTNAME/ > app/config/parameters.yml
echo ".idea" >> .gitignore
echo "web/generated-js" >> .gitignore
echo "web/generated-css" >> .gitignore
echo "web/uploads" >> .gitignore
rm -Rf .git
git init
git add .
git commit -a -m "Symfony base install"
```

# Adding kstrano config files

```bash
kumafy . --force
```

TODO: update the config files in kStrano to match this setup, including the .travis.yml

# Custom app.php, adding bundles.

```bash
PROJECTNAME=`cat /tmp/kumas2install`
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

# app/config/routing.yml

for a single-language-website:
```bash
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/routing-singlelang.dist.yml)" > app/config/routing.yml
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/security-singlelang.dist.yml)" | sed s/sandbox/$PROJECTNAME/ > app/config/security.yml
```

for a multi-language-website:
```bash
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/routing-multilang.dist.yml)" > app/config/routing.yml
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/security-multilang.dist.yml)" | sed s/sandbox/$PROJECTNAME/ > app/config/security.yml
```

```bash
php composer.phar update
```

# Generate

Generate bundle

```bash
app/console kuma:generate:bundle
```

Generate default site (replace bundle namespace and name)

```bash
app/console kuma:generate:default-site --namespace=Namespace/NameOfBundle --prefix=tableprefix_
```

# run fullreload
First make sure the database parameters are correct in app/config/parameters.yml
```bash
./fullreload
```
