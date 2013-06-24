#!/usr/bin/ruby

require 'rubygems'
require 'json'
require 'open-uri'
require 'yaml'

command = ARGV[0]

if command == "install-bundles"
    puts "Let's install the bundles"
    composer = ARGV[1]
    appkernel = ARGV[2]

    # Composer.json
    buffer = open(composer).read
    result = JSON.parse(buffer)
    requires = result['require']
    requires["ddeboer/data-import"] = "dev-master"
    requires["ddeboer/data-import-bundle"] = "dev-master"
    requires["doctrine/data-fixtures"] = "1.0.*@dev"
    requires["doctrine/doctrine-fixtures-bundle"] = "2.1.*@dev"
    requires["doctrine/doctrine-migrations-bundle"] = "dev-master@dev"
    requires["doctrine/migrations"] =  "dev-master@dev"    
    requires["gregwar/form-bundle"] = "dev-master"
    requires["knplabs/knp-menu"] = "dev-master"
    requires["knplabs/knp-menu-bundle"] = "dev-master"
    requires["kriswallsmith/assetic"] = "1.1.*@dev"
    requires["liip/cache-control-bundle"] = "dev-master"
    requires["liip/imagine-bundle"] = "dev-master"
    requires["pagerfanta/pagerfanta"] = "dev-master"
    requires["raven/raven"] = "dev-master"
    requires["stof/doctrine-extensions-bundle"] = "dev-master"
    requires["friendsofsymfony/user-bundle"] = "dev-master"
    requires["white-october/pagerfanta-bundle"] = "dev-master"
    requires["jms/security-extra-bundle"] = "1.5.*"
    requires["kunstmaan/admin-bundle"] = "dev-symfony-2.3"
    requires["kunstmaan/adminlist-bundle"] = "dev-symfony-2.3"
    requires["kunstmaan/article-bundle"] = "dev-symfony-2.3"
    requires["kunstmaan/behat-bundle"] = "dev-symfony-2.3"
    requires["kunstmaan/form-bundle"] = "dev-symfony-2.3"
    requires["kunstmaan/generator-bundle"] = "dev-symfony-2.3"
    requires["kunstmaan/media-bundle"] = "dev-symfony-2.3"
    requires["kunstmaan/media-pagepart-bundle"] = "dev-symfony-2.3"
    requires["kunstmaan/newrelicbundle"] = "dev-master"
    requires["kunstmaan/node-bundle"] = "dev-symfony-2.3"
    requires["kunstmaan/node-search-bundle"] = "dev-symfony-2.3"
    requires["kunstmaan/pagepart-bundle"] = "dev-symfony-2.3"
    requires["kunstmaan/search-bundle"] = "dev-symfony-2.3"
    requires["kunstmaan/sentry-bundle"] = "dev-master"
    requires["kunstmaan/seo-bundle"] =  "dev-symfony-2.3"
    requires["kunstmaan/sitemap-bundle"] = "dev-symfony-2.3"
    requires["kunstmaan/utilities-bundle"] = "dev-symfony-2.3"
    result["minimum-stability"] = "stable"
    result['config'] = {
        'bin-dir' => "bin/"
    }
    File.open(composer, 'w') {|f| f.write(JSON.pretty_generate(result)) }

    # AppKernel.php
    appk = File.read(appkernel)
    if not appk.include? "Kunstmaan"
        buffer = open('https://raw.github.com/Kunstmaan/KunstmaanSandbox/symfony-2.3/app/Resources/tools/install_scripts/AppKernelFragment.php').read
        replaced = appk.gsub("return $bundles;", buffer)
        File.open(appkernel, 'w') {|f| f.write(replaced) }
    else
        puts "AppKernel.php already contains Kunstmaan bundle configurations."
    end
elsif command == "configure-bundles"
    parametersymlpath = ARGV[1]
    projectname = ARGV[2]
    parametersyml = YAML.load_file(parametersymlpath)
    params = parametersyml["parameters"]
    params["searchindexprefix"] = projectname
    params["sentry.dsn"] = "https://XXXXXXXX:XXXXXXXX@app.getsentry.com/XXXX"
    params["cdnpath"] = ""
    params["requiredlocales"] = "en"
    params["defaultlocale"] = "en"
    params["multilanguage"] = false
    params["websitetitle"] = projectname.capitalize
    File.open(parametersymlpath, 'w') {|f| f.write(YAML.dump(parametersyml)) }
elsif command == "configure-multilanguage"
    parametersymlpath = ARGV[1]
    projectname = ARGV[2]
    parametersyml = YAML.load_file(parametersymlpath)
    params = parametersyml["parameters"]
    params["requiredlocales"] = "nl|fr|de|en"
    params["defaultlocale"] = "en"
    params["multilanguage"] = true
    File.open(parametersymlpath, 'w') {|f| f.write(YAML.dump(parametersyml)) }
else
    puts "No command by this name found."
    puts ""
    puts "Possible commands are:"
    puts "    install-bundles [path to composer.json] [path to AppKernel.php]"
    puts "    configure-bundles [path to parameters.yml] [projectname]"
end
