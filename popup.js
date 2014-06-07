$.getJSON("https://savedsites.herokuapp.com/bookmarks.json", function(data){
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + "<a target='_blank' href='" + val.url + "'>" + val.title + "</a>" + "</li>" );
  });

  $( "<ul/>", {
    "class": "request",
    html: items.join( "" )
  }).appendTo("body");
});