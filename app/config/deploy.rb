
# Main config
set :application, "omnext"
set :domain,      "omnext.front26.kunstmaan.be"
set :deploy_to,   "/home/projects/omnext/data/"
role :web,        domain                         # Your HTTP server, Apache/etc
role :app,        domain                         # This may be the same as your `Web` server
role :db,         domain, :primary => true       # This is where Rails migrations will run
set :use_sudo, false
set :keep_releases, 3

# Stages config
set :stage_dir,   "app/config/deploy"
require 'capistrano/ext/multistage'
set :stages, %w(production testing development)
set :default_stage, "production"

# Git config
set :repository,  "git@github.com:Kunstmaan/OpenMercury.NEXT.git"
set :scm,         :git
set :branch,      "master"

# Symfony 2 config
set :model_manager, "doctrine"
set :shared_files, ["app/config/parameters.ini"]
set :shared_children,     [app_path + "/logs", web_path + "/uploads", "vendor"]
set :vendors_mode, "install"
set :update_vendors, true

