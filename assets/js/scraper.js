let name = "leenders-smits-hc"

$(document).ready(function() {
  $.getJSON('https://allorigins.me/get?url=' + encodeURIComponent("https://www.zorgwijzer.nl/vergoeding/fysiotherapie"), function(data) {
    let content = data.contents
    var el = $( '<div></div>' );
    el.html(content);
    $('#table').replaceWith($('.verzekeraars', el));
    $('.verzekeraars').children().attr('id', 'item');
  
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase().replace(/ /g, '-');
      if (!value){
        $('.verzekeraars').children().show();
      } else {
        $('.verzekeraars').children().not('[data-name*="'+ value +'"]').hide();
      }
    });
  });
});
