require 'capistrano_colors'

# Main
set :application, "sandbox"
set :use_sudo, true
set :admin_runner, "sandbox"
set :keep_releases, 5
default_run_options[:pty] = true

# Stages
set :stage_dir, "app/config/deploy"
set :stages, %w{production staging}
set :default_stage, "production"
require 'capistrano/ext/multistage'

set :deploy_to, "/home/projects/#{application}/data/"
set (:domain) {"#{domain}"} # domain is defined in the stage config

role(:web) { domain } # Your HTTP server, Apache/etc
role(:app) { domain } # This may be the same as your `Web` server
role(:db, :primary => true) { domain } # This is where the migrations will run

# Git
set :repository, `git config remote.origin.url`.strip # fetch the repository from git
set :scm, :git
ssh_options[:forward_agent] = true # http://help.github.com/deploy-with-capistrano/
set :deploy_via, :remote_cache #only keeps an online cache
set :branch, "master"

# Symfony 2
set :model_manager, "doctrine"
set :shared_children, [app_path + "/logs", web_path + "/uploads"]

# When using Symfony 2.0
# set :use_composer, false
# set :vendors_mode, "install"
# set :update_vendors, true

# When using Symfony 2.1
set :use_composer, true
set :update_vendors, false

set :dump_assetic_assets, true
set :interactive_mode, true
set :clear_controllers, false # set this by default to false, because it's quiet dangerous for existing projects. You need to make sure it doesn't delete your app.php

set :writable_dirs,     ["app/cache", "app/logs"]
set :webserver_user,    "www-data"
set :permission_method, :acl
set :force_schema, false

# Logging
# - IMPORTANT = 0
# - INFO      = 1
# - DEBUG     = 2
# - TRACE     = 3
# - MAX_LEVEL = 3
logger.level = Logger::MAX_LEVEL