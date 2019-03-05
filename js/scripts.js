var initialScore=0;

function myFunction(){
  var x= Math.floor((Math.random()*6)+1);
  document.getElementById("rand1").innerHTML=x;

  var cumulativeScore= initialScore+=x
  document.getElementById('score1').innerHTML=cumulativeScore;

  if(x === 1){
    $("#b1").hide();
    $("#b2").show();
    alert("next player's turn");
  };
  
  if (cumulativeScore >=100 ){
    alert("WINNER !!!!")
    };

  // // $(document).ready(function(){
  //   $(".hold").click(function(){
  //     alert("")
  //   }
  // }

};


function myDigits(){
  var y= Math.floor((Math.random()*6)+1);
  document.getElementById("rand2").innerHTML=y;

  var cumulativeScore= initialScore+=y
  document.getElementById('score2').innerHTML=cumulativeScore;

  if (y === 1){
    $("#b1").show();
    $("#b2").hide();
    alert("next players turn")
  };
  if (cumulativeScore >=100 ){
    alert("WINNER !!!!")
    };


};



































































// var score=0
// $(document).ready(function(){
//   $("#press").click(function(){
//     var rolled= Math.floor((Math.random()*6)+1);
//     document.getElementById("rand1").innerHTML=rolled;
//     var totalScore = score+=rolled;
//     document.getElementById("score1").innerHTML=totalScore;
//     });
//   $("#told").click(function(){
//     var roll=Math.floor((Math.random()*6)+1);
//     document.getElementById("rand2").innerHTML=roll;
//     var totalScore= score2+=roll;
//     document.getElementById("score2").innerHTML=totalScore;
//
//   });
// });
