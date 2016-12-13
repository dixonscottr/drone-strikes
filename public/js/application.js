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
  var deaths = marker.deaths;
  var country = marker.country;
  var msg1 = "<p class='center-align'>Country: " + country + '</h5>'
  var msg2 = "<p class='center-align'>Deaths: " + deaths + "</h5>"
  infoWindow.setContent("<div class='info-window'>" + msg1 + msg2 + "</div>");
  infoWindow.open(map, marker)
}