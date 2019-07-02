$(document).ready(function() {

    var mainRandom = "";

    var crystalRandom = [1,2,3,4,5,6,7,8,9,10,11,12];

    var crystalValue = "";

    var currentCrystalValue = "";

    var wins = "";

    var losses = "";

    var score = "";

    
    $("#random-number").ready(function(){

        mainRandom =Math.floor(Math.random(Math.min() * (Math.max())) * 100);

        $("#random-number").text(mainRandom);
        //WORKING
    })

    $("#crystal1").on("click", function(){

        crystalRandom = Math.floor(Math.random(Math.min() * (Math.max()))  * 12);

        //MIGHT HAVE TO DISSECT TO MAKE RANDOM # THAT STAYS THE SAME EACH ROUND FOR EACH CRYSTAL
        crystalRandom++;
        updateScore();//TRIGGER EVENT TO UPDATE SCORE??
        console.log(crystalRandom);
    })
    
    $("#crystal2").on("click", function(){

        for (var i = 0; i < crystalRandom.length; i++);
        crystalRandom[i];
        crystalRandom++;
        // crystalRandom =Math.floor(Math.random(Math.min(1) * (Math.max(12))) * 10);
        // //MIGHT HAVE TO DISSECT TO MAKE RANDOM # THAT STAYS THE SAME EACH ROUND 
        console.log(i);
    })

    $("#crystal3").on("click", function(){ //THIS FUNCTION UPDATES SINGLE NUMBER TO TOTAL BUT ONLY ALLOWS ONE CLICK PER ROUND*

        for(var i = 0; i < crystalRandom.length; i++){
            crystalRandom = Math.floor(Math.random() * (crystalRandom.length + 1));
            if( crystalRandom < 12 || crystalRandom > 1 ){
             crystalRandom[i];   
            }
            crystalRandom++;
            updateScore();
        //MIGHT HAVE TO DISSECT TO MAKE RANDOM # THAT STAYS THE SAME EACH ROUND 
        console.log(crystalRandom);
        checkWin();
    }
})

    $("#crystal4").on("click", function(){
        for(var i = 0; i < crystalRandom.length; i++){
           do{
               crystalValue = Math.floor(Math.random() * crystalRandom.length);
           }while (updateScore());

           document.getElementById("score").innerText = crystalRandom--;

        }
        checkWin();
    })

    function crystalValue(){
        for( var i = 0; i < currentCrystalValue.length; i++) {
            if(currentCrystalValue[i] === crystalValue) {
                updateScore();
                checkWin();
            }
        }
    }
    
    function updateScore(){

            document.getElementById("score").innerText = crystalRandom--;
            checkWin();
        }

    function checkWin(){
        if (score === mainRandom){
            document.getElementById("wins").innerText = win++;
            reset();
        } else if(score > mainRandom){
            document.getElementById("losses").innerText = losses++;
            reset();
        }else{
            updateScore;
        }
    }

    function reset(){

        mainRandom = "";
        crystalValue = "";
        wins = "";
        losses = "";
        score = "";

    }

})    