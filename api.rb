require 'open-uri'
require 'json'

url = 'http://api.dronestre.am/data'

json_string = open(url).read

drone_strikes = JSON.parse(json_string, object_class: DroneStrike)
