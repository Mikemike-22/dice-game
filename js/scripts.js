
var score1=0
$(document).ready(function(){
  $("#press").click(function(){
    var rolled= Math.floor((Math.random()*6)+1);
    document.getElementById("rand1").innerHTML=rolled;
    var totalScore = score1+=rolled;
    document.getElementById("score1").innerHTML=totalScore;
  });
  $("#told").click(function(){
    var roll=Math.floor((Math.random()*6)+1);
    document.getElementById("rand2").innerHTML=roll;
    var totalScore= score1+=roll;
    document.getElementById("score2").innerHTML=totalScore
  });
});
