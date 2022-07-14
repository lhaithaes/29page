(function($) {
  $(document).ready(function() {

    function getUrlVars()
    {
      var option = [], tag;
      var tags = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < tags.length; i++)
      {
        tag = tags[i].split('=');
        option.push(tag[0]);
        option[tag[0]] = tag[1];
      }
      return option;
    }

    var vidString = getUrlVars()["v"];
    if(vidString == 'rv') {
      $('#box-set').tirgger('show.bs.tab', function(x){
        $('html:not(:animated), body:not(:animated)').animate({
          scrollTop: $('.recent-vid').offset().top - 100
        }, 1000);
    });
  }
  });
})(jQuery);
