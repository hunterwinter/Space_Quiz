$(document).ready(function(){
//var minute = prompt('enter your desired minute');

var results;

if (minute > 60 ) {
  $('.degrees').append('You entered too many minutes dummy');
  $('.hour').hide();
  $('.minute').hide();
    $('.second').hide();
} else {
  console.log('Hour and Minute hand is ' +  minute * 6 + ' degrees apart');
  $('.minute').css('transform','rotate('+ minute*6 +'deg)')
  
	}
}
