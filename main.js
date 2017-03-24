$(function() {

  function getQuote() {
    $.ajax({
      url: "http://quotzzy.co/api/quote",
      success: function(data) {
        $('#quote').html("\"" + data.text + "\"");
        $('#author').attr('href', data.author.wiki).html(data.author.name);
      }
     }); 
  }

  $('#new-quote').on('click', function() {
    getQuote();
  });

  getQuote();

});