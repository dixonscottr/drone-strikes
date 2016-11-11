$(document).ready(function() {
  $(".dropdown-button").dropdown({hover: false});

  $('#view-all').click(function(event){
    event.preventDefault();
    var link = $(this).attr('href');
    $.ajax({
      url: link,
      method: 'get'
    }).done(function(serverResponse){
      $('main').append(serverResponse);
    });

  });



});
