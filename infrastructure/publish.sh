#!/bin/sh

if ! [ $1 ]; then
    echo "Required a repository name"; exit
fi
if ! [ -d $1 ]; then
    echo "Repository should be a directory and this script can't find $1"; exit
fi

cd $1

x=`git pull origin master | wc -l`

if ! [ $x -gt 1 ]; then
    echo "No update on the repository, quitting."; exit
fi
if ! [ -e ".infrastructure/rsyncmd" ]; then
    echo "Missing 'rsyncmd' file in $1/.infrastructure"; exit
fi

../go/bin/hugo
# This invokation goes after the check of 'rsyncmd' because 'hugo-theme-trex' doesn't compile on a site.
cd ..
echo "starting rsync"
sh $1/.infrastructure/rsyncmd
