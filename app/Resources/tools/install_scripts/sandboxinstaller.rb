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
    requires["kunstmaan/admin-bundle"] = "dev-master"
    requires["kunstmaan/media-bundle"] = "dev-master"
    requires["kunstmaan/pagepart-bundle"] = "dev-master"
    requires["kunstmaan/media-pagepart-bundle"] = "dev-master"
    requires["kunstmaan/form-bundle"] = "dev-master"
    requires["kunstmaan/adminlist-bundle"] = "dev-master"
    requires["kunstmaan/node-bundle"] = "dev-master"
    requires["kunstmaan/seo-bundle"] = "dev-master"
    requires["kunstmaan/search-bundle"] =  "dev-master"
    requires["kunstmaan/generator-bundle"] = "dev-master"
    requires["kunstmaan/sentry-bundle"] = "dev-master"
    requires["kunstmaan/utilities-bundle"] = "dev-master"
    requires["kunstmaan/seo-bundle"] = "dev-master"
    requires["liip/monitor-bundle"] = "dev-master"
    requires["liip/cache-control-bundle"] = "dev-master"
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
    params["requiredlocales"] = "nl|fr|de|en"
    params["defaultlocale"] = "nl"
    params["websitetitle"] = projectname.capitalize
    File.open(parametersymlpath, 'w') {|f| f.write(YAML.dump(parametersyml)) }
else
    puts "No command by this name found."
    puts ""
    puts "Possible commands are:"
    puts "    install-bundles [path to composer.json] [path to AppKernel.php]"
    puts "    configure-bundles [path to parameters.yml] [projectname]"
end
