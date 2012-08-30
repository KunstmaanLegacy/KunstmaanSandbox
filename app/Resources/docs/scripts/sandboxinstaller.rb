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
    requires["kunstmaan/admin-bundle"] = "2.0.x-dev"
    requires["kunstmaan/media-bundle"] = "2.0.x-dev"
    requires["kunstmaan/pagepart-bundle"] = "2.0.x-dev"
    requires["kunstmaan/media-pagepart-bundle"] = "2.0.x-dev"
    requires["kunstmaan/form-bundle"] = "2.0.x-dev"
    requires["kunstmaan/adminlist-bundle"] = "2.0.x-dev"
    requires["kunstmaan/adminnode-bundle"] = "2.0.x-dev"
    requires["kunstmaan/view-bundle"] = "2.0.x-dev"
    requires["kunstmaan/search-bundle"] =  "2.0.x-dev"
    requires["kunstmaan/generator-bundle"] = "2.0.x-dev"
    requires["kunstmaan/sentry-bundle"] = "dev-master"
    requires["liip/monitor-bundle"] = "dev-master"
    requires["liip/monitor-extra-bundle"] = "dev-master"
    requires["liip/cache-control-bundle"] = "dev-master"
    File.open(composer, 'w') {|f| f.write(JSON.pretty_generate(result)) }

    # AppKernel.php
    appk = File.read(appkernel)
    if not appk.include? "Kunstmaan"
        buffer = open('https://raw.github.com/Kunstmaan/KunstmaanSandbox/master/app/Resources/docs/scripts/AppKernelFragment.php').read
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
