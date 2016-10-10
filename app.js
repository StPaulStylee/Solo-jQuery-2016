//var $colorClass = (#)
$(document).ready(function(){

  registerEvents();
});

function registerEvents() {
  $('button').on('click', handleClick);
}
var red = 0;
var green = 0;
var yellow = 0;
var blue = 0;
function handleClick() {
  var buttonClick = $(this).data('color');
  console.log(buttonClick);
  var $boxCreate = $('<div></div>');
  //Try passing the data to a variable and passing the variable into addClass
  $boxCreate.addClass('color-cube').addClass(buttonClick)  ;
  $('.container').append($boxCreate);
  switch (buttonClick) {
    case 'red':
      red++;
      $('#red').empty().text('Total red: ' + red);
      break;
    case 'green':
      green++;
      $('#green').empty().text('Total green: ' + green);
      break;
    case 'yellow':
      yellow++;
      $('#yellow').empty().text('Total yellow: ' + yellow);
      break;
    case 'blue':
      blue++;
      $('#blue').empty().text('Total blue: ' + blue);
      break;
  }

}
