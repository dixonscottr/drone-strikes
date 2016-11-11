get '/strikes' do
  @strikes = Dronestrike.all
  erb :'/strikes/index'
end
