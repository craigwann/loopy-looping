$(function(){
  $("#calculateForm").submit(function(event){
    var total = 0;
    var mulitiplicationVar = parseInt($("input#multiplyBy").val());
    var counting = parseInt($("input#countTo").val());

    if (isNaN(mulitiplicationVar) || isNaN(counting)) {
      alert("Enter a value!");
    }

    else if (mulitiplicationVar <= 0 || counting <= 0) {
      alert("Enter a positive number!");

    }
    else if (counting < mulitiplicationVar) {
      alert("Multiplier number needs to be smaller than count to number");
    }

    for (var index = mulitiplicationVar; index < counting ; index += mulitiplicationVar) {
      $("#result").append(index + "<br>");
    }

    event.preventDefault();
  });

});
