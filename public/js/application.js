$(document).ready(function() {
  $(".dropdown-button").dropdown({hover: false});

  // $('#view-all').click(function(event){
  //   event.preventDefault();
  //   var link = $(this).attr('href');
  //   $.ajax({
  //     url: link,
  //     method: 'get'
  //   }).done(function(serverResponse){
  //     $('main').append(serverResponse);
  //   });
  // });

  $('a.get-drone-info').on('click', function(event){
    event.preventDefault();
    var $card = $(this).closest('div.card');
    var url = $(this).attr('href');
    $.ajax({
      url: url,
      method: 'get'
    }).done(function(serverResponse) {
      $card.closest('.row').find('.additional-info').empty();
      $card.find('.additional-info').html(serverResponse);
    });
  });



});

function mapStrikes(strikes_json) {
  infoWindow = new google.maps.InfoWindow({
    minWidth : 300
  });
  var strikes = [];
  strikes_json.forEach(function(strike) {
    var strikePos = strike.strike_position;
    var marker = new google.maps.Marker({
      position: strikePos,
      map: map,
      icon: {
        path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW,
        fillColor: 'red',
        fillOpacity: 0.5,
        scale: 3,
        strokeColor: 'maroon',
        strokeWeight: 1
      },
      label: strike.bureau_id,
      date: strike.date,
      deaths: strike.deaths,
      location: strike.location,
      child_deaths: strike.child_deaths,
      country: strike.country
    });
    marker.addListener('click', function() {
      showStrikeInfo(marker);
    })
    strikes.push(marker);
  })
  return strikes;
}

function showStrikeInfo(marker) {
  var casualties;
  marker.deaths ? casualties=marker.deaths : casualties=0
  if(casualties == 1) {
    casualties += " death"
  }
  else {
    casualties += " deaths"
  }
  if(marker.child_deaths) {
    casualties += ` (${marker.child_deaths} children)`
  }
  var location;
  marker.location ? location=`${marker.location}, ${marker.country}` : location=marker.country
  var msg1 = `<p class='center-align'>${location} </h5>`
  var msg2 = `<p class='center-align'>Casualties: ${casualties} </h5>`
  infoWindow.setContent("<div class='info-window'>" + msg1 + msg2 + "</div>");
  infoWindow.open(map, marker)
}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.445, lng: 59.578},
    zoom: 4,
    styles: style 
  });
}

var style = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
