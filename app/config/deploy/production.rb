set :env, "production"
set :domain, "kumasandbox.front37.kunstmaan.be"

set :branch, `git name-rev --name-only HEAD`.strip # get the current branch name from git

if branch.nil?
  exit
elsif branch != "master"
  agree = Capistrano::CLI.ui.agree("    Are you sure you want to deploy #{branch} to the production server? ") do |q|
    q.default = 'n'
  end
  
  if !agree
    exit
  end
end

