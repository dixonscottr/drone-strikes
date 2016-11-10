require 'open-uri'
require 'json'

url = 'http://api.dronestre.am/data'

html = open(url).read

json_string = JSON.parse(html)

# drone_strikes = []

json_string['strike'].each do |drone_strike|
  args={}
  args[:country] = drone_strike['country']
  args[:location] = drone_strike['location']
  args[:strike_date] = drone_strike['date']
  args[:narrative] = drone_strike['narrative']
  args[:province] = drone_strike['province']
  args[:total_deaths] = drone_strike['deaths']
  args[:civilian_deaths] = drone_strike['civilians']
  args[:child_deaths] = drone_strike['children']
  args[:injuries] = drone_strike['injuries']
  args[:twitter_id] = drone_strike['tweet_id']
  args[:bureau_id] = drone_strike['bureau_id']
  args[:bureau_summary] = drone_strike['bij_summary_short']
  args[:link] = drone_strike['bij_link']
  args[:target] = drone_strike['target']
  args[:latitude] = drone_strike['lat']
  args[:longitude] = drone_strike['lon']
  args[:names] = drone_strike['names'].join
  Dronestrike.create!(args)
end
