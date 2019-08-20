// general js for the project that wouldn't be a reuseable component
/*
$('.js-image-attribution').each(function() {
  var $this = $(this);
  var contents = $this.html();
  $this.css('cursor', 'pointer');
  $this.html("<img style=\"width: 15px; height: 15px;\" src=\"_assets/img/icons/info.svg\" alt=\"picture information\">");
  $this.on('click',function(){
    $this.html(contents);
    $this.css('cursor', 'auto');
  });
});
*/


/*********** Blur and change text colour of hero image  *************/


$(window).on('scroll', function () {


var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    var pixs = $(document).scrollTop(),
    pixs = pixs / 60,
    offset = 600,
    //range = 100,
    calc = 0.8 - (pixs )/10;
    //console.log(calc+' '+pixs);

	if(isFirefox === false){
    $(".bv-banner-out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)","opacity": calc });
  } else { $(".bv-banner-out").css({"opacity": calc }); }
});
