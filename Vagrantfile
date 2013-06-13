# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant::Config.run do |config|
  config.vm.box = "kunstmaan-vagrant-raring64"
  config.vm.box_url = "http://vagrant.kunstmaan.be/raring64.box"
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
  config.vm.customize ["modifyvm", :id, "--memory", 1024]
  config.vm.network :hostonly, "33.33.33.33"
  config.ssh.forward_agent = true
  config.vm.forward_port 80, 8484
  config.vm.share_folder("vagrant-root", "/vagrant", ".", :nfs => true, :extra => 'dmode=777,fmode=777')
end
