$(function(){
  $("#puzzleForm").submit(function(event){
    var vowels = ["a", "e", "i", "o", "u"];
    var sentence = $("input#userInput").val();
    console.log(sentence);

    var sentenceArray = sentence.split("");
    console.log(sentenceArray);

    for (var i = 0; i < sentenceArray.length; i++) {
      for (var i = 0; i < vowels.length; i++) {
        if (sentenceArray.toString() === vowels.toString()) {
          console.log(true);
        };
      };

      console.log(sentenceArray);

    };

    // var puzzleSentence = sentenceArray.splice(vowels, 1, "-");
    // console.log(puzzleSentence);

    // var sentenceAdjust = sentenceArray.join("");
    // console.log(sentenceAdjust);

    event.preventDefault();
  });
});
