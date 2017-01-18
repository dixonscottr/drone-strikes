get '/dronestrikes' do
  @strikes = Dronestrike.all
  erb :'/dronestrikes/index'
end

get '/dronestrikes/:dronestrike_id' do
  @strike = Dronestrike.find_by(id: params[:dronestrike_id])
  puts "xhr: #{request.xhr?}"
  if request.xhr?
    erb :'/dronestrikes/_add_info', layout: false
  else
    erb :'/dronestrikes/show'
  end
end
