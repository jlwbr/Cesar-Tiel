var header = $('header');
var range = 200;

$(window).on('scroll', function () {

  var scrollTop = $(this).scrollTop(),
      height = header.outerHeight(),
      offset = height / 1.1,
      calc = 1 - (scrollTop - offset + range) / range;

  header.css({ 'opacity': calc });

  if (calc > '1') {
    header.css({ 'opacity': 1 });
  } else if ( calc < '0' ) {
    header.css({ 'opacity': 0 });
  }

});
 
/* $(function() {
  var i = 0;
  var img = window.getComputedStyle($('header')[0], ':before').getPropertyValue('background-image').split(",");
  var styleElem = document.head.appendChild(document.createElement("style"));
  // set `$.fx.interval` at `0`
  $.fx.interval = 0;
  (function cycleBgImage(elem, bgimg) {
// `elem`:`#slideshow`
// set, reset, delay to `1000` after background image reset
  styleElem.innerHTML = "header:before {background-image: "+ bgimg +";}";
  // fade in background image
    // set `delay` before fadeing out image
    // fade in background image        
    setTimeout( function() {
      // split background image string at comma , creating array
        if(i == img.length){ i = 0 }
        // concat first background image to `img` array,
        // remove first background image from `img` array
        bgimg = img[i]
        i += 1
      // recursively call `cycleBgImage`
      cycleBgImage(elem, bgimg);
    }, 4000);
  }($("header")));
}); */
