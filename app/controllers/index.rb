get '/' do
  redirect '/dronestrikes'
end

not_found do
  erb :'/404'
end

get '/map' do
  @strikes = Dronestrike.all
  erb :'/map'
end
