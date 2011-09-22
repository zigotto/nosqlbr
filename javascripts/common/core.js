  // External Links
  $("a[rel=externo]").live('click', function() {
    window.open(this.href);
    return false;
  });


  // Color Box
  $(document).ready(function(){
    $("a[rel='open-more']").colorbox();
    $(".open").colorbox({width:"50%", inline:true, href: function(){
      var url = $(this).attr('rel');
      return url;
    }});
  });

  // Loader
  $(window).load(function(){
  $('#facebook_like')
    .html('<fb:like href="https://www.facebook.com/pages/nosqlbr/249869735053907" send="false" layout="button_count" width="80" show_faces="false" font=""></fb:like>');
  $('#google_plus')
    .html('<g:plusone size="medium" href="http://www.nosqlbr.com"></g:plusone>');
});
  
