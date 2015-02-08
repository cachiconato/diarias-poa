require 'sinatra/base'
require 'sinatra/json'
require 'json'

class DiariasApp < Sinatra::Base
  helpers Sinatra::JSON

  configure do
    set :views, Proc.new { File.join(root, "public/views") }
  end

  get '/' do
    erb :index
  end

end
