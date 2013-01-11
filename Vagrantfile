# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant::Config.run do |config|
  config.vm.box = "symfony-quantal32"
  config.vm.box_url = "https://dl.dropbox.com/u/597777/symfony-quantal32.box"
  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = "cookbooks"
    chef.add_recipe("symfony-hosting::default")
    chef.json = {
      :mysql => {
        :server_root_password => "et6Eey6u",
        :server_repl_password => "et6Eey6u",
        :server_debian_password => "et6Eey6u"
      }
    }
  end
  config.vm.forward_port 80, 8484
  config.vm.share_folder("v-root", "/vagrant", ".", :extra => 'dmode=777,fmode=777')
end
