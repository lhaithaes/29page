(function($) {
  //Function to animate slider captions
  function doAnimations(elems) {
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function() {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }

  var $myCarousel = $("#carousel-fade"),
    $firstAnimatingElems = $myCarousel
    .find(".item:first")
    .find("[data-animation ^= 'animated']");

  $myCarousel.carousel();

  doAnimations($firstAnimatingElems);

  $myCarousel.on("slide.bs.carousel", function(e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });

var isOnDiv = false;
  document.querySelectorAll(".media-carousel-block").forEach(i => {
      i.addEventListener("mouseover", function(  ) {isOnDiv=true;});
  });

  document.querySelectorAll(".media-carousel-block").forEach(i =>{
    i.addEventListener("mouseout", function(  ) {isOnDiv=false;});
  });

  $('#carousel-fade').on('slid.bs.carousel', function (){
    reset();
    if(isOnDiv == true){
      setDisabled(stopBtn);
      removeDisabled(startBtn);
      clearInterval(timerInterval);
    } else {
      setDisabled(startBtn);
      removeDisabled(stopBtn);
      startTimer();
    }
  });

  function carouselNormalization() {
    var items = $('#carousel-fade .item'),
      heights = [],
      tallest;

    if (items.length) {
      function normalizeHeights() {
        items.each(function() {
          heights.push($(this).height());
        });
        tallest = Math.max.apply(null, heights);
        items.each(function() {
          $(this).css('min-height', tallest + 'px');
        });
      }
      normalizeHeights();

      $(window).on('resize orientationchange', function() {
        tallest = 0, heights.length = 0;
        items.each(function() {
          $(this).css('min-height', '0');
        });
        normalizeHeights();
      });
    }
  }

  function horizontalNormalization() {
    var items = $('.media-carousel .item, .media-carousel .mob-slide'),
      heights = [],
      tallest;

    if (items.length) {
      function horizontalHeights() {
        items.each(function() {
          heights.push($(this).height());
        });
        tallest = Math.max.apply(null, heights);
        items.each(function() {
          $(this).css('min-height', tallest + 'px');
        });
      }
      horizontalHeights();

      $(window).on('resize orientationchange', function() {
        if ($(window).width() > 991) {
          tallest = 0, heights.length = 0;
          items.each(function() {
            $(this).css('min-height', '0');
          });
          horizontalHeights();
        }
      });
    }
  }

  window.onload = function() {
    carouselNormalization();
    if ($(window).width() > 991) {
      horizontalNormalization();
    }
  };

  $(window).on('load resize', function() {
    var itemsToWrap = $('.tab-pane.active .mob-slide');
    var elementTowrap = "";
    if ($(window).width() < 767) {
      $('.media-tab.active .mob-carousel').addClass('carousel carousel-fade');
      $('.media-tab.active .inner').addClass('carousel-inner');
      $.each($(itemsToWrap), function(index) {
        if (index == 0) {
          $(this).addClass('item active');
        } else {
          $(this).addClass('item');
        }
      });
      $(".media-tab.active .mob-carousel .carousel-inner").append($(elementTowrap));
      $(".media-tab.active .mob-carousel").carousel("pause").removeData();
      $(".media-tab.active .mob-carousel").carousel({
        interval: 7000,
      });
    } else {
      $('.mob-carousel').removeClass('carousel carousel-fade');
      $('.mob-carousel').removeAttr("data-ride", "carousel");
      $('.inner').removeClass('carousel-inner');
      $.each($(itemsToWrap), function(index) {
        if (index == 0) {
          $(this).removeClass('item active');
        } else {
          $(this).removeClass('item active');
        }
      });
      $('.mob-carousel .carousel-inner').append($(elementTowrap));
    }
  });

  $(document).ready(function() {

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
      var itemsToWrap = $('.media-tab.active .mob-slide');
      var itemsToRemove = $('.mob-slide');
        $.each($(itemsToRemove), function(){
          if($(itemsToRemove).hasClass('item'||'item active')){
            $(this).removeClass('item');
            $(this).removeClass('active');
          }
        });
      $('.mob-carousel').removeAttr("data-ride", "carousel");
      $('.mob-carousel').carousel("pause").removeData();
      if ($(window).width() < 767 ) {
        $('.media-tab.active .mob-carousel').attr("data-ride", "carousel");
        $('.media-tab.active .mob-carousel').addClass('carousel carousel-fade');
        $('.media-tab.active .inner').addClass('carousel-inner');
        $.each($(itemsToWrap), function(index) {
          if (index == 0) {
            $(this).addClass('item active');
          } else {
            $(this).addClass('item');
          }
        });
        $(".media-tab.active .mob-carousel").carousel("pause").removeData();
        $(".media-tab.active .mob-carousel").carousel({
          interval: 7000,
        });    }
    });

    $('div[data-ride="carousel"]').each(function() {
      var $carousel = $(this);
      var id = this.id;
      var relatedIndicators = $('li[data-target="#' + id + '"]');
      $carousel.on('slid.bs.carousel', function(e) {
        var index = $carousel.find('.carousel-inner .item').index($carousel.find('.carousel-inner .active'));
        relatedIndicators.removeClass('active');
        relatedIndicators.filter('[data-slide-to="' + index + '"]').addClass('active');
      });
    });

    $('.carousel .vertical .item').each(function() {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i = 1; i < 3; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
      }
    });

    $('.carousel .horizontal .item').each(function() {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      for (var i = 1; i < 2; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
      }

    });

  });

})(jQuery);
