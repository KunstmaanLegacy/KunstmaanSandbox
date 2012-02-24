KunstmaanSandbox by Kunstmaan
=================================

About
-----
The Kunstmaan sandbox is an example project to demonstrate what the Kunstmaan bundles are able to achieve when using a combination of the Kunstmaan bundles.

View screenshots and more on our [github page](http://kunstmaan.github.com/
KunstmaanSandbox).

Installation requirements
-------------------------
You should be able to get Symfony 2 up and running before you can install the KunstmaanSandbox.

Installation instructions
-------------------------
Installation is straightforward, add the following lines to your deps file:

```
[KunstmaanSandbox]
    git=git@github.com:Kunstmaan/KunstmaanSandbox.git
    target=/bundles/Kunstmaan/Sandbox
```

Register the Kunstmaan namespace in your autoload.php file:

```
'Kunstmaan'        => __DIR__.'/../vendor/bundles'
```

Add the KunstmaanSandbox to your AppKernel.php file:

```
new Kunstmaan\Sandbox\KunstmaanSandbox(),
```

Contact
-------
Kunstmaan (support@kunstmaan.be)

Download
--------
You can also clone the project with Git by running:

```
$ git clone git://github.com/Kunstmaan/KunstmaanSandbox
```