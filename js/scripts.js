var color;
var food;
var animal;

var arrays =[];

$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    color = $("input#color").val();
    food = $("input#food").val();
    animal = $("input#animal").val();
    arrays.push(color);
    arrays.push(food);
    arrays.push(animal);
    arrays.forEach(function(array){
      $(".list").append("<li>"+array+"</li>");
    });
    $(".result").show();
  });
});
