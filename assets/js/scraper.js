let name = "leenders-smits-hc"

$(document).ready(function() {
  $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent("https://www.independer.nl/zorgverzekering/vergoedingen/oefentherapeut/") + name + '&callback=?', function(data) {
    let content = data.contents
    let parsed = content.match(/<table id="tableVerzekeraars" class="vergelijkTable">[\s|\S]*?<\/table>/g)[0];
    $('#table').replaceWith(parsed);
    $('.vergelijkTable').addClass('bordered')
    $('.checkmarkTrue').addClass('material-icons').removeClass('checkmarkTrue').append('check_box');
    $('.checkmarkDash').addClass('material-icons').removeClass('checkmarkDash').append('check_box_outline_blank');

    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("table tr").each(function(index) {
        if (index !== 0) {
          $row = $(this);
          var id = $row.find("td:first").text().toLowerCase();
          if (id.indexOf(value) !== 0) {
            $row.hide();
          } else {
            $row.show();
          }
        }
      });
    });
  });
});
