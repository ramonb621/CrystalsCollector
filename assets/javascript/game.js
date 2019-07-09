$(document).ready(function() {
    
    // var mainRandom = Math.floor((Math.random() * 100) + 21);

    // var crystalRandom = Math.floor((Math.random() * 12) +1);

    var currentCrystalValue = crystal1; crystal2; crystal3; crystal4; //will be the variable that will add the new variable value to crystalRandom

    var wins = 0;

    var losses = 0;

    var score = 0;

    //create variable storing math.floor(math.random), place it under each button click function, and set another variable += to the storing variables number. This will save the value for remainder of session. 
	function randomNum(min,max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max-min +1)) + min;

	}

	var mainRandom = randomNum(19,120);
	$("#random-number").html(mainRandom);

	var crystal1= randomNum(1, 12);
	var crystal2= randomNum(1, 12);
	var crystal3= randomNum(1, 12);
	var crystal4= randomNum(1, 12);


    
    // $("#random-number").ready(function(){

    //     $("#random-number").text(mainRandom);

    //     //WORKING
    // })

    $("#crystal1").on("click", function(){
        score += crystal1;
        // crystalRandom;

        // currentCrystalValue;
        
        updateScore();//TRIGGER EVENT TO UPDATE SCORE??

    })
    
    $("#crystal2").on("click", function(){
        score += crystal2;

       
        // crystalRandom;

        // currentCrystalValue;

        updateScore();//TRIGGER EVENT TO UPDATE SCORE??

    })

    $("#crystal3").on("click", function(){ //THIS FUNCTION UPDATES SINGLE NUMBER TO TOTAL BUT ONLY ALLOWS ONE CLICK PER ROUND*
        score += crystal3;

       
        // crystalRandom;

        // currentCrystalValue;

        updateScore();//TRIGGER EVENT TO UPDATE SCORE??

    })

    $("#crystal4").on("click", function(){
        score += crystal4;


        // crystalRandom;

        // currentCrystalValue;

        updateScore();//TRIGGER EVENT TO UPDATE SCORE?

    })
    
    function updateScore(){
        // score += currentCrystalValue;
        if(score === mainRandom){
            document.getElementById("wins").innerText = wins +1;
            $("#message").html("You Win!");
            console.log(score);

            reset();

        
        }else if(score !== mainRandom && score > mainRandom) {
            document.getElementById("losses").innerText = losses +1;
            $("#message").html("You Lose!");
            console.log(score);


            reset();

        } else {
        $("#score").html(score);
        
        console.log(score);
        
        }
    }

    function reset(){
        $("#random-number").html(mainRandom);
        mainRandom = randomNum(19,120);
        score = 0;
        wins++;
        losses++;
    } 

})