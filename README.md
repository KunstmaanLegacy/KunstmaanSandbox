KunstmaanSandbox by Kunstmaan
=================================

About
-----
The Kunstmaan sandbox is an example project to demonstrate what the Kunstmaan bundles are able to achieve when using a combination of the Kunstmaan bundles.

View screenshots and more on our [github page](http://kunstmaan.github.com/KunstmaanSandbox)

[![Build Status](https://secure.travis-ci.org/Kunstmaan/KunstmaanSandbox.png?branch=master)](http://travis-ci.org/Kunstmaan/KunstmaanSandbox)


This is a sandbox for the following bundles
-------------------------------------------

* KunstmaanAdminBundle
* KunstmaanMediaBundle
* KunstmaanPagePartBundle
* KunstmaanAdminListBundle
* KunstmaanAdminNodeBundle
* KunstmaanViewBundle
* KunstmaanSearchBundle
* KunstmaanFormBundle
* KunstmaanMediaPagePartBundle


Installation requirements
-------------------------
You should be able to get Symfony 2 up and running before you can install the KunstmaanSandbox.

Installation instructions
-------------------------
```
git clone https://github.com/Kunstmaan/KunstmaanSandbox.git
cd KunstmaanSandbox
rm -rf .git
cp app/config/parameters.ini.dist app/config/parameters.ini
```

Now edit the app/config/parameters.ini file, be sure your db settings are correct. Be sure the user can create the database in mysql:

```
create user 'kumasandbox'@'localhost' identified by 'kumasandbox';
grant all on kumasandbox.* to 'kumasandbox'@'localhost';
```

Then continue with:

```
php bin/vendors install
php app/console doctrine:database:create
php app/console doctrine:schema:create
php app/console doctrine:fixtures:load
php app/console assets:install web
php app/console assetic:dump
```
Now you should be able to login with username "admin" and password "admin" on http://localhost/kunstmaan-sandbox/web/app_dev.php/nl/admin/pages/

Contact
-------
Kunstmaan (support@kunstmaan.be)

Download
--------
You can also clone the project with Git by running:

```
$ git clone git://github.com/Kunstmaan/KunstmaanSandbox
```