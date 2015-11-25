$(function() {
  var onError = function(jqXHR, textStatus, errorThrown) {
    alert('jqXHR: ' + jqXHR + ' textStatus: ' + textStatus + ' errorThrown: ' + errorThrown);
  };
  
  var loadPun = function() {
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: 'http://rest.andrewmacheret.com',
      crossDomain: true,
      success: function(data, textStatus, jqXHR) {
        $('#question').text(data.question);
        $('#answer').text(data.answer);
        $('#correct').hide();
        $('#wrong').hide();
        $('#next').hide();
        $('#guess').val('');
      },
      error: onError
    });
  };
  loadPun();
  
  $('#quiz-form').submit(function() {
    var guess = $('#guess').val().toLowerCase().replace(/[^a-z0-9]/g, '');
    var answer = $('#answer').text().toLowerCase().replace(/[^a-z0-9]/g, '');
    if (guess === answer) {
      $('#correct').show();
      $('#wrong').hide();
      $('#score').text(parseInt($('#score').text(), 10) + 1);
    } else {
      $('#correct').hide();
      $('#wrong').show();
    }
    $('#next').show();
    return false;
  });
  
  $('#next').click(function() {
    loadPun();
  });
});


