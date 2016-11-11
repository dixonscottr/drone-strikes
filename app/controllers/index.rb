get '/' do
  redirect '/dronestrikes'
end

not_found do
  erb :'/404'
end

get '/map' do
  erb :'/map'
end
