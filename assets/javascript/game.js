$(document).ready(function() {

    var mainRandom = "";

    var crystalRandom = Math.floor(Math.random() * 13);

    var currentCrystalValue = ""; //will be the variable that will add the new variable value to crystalRandom

    var wins = "";

    var losses = "";

    var score = "";

    //create variable storing math.floor(math.random), place it under each button click function, and set another variable += to the storing variables number. This will save the value for remainder of session. 

    
    $("#random-number").ready(function(){

        mainRandom =Math.floor(Math.random(Math.min() * (Math.max())) * 120);

        $("#random-number").text(mainRandom);
        //WORKING
    })

    $("#crystal1").on("click", function(){

        crystalRandom += currentCrystalValue;

        //MIGHT HAVE TO DISSECT TO MAKE RANDOM # THAT STAYS THE SAME EACH ROUND FOR EACH CRYSTAL
        crystalRandom++;
        updateScore();//TRIGGER EVENT TO UPDATE SCORE??
        console.log(crystalRandom);
    })
    
    $("#crystal2").on("click", function(){

       
        crystalRandom += currentCrystalValue;

        //MIGHT HAVE TO DISSECT TO MAKE RANDOM # THAT STAYS THE SAME EACH ROUND FOR EACH CRYSTAL
        crystalRandom++;
        updateScore();//TRIGGER EVENT TO UPDATE SCORE??
        console.log(crystalRandom);
    })

    $("#crystal3").on("click", function(){ //THIS FUNCTION UPDATES SINGLE NUMBER TO TOTAL BUT ONLY ALLOWS ONE CLICK PER ROUND*

       
        crystalRandom += currentCrystalValue;

        //MIGHT HAVE TO DISSECT TO MAKE RANDOM # THAT STAYS THE SAME EACH ROUND FOR EACH CRYSTAL
        crystalRandom++;
        updateScore();//TRIGGER EVENT TO UPDATE SCORE??
        console.log(crystalRandom);
    
    })

    $("#crystal4").on("click", function(){
       
        crystalRandom += currentCrystalValue;

        //MIGHT HAVE TO DISSECT TO MAKE RANDOM # THAT STAYS THE SAME EACH ROUND FOR EACH CRYSTAL
        crystalRandom++;
        updateScore();//TRIGGER EVENT TO UPDATE SCORE??
        console.log(crystalRandom);
    })

    // function crystalValue(){
    //     for( var i = 0; i < currentCrystalValue.length; i++) {
    //         if(currentCrystalValue[i] === crystalValue) {
    //             updateScore();
    //             checkWin();
    //         }
    //     }
    // }
    
    function updateScore(){
        if(score > mainRandom) {
            document.getElementById("losses").innerText = losses++;
            reset();
        }
        if(score === mainRandom){
            document.getElementById("wins").innerText = wins++;
            reset();            
        } else if (score < mainRandom){
        document.getElementById("score").innerText = crystalRandom++;
        }

    // function checkWin(){
    //     if (score === mainRandom){
    //         reset();
    //     } else if(score > mainRandom){
    //         document.getElementById("losses").innerText = losses++;
    //         reset();
    //     }else{
    //         updateScore();
    //     }
    // }

    function reset(){

        mainRandom = "";
        crystalRandom = "";
        currentCrystalValue = "";
        wins = "";
        losses = "";
        score = "";

    }
    }
    
})