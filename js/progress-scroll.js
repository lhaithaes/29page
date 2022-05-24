(function($){
window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

$(document).ready(function(){
	var my_posts = $("[rel=tooltip]");

	var size = $(window).width();
	for(i=0;i<my_posts.length;i++){
		the_post = $(my_posts[i]);

		if(the_post.hasClass('invert') && size >=767 ){
			the_post.tooltip({ placement: 'left', container:'body'});
			the_post.css("cursor","pointer");
		}else{
			the_post.tooltip({ placement: 'right', container:'body'});
			the_post.css("cursor","pointer");
		}
	}
});

$(document).ready(function() {
  $('.vid-tab').on('click', function(e) {
    e.preventDefault();
    $('html:not(:animated), body:not(:animated)').animate({
      scrollTop: $('.tab-pane').offset().top - 100
    }, 1000);
  });

  if ($(window).width() > 767) {
    $('.latest-vid').on('click', function(x){
      $('html:not(:animated), body:not(:animated)').animate({
        scrollTop: $('.iceberg-footer-banner').offset().top
      }, 1000);
      x.preventDefault();
    });
  }

  if ($(window).width() < 768) {
    $('.latest-vid').on('click', function(x){
      $('html:not(:animated), body:not(:animated)').animate({
        scrollTop: $('.iceberg-footer-banner').offset().top
      }, 1000);
      x.preventDefault();
    });
  }
});

})(jQuery);
