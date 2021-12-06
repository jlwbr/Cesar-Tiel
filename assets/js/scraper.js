// $(document).ready(function() {
//   $.ajax({
//     url: 'https://cors.seriumtech.workers.dev/?' + "https://www.zorgwijzer.nl/vergoeding/fysiotherapie",
//     dataType: 'text',
//     success: function(data) {
//       var el = $("<div>").html(data)
//       $('#table').replaceWith($('.verzekeraars', el));
//       $('.verzekeraars').children().attr('id', 'item');
//       $('#item.cell.box').remove();
//       $('form#item.feedback').remove();
//       $(".verzekeraars h3").each(function( index ) {
//         $(this).parent().remove();
//       });
//       $(".verzekeraars tr").each(function( index ) {
//         $(this).find('td,th').last().remove();
//       });
//     }
//   });
  
//     $("#search").on("keyup", function() {
//       var value = $(this).val().toLowerCase().replace(/ /g, '-');
//       if (!value){
//         $('.verzekeraars').children().show();
//       } else {
//         $('.verzekeraars').children().not('[data-name*="'+ value +'"]').hide();
//       }
//     });
//   });
