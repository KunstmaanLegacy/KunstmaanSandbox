# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "symfony-raring64"
  config.vm.box_url = "http://vagrant.kunstmaan.be/symfony-raring64.box"

  config.vm.hostname = "kunstmaansandbox"

  config.vm.network :forwarded_port, guest: 80, host: 8003
  config.vm.network :private_network, ip: "33.33.33.003"

  config.ssh.max_tries = 40
  config.ssh.timeout   = 120
  config.ssh.forward_agent = true

  config.vm.provider :virtualbox do |vb|
     vb.customize ["modifyvm", :id, "--memory", "512"]
  end

  config.vm.synced_folder ".", "/vagrant", id: "vagrant-root", :nfs => true, :extra => 'dmode=777,fmode=777'

  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = "./cookbooks"
    #  chef.roles_path = "../my-recipes/roles"
    #  chef.data_bags_path = "../my-recipes/data_bags"
    chef.add_recipe "symfony-hosting::default"
    #  chef.add_role "web"
    # You may also specify custom JSON attributes:
    chef.json = {
	:mysql => {
	        :server_root_password => "et6Eey6u",
		:server_repl_password => "et6Eey6u",
		:server_debian_password => "et6Eey6u"
	}
    }
  end
end
