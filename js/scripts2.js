$(function(){
  $("#puzzleForm").submit(function(event){
    var vowels = ["a", "e", "i", "o", "u"];
    var sentence = $("input#userInput").val();
    console.log(sentence);

    var sentenceArray = sentence.split("");
    console.log(sentenceArray);

    for (var i = 0; i < sentenceArray.length; i++) {
      for (var vowel = 0; vowel < vowels.length; vowel++) {
        if (sentenceArray[i] === vowels[vowel]) {
          vowel = vowels.length;
          sentenceArray[i] = "-";
          console.log(sentenceArray);
        }
      }
    }

    var sentenceAdjust = sentenceArray.join("");
    console.log(sentenceAdjust);
    $("#result").append(sentenceAdjust);
    $("#puzzleForm").hide();

    event.preventDefault();
  });
});
