$(document).ready(function() {

    var mainRandom = "";

    var crystalRandom = "";

    var wins = "";

    var losses = "";

    var score = "";

    
    $("#random-number").ready(function(){

        mainRandom =Math.floor(Math.random(Math.min(19) * (Math.max(10))) * 100);

        $("#random-number").text(mainRandom);
        //WORKING
    })

    $(".crystal").on("click", function(){
 
        crystalRandom =Math.floor(Math.random(Math.min(1) * (Math.max(12)))  * 10);
        //MIGHT HAVE TO DISSECT TO MAKE RANDOM # THAT STAYS THE SAME EACH ROUND FOR EACH CRYSTAL
        

        updateScore();//TRIGGER EVENT TO UPDATE SCORE??
        console.log(crystalRandom);
    })
    
    // $("#crystal2").on("click", function(){

    //     crystalRandom =Math.floor(Math.random(Math.min(1) * (Math.max(12))) * 10);
    //     //MIGHT HAVE TO DISSECT TO MAKE RANDOM # THAT STAYS THE SAME EACH ROUND 
    //     console.log(crystalRandom);
    // })

    // $("#crystal3").on("click", function(){

    //     crystalRandom =Math.floor(Math.random(Math.min(1) * (Math.max(12))) * 10);
    //     //MIGHT HAVE TO DISSECT TO MAKE RANDOM # THAT STAYS THE SAME EACH ROUND 
    //     console.log(crystalRandom);
    // })
    // $("#crystal4").on("click", function(){

    //     crystalRandom =Math.floor(Math.random(Math.min(1) * (Math.max(12))) * 10);
    //     //MIGHT HAVE TO DISSECT TO MAKE RANDOM # THAT STAYS THE SAME EACH ROUND 
    //     console.log(crystalRandom);
    // })
    
    function updateScore(){

    document.getElementById("score").innerText = crystalRandom += score;
    // $("#score").trigger("click");
    
    }
})    