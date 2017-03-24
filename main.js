$(function() {

  function getQuote() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function(data) {
        console.log(data);
        $('#quote').html("\"" + data.quoteText + "\"");
        $('#author').html(data.quoteAuthor);
      }
     }); 
  }

  $('#new-quote').on('click', function() {
    getQuote();
  });

  getQuote();

});