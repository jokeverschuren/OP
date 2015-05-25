#!/usr/bin/env bash

if
  [[ -s "/home/jokeverschuren/.rvm/gems/ruby-2.2.0/environment" ]]
then
  source "/home/jokeverschuren/.rvm/gems/ruby-2.2.0/environment"
  exec ruby summarize.rb "$@"
else
  echo "ERROR: Missing RVM environment file: '/home/jokeverschuren/.rvm/gems/ruby-2.2.0/environment'" >&2
  exit 1
fi
