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
