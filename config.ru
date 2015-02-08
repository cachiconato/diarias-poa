require 'rubygems'
require 'bundler'

Bundler.require
Dir["./app/model/*.rb"].each {|file| require file }

require './diarias_app'

run DiariasApp
