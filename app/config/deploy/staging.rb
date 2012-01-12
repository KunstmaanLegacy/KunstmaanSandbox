set :env, "staging"
set :domain, "omnext.staging1.kunstmaan.be"

set :branch, `git name-rev --name-only HEAD`.strip
if branch.nil?
  exit
end