
$(document).ready(function(){
 
$('#myForm').submit(function(event) {
  event.preventDefault();
  var $inputs = $('#myForm :input');
  var values = {};
  $inputs.each(function() {
    values[this.name] = $(this).val();
    values[this.ohr] = $(this).val();
    values[this.profile] = $(this).val();
    values[this.departmenet] = $(this).val();
   
    values[this.location] = $(this).val();
  });

  $('#displayArea').append("<tr><td>" + values.name + "</td><td>" + values.ohr + "</td><td>" + values.profile + "</td><td>" + values.departmenet + "</td><td>" + values.location + "</td></tr>");
  $("input[type=text], textarea").val("");
});
});