# Kunstmaan Symfony 2 Reference Project: Sandbox

## This is a sandbox for the following bundles:

* [KunstmaanAdminBundle][KunstmaanAdminBundle]
* [KunstmaanMediaBundle][KunstmaanMediaBundle]
* [KunstmaanPagePartBundle][KunstmaanPagePartBundle]
* [KunstmaanAdminListBundle][KunstmaanAdminListBundle]
* [KunstmaanAdminNodeBundle][KunstmaanAdminNodeBundle]
* [KunstmaanViewBundle][KunstmaanViewBundle]
* [KunstmaanSearchBundle][KunstmaanSearchBundle]
* [KunstmaanFormBundle][KunstmaanFormBundle]
* [KunstmaanMediaPagePartBundle][KunstmaanMediaPagePartBundle]

## Installation:

```bash
    git clone git@github.com:Kunstmaan/KunstmaanSandbox.git kunstmaan-sandbox
    cd kunstmaan-sandbox
    rm -rf .git
    cp app/config/parameters.ini.dist app/config/parameters.ini
```

Now edit the app/config/parameters.ini file, be sure your db settings are correct. Be sure the user can create the database in mysql:

```sql
    create user 'kumasandbox'@'localhost' identified by 'kumasandbox';
    grant all on kumasandbox.* to 'kumasandbox'@'localhost';
```

Then continue with:

```bash
    php bin/vendors install
    php app/console doctrine:database:create
    php app/console doctrine:schema:create
    php app/console doctrine:fixtures:load
    php app/console assets:install web
    php app/console assetic:dump
```

Now you should be able to login with username "admin" and password "admin" on: [http://localhost/kunstmaan-sandbox/web/app_dev.php/nl/admin/pages/][SandboxLogin]

[KunstmaanAdminBundle]: https://github.com/Kunstmaan/KunstmaanAdminBundle "KunstmaanAdminBundle"
[KunstmaanMediaBundle]: https://github.com/Kunstmaan/KunstmaanMediaBundle "KunstmaanMediaBundle"
[KunstmaanPagePartBundle]: https://github.com/Kunstmaan/KunstmaanPagePartBundle "KunstmaanPagePartBundle"
[KunstmaanAdminListBundle]: https://github.com/Kunstmaan/KunstmaanAdminListBundle "KunstmaanAdminListBundle"
[KunstmaanAdminNodeBundle]: https://github.com/Kunstmaan/KunstmaanAdminNodeBundle "KunstmaanAdminNodeBundle"
[KunstmaanViewBundle]: https://github.com/Kunstmaan/KunstmaanViewBundle "KunstmaanViewBundle"
[KunstmaanSearchBundle]: https://github.com/Kunstmaan/KunstmaanSearchBundle "KunstmaanSearchBundle"
[KunstmaanFormBundle]: https://github.com/Kunstmaan/KunstmaanFormBundle "KunstmaanFormBundle"
[KunstmaanMediaPagePartBundle]: https://github.com/Kunstmaan/KunstmaanMediaPagePartBundle "KunstmaanMediaPagePartBundle"
[SandboxLogin]: http://localhost/kunstmaan-sandbox/web/app_dev.php/nl/admin/pages/ "SandboxLogin"