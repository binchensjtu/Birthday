# Development Guide #
---------------------------------------

{:toc}


## SetUp Environment ##


### Linux ###

#### Restore Env ####

`yinst restore build/build.state`

#### Install Clover License ####

`yinst i yjava_clover_license`

_Please check out [password]. For more information about clover license please refer to dist package [yjava_clover_license]._

### Mac ###
#### Require Tools ####
* Git
* protobuf 2.3
* Maven 3

## Development ##

### Build Command ###

1. Build API Package
    
    ```sh
    cd src/api/
    make commit
    ```
2. Build Routing Package
    
    ```sh
    cd src/routing/
    make commit
    ```
3. Build ActiveMQ Package
    
    ```sh
    cd src/activemq/
    make pkg-release
    ```
4. Build API Ykeykey Package
    
    ```sh
    cd src/api_ykeykey/
    make commit
    ```
5. Build Broker Lib Package
    
    ```sh
    cd src/broker_lib/
    make commit
    ```
6. Build Metadata Lib Package
    
    ```sh
    cd src/metadata/
    make commit
    ```
7. Build Vespa Refeeder Package
    
    ```sh
    cd src/vespa_refeeder/
    make commit
    ```


### Eclipse ###

Eclipse is recommended as the development IDE, which can accelerate coding progress and format the code for you. Follow these steps to setup eclipse project:
1. Set up maven repo setting(For Non-Ylinux)

    a. Download maven repo [setting.xml]
    
    b. Place the _setting.xml_ file under $HOME/.m2/
    
    c. Open eclipse and navigate to the preferences window (Eclipse -> Preferences)
    
    d. Navigate to Maven -> Installations -> User Settings
    
    e. In user settings set the path to the _settings.xml_ file ($HOME/.m2/settings.xml)
    
2. Run `mvn eclipse:eclipse` to generates Eclipse project files (.project and .class).

3. Start Eclipse and import the project by menu "File -> Import...". 

4. Import the code formatter file:

    a. Click menu "Eclipse -> Preference…"
    
    b. Expand the tree control on the left of preference window: "Java -> Code Style -> Formatter"

    c. Click the "Import…" button on the right of preference window and choose _onepush-common/devel/java/formatter.xml_
    
### Daily development

Everyone **fork** to their own repo from the organization repo.  Forked repo is
considered as private and not suppose to be forked downwards, owner have the
right to use `git push --force` if needed.

Everyone develop in a **clone** from his forked repo with remote name `origin`
(default), also have a remote **upstream** points to organization repo.

    git clone git@git.corp.yahoo.com:user/onepush.git
    cd onepush
    git remote add upstream git@git.corp.yahoo.com:cloud/onepush.git

Once have a clone of the forked repo, daily workflow is like followings:

1. Create a **topic branch** from a remote master branch, work on it, push to
   remote topic branch in the forked repo.  You can also work on local master
   branch directly but working in topic branch will benefit you when pull
   changes from others and when you want to work on another task while waiting
   for code review result.  This is recommended way in git world.

    ```sh
    git fetch upstream -p           # fetch latest objects in upstream
    git checkout -b topic-foo upstream/master
    ... development ...
    git add file ...
    git commit file ...
    git push origin topic-foo       # push to remote topic branch in your fork
    ```

2. Send **pull request** from the _topic branch_ against the _master branch_
   in organization repo for peer **review**.

3. Sender or reviewer to **merge** the pull request to the master branch in
   organization repo.
4. Wait for precommit job mark it as pass.

5. Optionally **refresh** local branch and forked repo.

    ```sh
    git checkout master             # switch to tracked master branch
    git pull upstream master        # refresh working tree
    git push origin :topic-foo      # optional: delete the remote branch
    git branch -d topic-foo         # optional: delete local branch as well
    git push origin master          # update your fork
    ```

6. Repeat 1 ~ 5 for **another topic branch**.

Remember these rules:

- Commit early and often
- Commit atomic (e.g. if a fix affects two files, commit them together)
- Write good commit message
  - [A Note About Git Commit Messages]
  - [Bad examples]


[password]:http://pepe.corp.yahoo.com/clover.key
[yjava_clover_license]:http://dist.corp.yahoo.com/by-package/yjava_clover_license/
[setting.xml]:http://svn.corp.yahoo.com/view/yahoo/media/mediaqa/trunk/tools/maven/settings.xml?view=co
[A Note About Git Commit Messages]:http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
[Bad examples]:http://www.commitlogsfromlastnight.com/


