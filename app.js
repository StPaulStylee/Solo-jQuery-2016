var red ={
  color: 'red',
  total: 0
};
var yellow = {
  color: 'yellow',
  total: 0
};
var green = {
  color: 'green',
  total: 0
};
var blue = {
  color: 'blue',
  total: 0
};

$(document).ready(function(){
  $('.color-button').on('click', function(){
      var $redbox = $('<div></div>');
      $redbox.addClass('red color-cube');
      $('.container').append($redbox);
      red.total += 1;
      $('body').find('#red').text('');
      $('body').find('#red').text('Total red: ' + red.total);
  })
  $('.color-button').on('click', function(){
      var $yellowbox = $('<div></div>');
      $yellowbox.addClass('yellow color-cube');
      $('.container').append($redbox);
      yellow.total += 1;
      $('body').find('#yellow').text('');
      $('body').find('#yellow').text('Total yellow: ' + yellow.total);
  })
  $('.color-button').on('click', function(){
      var $greenbox = $('<div></div>');
      $greenbox.addClass('green color-cube');
      $('.container').append($redbox);
      green.total += 1;
      $('body').find('#green').text('');
      $('body').find('#green').text('Total green: ' + green.total);
  })
  $('.color-button').on('click', function(){
      var $redbox = $('<div></div>');
      $bluebox.addClass('blue color-cube');
      $('.container').append($bluebox);
      blue.total += 1;
      $('body').find('#blue').text('');
      $('body').find('#blue').text('Total blue: ' + blue.total);
 })
});
