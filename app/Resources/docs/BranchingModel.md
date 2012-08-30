# Branching model

Our bundles are relatively new. This means we will see a lot of refactoring and backward compatible breaks in the coming months. To handle these and maintain a high quality in our websites we created a formal way of branching and tagging in our bundles.

![Branching Model](https://github.com/Kunstmaan/KunstmaanSandbox/raw/master/app/Resources/docs/BranchingModel.png)

When we look at the important events in time, we can connect them to the start of new large projects. Such an event will trigger new features, refactorings and general improvements. These changes will be developped in feature branches and after careful code review be merged into master. These branches will be squashed and the commit message will contain all information needed to upgrade.

At the same time, a while before the launch, have to arrive at a stable version of our bundles. It is foolish to assume these stable versions have no bugs left, so a way has to be available to bugfix these. We will do this by branching into a major version branch ( 2.0, 2.1, 3.0, etc) around the start of the new project. We will not do this every time, only if there was, or is planned, a significant amount of updates or a bc-break. These events are the "stars" in the above diagram.

Some time after the major version branch is started a stable version will be created by adding a tag with the version number. Our projects will be locked on the last version, within the latest major version branch. Bugfixes will be made into these branches and will generate new minor versions. (v2.0.1, v2.1.2, etc)

As long as it is possible, these changes will be merged back in master. If it is no longer possible, these bugfixes need to be redone by hand if still applicable. If a new major version branch is available, the bugfix will also need to be cherry-picked into that branch.

## How to implement?

To implement this we will start by registering the commits in our deps.lock files of the different projects. We will create a 1.1 branch just after the 1.0 tag we created when releasing the bundles. At the different commit hashes, we will create the 1.1.0, 1.1.1 etc tags and update the projects to lock at these versions. After the last minor version, we will create the 1.2 branch as a basis for our latest project.

To map the dependencies between our bundles and their versions we will update the ```composer.json``` file, and keep it updated with the new versions.
