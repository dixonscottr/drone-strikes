get '/dronestrikes' do
  @strikes = Dronestrike.all
  if request.xhr?
    erb :'/strikes/_strikedetails', layout: false
  else
    erb :'/strikes/index'
  end
end
