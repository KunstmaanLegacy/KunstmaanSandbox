export PROJECTNAME=Kunstmaan
export BUNDLENAME=SandboxDemoBundle
export TABLEPREFIX=sandbox


echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/config/parameters.yml)" | sed s/sandbox/$PROJECTNAME/ > app/config/parameters.yml
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/.gitignore)" > .gitignore

echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/app.php)" | sed s/sf2/$PROJECTNAME/ > web/app.php
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/app_test.php)" | sed s/sf2/$PROJECTNAME/ > web/app_test.php

rm -rf app/Resources/tools/java
mkdir -p app/Resources/tools/java
wget http://github.com/downloads/Kunstmaan/KunstmaanSandbox/yuicompressor-2.4.7.jar -O app/Resources/tools/java/yuicompressor-2.4.7.jar

echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/fullreload)" > fullreload
chmod a+x fullreload

# WARNING! It won't update the AppKernel.php.
# You have to remove all traces of kunstmaan first.
ruby -e "require 'open-uri'; eval open('https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/sandboxinstaller.rb').read" install-bundles composer.json app/AppKernel.php
ruby -e "require 'open-uri'; eval open('https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/sandboxinstaller.rb').read" configure-bundles app/config/parameters.yml $PROJECTNAME
cp app/config/parameters.yml app/config/parameters.yml.dist

echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/config.dist.yml)" > app/config/config.yml
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/behat.yml-dist)" > behat.yml-dist
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/behat.yml-dist)" > behat.yml
curl http://www.kunstmaan.be/html/2010/favicon.ico -o web/favicon.ico

mkdir -p web/uploads/media

echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/routing-multilang.dist.yml)" > app/config/routing.yml
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/security-multilang.dist.yml)" | sed s/sandbox/$PROJECTNAME/ > app/config/security.yml
ruby -e "require 'open-uri'; eval open('https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/sandboxinstaller.rb').read" configure-multilanguage app/config/parameters.yml $PROJECTNAME

composer update --prefer-source

rm -rf src/Kunstmaan/

export PROJECTNAMECAP=`echo ${PROJECTNAME^}`
app/console kuma:generate:bundle --namespace="${PROJECTNAMECAP}\\${BUNDLENAME}" --no-interaction --dir=src
app/console kuma:generate:default-site --namespace="${PROJECTNAMECAP}\\${BUNDLENAME}" --prefix="${TABLEPREFIX}_" --no-interaction
app/console kuma:generate:admin-tests --namespace="${PROJECTNAMECAP}\\${BUNDLENAME}"

rm -Rf app/cache/*
rm -Rf app/logs/*

echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/build.xml-dist)" > build.xml-dist
mkdir build
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/phpcs.xml)" > build/phpcs.xml
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/phpdox.xml)" | sed s/sandbox/$PROJECTNAME/ > build/phpdox.xml
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/phpmd.xml)" > build/phpmd.xml
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/phpunit.xml.dist)" > app/phpunit.xml.dist

echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/bower/.bowerrc)" > .bowerrc
echo "$(curl -fsSL https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/bower/bower.json)" > bower.json
ruby -e "require 'open-uri'; eval open('https://raw.github.com/Kunstmaan/KunstmaanSandbox/2.3/app/Resources/tools/install_scripts/sandboxinstaller.rb').read" configure-bower bower.json $PROJECTNAME
bower install
cd src/${PROJECTNAMECAP}/${BUNDLENAME}/Resources/
npm install
grunt modernizr

cd ../../../../

# TODO: Manually check certain differences like parameters.yml which is reset.