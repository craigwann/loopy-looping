$(function(){
  $("#stress-survey").submit(function(event){
    event.preventDefault();

    function survey(a, b) {
      return a + b;
      };
      var warningSignTotal = [];
      var symptomSignTotal = [];
      var managementSignTotal = [];

      $("input:checkbox[name=warning-signs]:checked").each(function(){
        var warningSigns = $(this).val();
        console.log(warningSigns);
        warningSignTotal.push(warningSigns);
        console.log("warning sign total equals" + warningSignTotal);
    });
    $("input:checkbox[name=symptoms]:checked").each(function(){
      var symptomSigns = $(this).val();
      console.log(symptomSigns);
      symptomSignTotal.push(symptomSigns);
      console.log("symptom sign total equals" + symptomSignTotal);
  });
  $("input:checkbox[name=management]:checked").each(function(){
    var managementSigns = $(this).val();
    console.log(managementSigns);
    managementSignTotal.push(managementSigns);
    console.log("management sign total equals" + managementSignTotal);
});


});
});
