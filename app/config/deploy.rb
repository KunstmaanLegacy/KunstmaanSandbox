# Main config
set :application, "omnext"
set :use_sudo, false
set :keep_releases, 3

# Stages config
set :stage_dir, "app/config/deploy"
set :stages, %w{production staging}
set :default_stage, "production"
require 'capistrano/ext/multistage' # this should be here, can't be set on top of the config

set :deploy_to, "/home/projects/omnext/data/"
set (:domain) {"#{domain}"} # domain is defined in the stage config

role(:web) { domain } # Your HTTP server, Apache/etc
role(:app) { domain } # This may be the same as your `Web` server
role(:db, :primary => true) { domain } # This is where the migrations will run

# Git config
set :repository, `git config remote.origin.url`.strip # fetch the repository from git
set :scm, :git
# set :deploy_via, :rsync_with_remote_cache # gem install capistrano_rsync_with_remote_cache

# Symfony 2 config
set :model_manager, "doctrine"
set :shared_files, ["app/config/parameters.ini"]
set :shared_children, [app_path + "/logs", web_path + "/uploads", "vendor"]
set :vendors_mode, "install"
set :update_vendors, true

# Kumastrano config
set :campfire_room, "OpenMercury.NEXT"

# Airbrake