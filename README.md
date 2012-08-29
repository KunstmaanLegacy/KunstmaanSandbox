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

Next up, basic project structure using Composer. While Symfony 2.1 is not final yet, we also make sure you have the latest versions

```bash
PROJECTNAME=`cat /tmp/kumas2install`
cd /home/projects/$PROJECTNAME/data/
sudo rm -Rf $PROJECTNAME/
curl -s http://getcomposer.org/installer | php
php composer.phar create-project symfony/framework-standard-edition ./$PROJECTNAME
mv composer.phar ./$PROJECTNAME/
cd $PROJECTNAME
git checkout master
php composer.phar update
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
echo "$(curl -fsSL https://raw.github.com/gist/c1125c1f97c76dd6cf99/param)" > param
chmod a+x param
./param encode
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
echo "$(curl -fsSL https://raw.github.com/gist/3424109/gistfile1.txt)" | sed s/sf2/$PROJECTNAME/ > web/app.php
gem install json
ruby -e "require 'open-uri'; eval open('https://raw.github.com/gist/3423884/sandboxinstaller.rb').read" install-bundles composer.json app/AppKernel.php
ruby -e "require 'open-uri'; eval open('https://raw.github.com/gist/3423884/sandboxinstaller.rb').read" configure-bundles app/config/parameters.yml $PROJECTNAME
php composer.phar update
```

app/config/routing.yml

for a single-language-website:
```yaml
# LiipMonitorBundle
_monitor:
    resource: "@LiipMonitorBundle/Resources/config/routing.yml"
    prefix: /monitor/health

# KunstmaanMediaBundle
_imagine:
    resource: .
    type:     imagine

KunstmaanMediaBundle:
    resource: "@KunstmaanMediaBundle/Resources/config/routing.yml"
    prefix:   /

# KunstmaanAdminBundle
KunstmaanAdminBundle:
    resource: "@KunstmaanAdminBundle/Resources/config/routing.yml"
    prefix:   /

# KunstmaanAdminNodeBundle
KunstmaanAdminNodeBundle:
    resource: "@KunstmaanAdminNodeBundle/Resources/config/routing.yml"
    prefix:   /

# KunstmaanPagePartBundle
KunstmaanPagePartBundle:
    resource: "@KunstmaanPagePartBundle/Resources/config/routing.yml"
    prefix:   /

# KunstmaanFormBundle
KunstmaanFormBundle:
    resource: "@KunstmaanFormBundle/Resources/config/routing.yml"
    prefix:   /

# KunstmaanViewBundle
KunstmaanViewBundle_slug:
    resource: "@KunstmaanViewBundle/Controller/SlugController.php"
    type:     annotation
    prefix:   /
```

for a multi-language-website:
```yaml
# LiipMonitorBundle
_monitor:
    resource: "@LiipMonitorBundle/Resources/config/routing.yml"
    prefix: /monitor/health

# KunstmaanMediaBundle
_imagine:
    resource: .
    type:     imagine

KunstmaanMediaBundle:
    resource: "@KunstmaanMediaBundle/Resources/config/routing.yml"
    prefix:   /{_locale}/
    requirements:
        _locale: %requiredlocales%

# KunstmaanAdminBundle
KunstmaanAdminBundle:
    resource: "@KunstmaanAdminBundle/Resources/config/routing.yml"
    prefix:   /{_locale}/
    requirements:
        _locale: %requiredlocales%

# KunstmaanAdminNodeBundle
KunstmaanAdminNodeBundle:
    resource: "@KunstmaanAdminNodeBundle/Resources/config/routing.yml"
    prefix:   /{_locale}/
    requirements:
        _locale: %requiredlocales%

# KunstmaanPagePartBundle
KunstmaanPagePartBundle:
    resource: "@KunstmaanPagePartBundle/Resources/config/routing.yml"
    prefix:   /{_locale}/
    requirements:
        _locale: %requiredlocales%

# KunstmaanFormBundle
KunstmaanFormBundle:
    resource: "@KunstmaanFormBundle/Resources/config/routing.yml"
    prefix:   /{_locale}/
    requirements:
        _locale: %requiredlocales%

# KunstmaanViewBundle
KunstmaanViewBundle_slug:
    resource: "@KunstmaanViewBundle/Controller/SlugController.php"
    type:     annotation
    prefix:   /{_locale}/
    requirements:
        _locale: %requiredlocales%
```


app/config/config.yml

```yaml
imports:
    - { resource: @KunstmaanMediaBundle/Resources/config/config.yml }
    - { resource: @KunstmaanAdminBundle/Resources/config/config.yml }
    - { resource: @KunstmaanFormBundle/Resources/config/config.yml }
    - { resource: @KunstmaanSearchBundle/Resources/config/config.yml }
    - { resource: @KunstmaanAdminListBundle/Resources/config/config.yml }
```

uncomment the translator in framework

```yaml
framework:
    translator:      { fallback: %locale% }
```

add this to the framework config for easy switch to pdo sessions

```yaml
framework:
    #storage_id: session.storage.pdo ## disabled because you need to manually create the table after fullreload. fix could be creating an entity for this table. see symfony.com/doc/current/cookbook/configuration/pdo_session_storage.html
```

add this to the main config:
```yaml
parameters:
    #pdo.db_options:
    # db_table: session
    # db_id_col: session_id
    # db_data_col: session_value
    # db_time_col: session_time

stof_doctrine_extensions:
    default_locale: nl
    translation_fallback: true
    orm:
        default:
           loggable: true
           translatable: true
           sluggable: true

liip_imagine:
    cache_prefix: uploads/cache
    driver: imagick
    #cache: no_cache
    filter_sets:
        thumb_image_block_1:
            quality: 75
            filters:
                thumbnail: { size: [310, 229], mode: outbound }
        thumb_image_block_2:
            quality: 75
            filters:
                thumbnail: { size: [630, 229], mode: outbound }

liip_cache_control:
    rules:
        - { path: /admin, controls: { private: true}, vary: [Accept-Encoding] }
        - { path: ^/_internal, controls: {private: true, max_age: 0} }
        - { path: ^/(.+), controls: { public: true, max_age: 120, s_maxage: 240 }, vary: [Accept-Encoding,Cookie] }

services:
    twig.extension.text:
       class: Twig_Extensions_Extension_Text
       tags:
           - { name: twig.extension }

    monitor.check.deps_entries:
        class: Liip\MonitorExtraBundle\Check\DepsEntriesCheck
        arguments:
            - %kernel.root_dir%
        tags:
            - { name: monitor.check }

    monitor.check.symfony_version:
        class: Liip\MonitorExtraBundle\Check\SymfonyVersionCheck
        tags:
            - { name: monitor.check }

    #pdo:
    # class: PDO
    # arguments:
    # - "mysql:dbname=%database_name%"
    # - %database_user%
    # - %database_password%

    #session.storage.pdo:
    # class: Symfony\Component\HttpFoundation\SessionStorage\PdoSessionStorage
    # arguments: [@pdo, %session.storage.options%, %pdo.db_options%]

    kunstmaan_logging_introspection:
        class: Monolog\Processor\IntrospectionProcessor
        tags:
            - { name: monolog.processor }

    kunstmaan_logging_web:
        class: Symfony\Bridge\Monolog\Processor\WebProcessor
        tags:
            - { name: monolog.processor }

    kunstmaan_logging_formatter:
        class: Monolog\Formatter\LineFormatter
```

add these to twig

```yaml
    globals:
        websitetitle: %websitetitle%
        defaultlocale: %defaultlocale%
        requiredlocales: %requiredlocales%
        #titlecolor: "#000000"
        #titlebgcolor: "#F53111"
        #ga_code: %ga_code% ## don't forget to specify this parameter in parameters.yml
```

update the assetic bundle statement to include the admin bundle

```yaml
    bundles:        [ "KunstmaanAdminBundle" ]
```

and update the orm statement to look like

```yaml
    orm:
        auto_generate_proxy_classes: %kernel.debug%
        entity_managers:
            default:
                auto_mapping: true
                metadata_cache_driver: apc
                result_cache_driver: apc
                query_cache_driver: apc
                mappings:
                    gedmo_translatable:
                        type: annotation
                        prefix: Gedmo\Translatable\Entity
                        dir: "%kernel.root_dir%/../vendor/gedmo/doctrine-extensions/lib/Gedmo/Translatable/Entity"
                        alias: GedmoTranslatable # this one is optional and will default to the name set for the mapping
                        is_bundle: false
                    gedmo_translator:
                        type: annotation
                        prefix: Gedmo\Translator\Entity
                        dir: "%kernel.root_dir%/../vendor/gedmo/doctrine-extensions/lib/Gedmo/Translator/Entity"
                        alias: GedmoTranslator # this one is optional and will default to the name set for the mapping
                        is_bundle: false
                    gedmo_loggable:
                        type: annotation
                        prefix: Gedmo\Loggable\Entity
                        dir: "%kernel.root_dir%/../vendor/gedmo/doctrine-extensions/lib/Gedmo/Loggable/Entity"
                        alias: GedmoLoggable # this one is optional and will default to the name set for the mapping
                        is_bundle: false
                    gedmo_tree:
                        type: annotation
                        prefix: Gedmo\Tree\Entity
                        dir: "%kernel.root_dir%/../vendor/gedmo/doctrine-extensions/lib/Gedmo/Tree/Entity"
                        alias: GedmoTree # this one is optional and will default to the name set for the mapping
                        is_bundle: false
```

app/config/security.yml (Don't forget to change the firewall.main.remember_me.domain parameter)

```yaml
jms_security_extra:
    secure_all_services: false
    expressions: true

security:
    encoders:
        "FOS\UserBundle\Model\UserInterface": sha512

    role_hierarchy:
        ROLE_ADMIN:       ROLE_USER
        ROLE_SUPER_ADMIN: [ROLE_USER, ROLE_ADMIN, ROLE_ALLOWED_TO_SWITCH]
        ROLE_NEWS:        ROLE_USER

    providers:
        fos_userbundle:
                id: fos_user.user_manager

    firewalls:
        main:
            pattern: .*
            form_login:
                login_path: fos_user_security_login
                check_path: fos_user_security_check
                provider: fos_userbundle
            logout:
              path:   fos_user_security_logout
              target: KunstmaanAdminBundle_homepage
            anonymous:    true
            remember_me:
                key:      0f9a62b0231d78a86b4e4a2f87bc032e95f44ebf
                lifetime: 604800
                path:     /
                domain:   kunstmaan.be

        dev:
            pattern:  ^/(_(profiler|wdt)|css|images|js)/
            security: false


    access_control:
        - { path: ^/([^/]*)/login$, role: IS_AUTHENTICATED_ANONYMOUSLY }
        - { path: ^/([^/]*)/resetting, role: IS_AUTHENTICATED_ANONYMOUSLY }
        - { path: ^/([^/]*)/admin/settings/, role: ROLE_ADMIN }
        - { path: ^/([^/]*)/admin/settings, role: ROLE_ADMIN }
        - { path: ^/([^/]*)/admin/, role: ROLE_ADMIN }
        - { path: ^/([^/]*)/admin, role: ROLE_ADMIN }
```


```bash
echo "$(curl -fsSL https://raw.github.com/gist/3423648/fullreload)" > fullreload
chmod a+x fullreload
```

Run fullreload
