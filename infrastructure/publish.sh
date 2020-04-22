#!/bin/sh -x

if ! [ $1 ]; then
    echo "Required a repository name"; exit
fi

if ! [ -d $1 ]; then
    echo "Repository should be a directory and this script can't find $1"; exit
fi

cd $1

x=`git pull origin master | wc -l`

if ! [ $x -gt 1 ]; then
  echo "No update on the repository"; exit
fi

../hugo/hugo

if ! [ -e ".infrastructure/variables" ]; then
    echo "Missing 'variable' file in $1/.infrastructure"; exit
fi

source .infrastructure/variables
$command ## todo is the hugo + rsync
