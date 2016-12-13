def lat_lon(strikes)
  strikes.map do |strike|
    {
      strike_position: {lat: strike.latitude.to_f, lng: strike.longitude.to_f},
      country: strike.country,
      province: strike.province,
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