$(document).ready(function() {
    
    var mainRandom = "";

    var crystalRandom = Math.floor(Math.random() * 13);

    var currentCrystalValue = ""; //will be the variable that will add the new variable value to crystalRandom

    var wins = "";

    var losses = "";

    var score = 0;

    //create variable storing math.floor(math.random), place it under each button click function, and set another variable += to the storing variables number. This will save the value for remainder of session. 

    
    $("#random-number").ready(function(){

        mainRandom =Math.floor(Math.random() * 100 + 21);

        $("#random-number").text(mainRandom);
        //WORKING
    })

    $("#crystal1").on("click", function(){

        crystalRandom += currentCrystalValue++;

        // crystalRandom;

    
        updateScore();//TRIGGER EVENT TO UPDATE SCORE??

    })
    
    $("#crystal2").on("click", function(){

       
        crystalRandom += currentCrystalValue++;

        // crystalRandom;

        updateScore();//TRIGGER EVENT TO UPDATE SCORE??

    })

    $("#crystal3").on("click", function(){ //THIS FUNCTION UPDATES SINGLE NUMBER TO TOTAL BUT ONLY ALLOWS ONE CLICK PER ROUND*

       
        crystalRandom += currentCrystalValue++;

        // crystalRandom;

        updateScore();//TRIGGER EVENT TO UPDATE SCORE??

    })

    $("#crystal4").on("click", function(){

        crystalRandom += currentCrystalValue++;

        // crystalRandom;

        updateScore();//TRIGGER EVENT TO UPDATE SCORE??

    })
    
    function updateScore(){
        score += currentCrystalValue;
        if(score == mainRandom){
            document.getElementById("wins").innerText = wins + 1;
            document.getElementsByClassName("message").innerHTML = "You Win!"
            console.log(crystalRandom);

            reset();            
        
        }else if(score > mainRandom) {
            document.getElementById("losses").innerText = losses + 1;
            document.getElementsByClassName("message").innerHTML = "You Lose!"
            console.log(crystalRandom);

            reset();            
        } else {
        document.getElementById("score").innerText = crystalRandom++;

        console.log(crystalRandom);
        }
    }

    function reset(){

        mainRandom = "";
        crystalRandom = "";
        currentCrystalValue = "";
        wins = "";
        losses = "";
        score = "";

    }
    
    
})