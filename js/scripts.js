var color;
var food;
var animal;

var array =[];

$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    color = $("input#color").val();
    food = $("input#food").val();
    animal = $("input#animal").val();
    array.push(color);
    array.push(food);
    array.push(animal);
    $(".colorInput").text(array[0]);
    $(".foodInput").text(array[1]);
    $(".animalInput").text(array[2]);
    $(".result").show();


  });
});
