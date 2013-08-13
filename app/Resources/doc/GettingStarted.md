# Getting Started Guide

In this guide we will guide you through setting up a new website using the Kunstmaan Bundles. 

## Getting your environment up and running

You need an environment [ready to run Symfony 2 applications (PHP >= 5.3.3, MySQL)](http://symfony.com/doc/current/reference/requirements.html) and the following separate requirements:

* bower
* grunt
* grunt-cli
* java
* node.js
* ruby

# Generating the default website

We have created a script to do the entire install and setup for you in one go. Don't forget to replace 'ProjectName' by your preferred name.

```bash
curl -s http://bundles.kunstmaan.be/generate/ProjectName | bash
```

By default this will create a multi language setting for you with namespace 'ProjectName', bundle name 'WebsiteBundle' and a prefix 'projectname_' for your tables in the database. Note that it will install the latest available stable version. 

You can pass following parameters to change some behaviour:

* bundlename=WebsiteBundle
* prefix=generator_
* version=2.3 (Version 2.2 is also supported but why would you?)
* lang=single

The following example will install a single language site with a bundlename WebsiteBundle, a Symfony version 2.3 and a prefix 'generator_' for the tables in the database:

```bash
curl -s 'http://bundles.kunstmaan.be/generate/ProjectName?version=2.3&bundlename=WebsiteBundle&prefix=generator_&lang=single' | bash
```

Note: If you pass a bundlename ending with Bundle it will take this as your bundle name. If you pass a bundle name that does not end with Bundle (note the capital B), it will append Bundle to your name.

Next you need to configure your parameters.yml (either manually or using the symfony configurator) and execute the following command :

```bash
./fullreload
```
After which you can browse to '/admin' (for single language) or '/en/admin' (for multi language) to login to the admin using 'admin' as both username and password.
