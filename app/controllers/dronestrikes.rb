get '/dronestrikes' do
  @strikes = Dronestrike.all
  erb :'/dronestrikes/index'
end
