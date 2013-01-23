#!/usr/bin/ruby

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
    requires["kunstmaan/admin-bundle"] = "2.2.*@dev"
    requires["doctrine/doctrine-fixtures-bundle"] =  "2.1.*@dev"
    requires["doctrine/data-fixtures"] =  "1.0.*@dev"
    requires["kunstmaan/media-bundle"] =  "2.2.*@dev"
    requires["liip/imagine-bundle"] =  "dev-master"
    requires["stof/doctrine-extensions-bundle"] = "dev-master"
    requires["kunstmaan/pagepart-bundle"] =  "2.2.*@dev"
    requires["kunstmaan/media-pagepart-bundle"] =  "2.2.*@dev"
    requires["kunstmaan/form-bundle"] =  "2.2.*@dev"
    requires["ddeboer/data-import-bundle"] =  "dev-master"
    requires["ddeboer/data-import"] =  "dev-master"
    requires["gregwar/form-bundle"] = "dev-master"
    requires["kunstmaan/adminlist-bundle"] =  "2.2.*@dev"
    requires["white-october/pagerfanta-bundle"] =  "dev-master"
    requires["pagerfanta/pagerfanta"] =  "dev-master"
    requires["kunstmaan/node-bundle"] =  "2.2.*@dev"
    requires["symfony-cmf/routing-extra-bundle"] =  "1.0.*@dev"
    requires["symfony-cmf/routing"] =  "1.0.*@dev"
    requires["kunstmaan/seo-bundle"] =  "2.2.*@dev"
    requires["kunstmaan/generator-bundle"] =  "2.2.*@dev"
    requires["kunstmaan/sentry-bundle"] =  "2.2.*@dev"
    requires["raven/raven"] =  "dev-master"
    requires["kunstmaan/utilities-bundle"] =  "2.2.*@dev"
    requires["kunstmaan/newrelicbundle"] =  "2.2.*@dev"
    requires["liip/cache-control-bundle"] =  "dev-master"
    #result["minimum-stability"] = "dev"
    File.open(composer, 'w') {|f| f.write(JSON.pretty_generate(result)) }

    # AppKernel.php
    appk = File.read(appkernel)
    if not appk.include? "Kunstmaan"
        buffer = open('https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/tools/install_scripts/AppKernelFragment.php').read
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
    params["searchport"] = 9200
    params["searchindexname"] = projectname
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
