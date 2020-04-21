
1) all the website repository should have a git deployment key configured
2) each $X minutes crontab script will fetch all of them
3) each of them is linking the "hugo-trex-theme" internally, it should be updated as first repository.
4) each of them has the directory 'infrastructure', on .gitignore, with config files, IP, keys.

### footnotes

0) the scripts run in /home/hugo where hugo is updated to our currently supported version. hugo isn't installed system wide in the building box.
1) setup composed of:
  * deployment keys creation
  * update of .ssh/config to use a specific key for each repo
  * git clone
  * update of the individual repositories with

### .ssh/config for git

Host fbtrex github.com
Hostname github.com
IdentityFile /home/hugo/keys/facebook.tracking.exposed

Host yttrex github.com
Hostname github.com
IdentityFile /home/hugo/keys/youtube.tracking.exposed

Host potrex github.com
Hostname github.com
IdentityFile /home/hugo/keys/pornhub.tracking.exposed

Host amtrex github.com
Hostname github.com
IdentityFile /home/hugo/keys/amazon.tracking.exposed

Host trex github.com
Hostname github.com
IdentityFile /home/hugo/keys/tracking.exposed

Host ttheme github.com
Hostname github.com
IdentityFile /home/hugo/keys/hugo-trex-theme


### commands given

git clone git@amtrex:tracking-exposed/amazon.tracking.exposed
git clone git@fbtrex:tracking-exposed/facebook.tracking.exposed
git clone git@ttheme:tracking-exposed/hugo-trex-theme
git clone git@potrex:tracking-exposed/pornhub.tracking.exposed
git clone git@trex:tracking-exposed/tracking.exposed
git clone git@yttrex:tracking-exposed/youtube.tracking.exposed

cd tracking.exposed          && mkdir themes && cd themes && ln -s ../../hugo-trex-theme ./trex && cd
cd facebook.tracking.exposed && mkdir themes && cd themes && ln -s ../../hugo-trex-theme ./trex && cd
cd amazon.tracking.exposed   && mkdir themes && cd themes && ln -s ../../hugo-trex-theme ./trex && cd
cd pornhub.tracking.exposed  && mkdir themes && cd themes && ln -s ../../hugo-trex-theme ./trex && cd
cd youtube.tracking.exposed  && mkdir themes && cd themes && ln -s ../../hugo-trex-theme ./trex && cd

### Tests

ln -s tracking.exposed/infrastructure/publish.sh ./
/home/hugo/publish.sh script need one argument, it is the website name.

### cat publish.sh

```
cd $1
source .infrastructure/variables
# this load "server command"
$((command))
```
