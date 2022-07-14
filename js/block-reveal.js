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
      $(".tab-pane").removeClass("active");
      $('a[href="#box-set"]').addClass("active");
    }
  });
})(jQuery);
