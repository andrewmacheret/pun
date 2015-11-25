$(function() {

  function getSelectionText() {
    var text = '';
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != 'Control') {
      text = document.selection.createRange().text;
    }
    return text;
  }

  function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }

  $('#pun').click(function() {
    var phrase = trim(getSelectionText());
    if (phrase !== '') {
      $('#phrase').val(phrase);
    }
  });

  var onError = function(jqXHR, textStatus, errorThrown) {
    alert('jqXHR: ' + jqXHR + ' textStatus: ' + textStatus + ' errorThrown: ' + errorThrown);
  };
  
  $('#pun-form').submit(function() {
    var pun = trim($('#pun').text());
    var phrase = trim($('#phrase').val());
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'http://rest.andrewmacheret.com',
      crossDomain: true,
      data: {
        pun: pun,
        phrase: phrase
      },
      success: function(data, textStatus, jqXHR) {
        loadPun();
      },
      error: onError
    });
    return false;
  });

  $('#skip').click(function() {
    loadPun();
  });

  var loadPun = function() {
    location.reload();
    /*
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: 'http://rest.andrewmacheret.com',
      crossDomain: true,
      success: function(data, textStatus, jqXHR) {
        $('#pun').text(data.pun);
        $('#phrase').val('');
      },
      error: onError
    });
    */
  };

  //loadPun();
});


