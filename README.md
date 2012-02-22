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
Now edit the app/config/parameters.ini file, be sure your db settings are correct. Mayby you need to do some mysql commands:
```sql
    create user 'kumasandboxtest'@'localhost' identified by 'kumasandboxtest';
    grant all on kumasandboxtest.* to 'kumasandboxtest'@'localhost';
```
Then continue with:
```bash
    php bin/vendors install
    php app/console doctrine:schema:create
    php app/console doctrine:fixtures:load
    php app/console assets:install web
    php app/console assetic:dump
```

[KunstmaanAdminBundle]: https://github.com/Kunstmaan/KunstmaanAdminBundle "KunstmaanAdminBundle"
[KunstmaanMediaBundle]: https://github.com/Kunstmaan/KunstmaanMediaBundle "KunstmaanMediaBundle"
[KunstmaanPagePartBundle]: https://github.com/Kunstmaan/KunstmaanPagePartBundle "KunstmaanPagePartBundle"
[KunstmaanAdminListBundle]: https://github.com/Kunstmaan/KunstmaanAdminListBundle "KunstmaanAdminListBundle"
[KunstmaanAdminNodeBundle]: https://github.com/Kunstmaan/KunstmaanAdminNodeBundle "KunstmaanAdminNodeBundle"
[KunstmaanViewBundle]: https://github.com/Kunstmaan/KunstmaanViewBundle "KunstmaanViewBundle"
[KunstmaanSearchBundle]: https://github.com/Kunstmaan/KunstmaanSearchBundle "KunstmaanSearchBundle"
[KunstmaanFormBundle]: https://github.com/Kunstmaan/KunstmaanFormBundle "KunstmaanFormBundle"
[KunstmaanMediaPagePartBundle]: https://github.com/Kunstmaan/KunstmaanMediaPagePartBundle "KunstmaanMediaPagePartBundle"
