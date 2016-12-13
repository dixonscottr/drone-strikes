def lat_lon(strikes)
  strikes.map do |strike|
    strike.latitude ? lat=strike.latitude.to_f : lat=nil
    strike.longitude ? lng=strike.longitude.to_f : lng=nil
    {
      strike_position: {lat: lat, lng: lng},
      country: strike.country,
      location: strike.location,
      location: strike.location,
      narrative: strike.narrative,
      target: strike.target,
      deaths: strike.total_deaths,
      child_deaths: strike.child_deaths,
      date: strike.strike_date,
      id: strike.bureau_id
    }
  end.to_json
end