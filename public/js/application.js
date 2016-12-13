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