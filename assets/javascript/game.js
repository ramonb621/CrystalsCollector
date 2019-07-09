$(document).ready(function() {
    
    var wins = 0;

    var losses = 0;

    var score = 0;

    var mainRandom = randomNum(19,120);
    $("#random-number").html(mainRandom);

    var crystal1= randomNum(1, 12);
    var crystal2= randomNum(1, 12);
    var crystal3= randomNum(1, 12);
    var crystal4= randomNum(1, 12);

   
    //*******GAME CONTROLS*******//
    $("#crystal1").on("click", function(){
        score += crystal1;
   
        updateScore();

    })
    
    $("#crystal2").on("click", function(){
        score += crystal2;

        updateScore();

    })

    $("#crystal3").on("click", function(){
        score += crystal3;

        updateScore();

    })

    $("#crystal4").on("click", function(){
        score += crystal4;

        updateScore();

    })
    
    //*****GAME FUNCTIONS*****/
    function randomNum(min,max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max-min +1)) + min;

	}

    function updateScore(){

        if(score === mainRandom){
            document.getElementById("wins").innerText = wins +1;
            $("#message").html("You Win!");
            reset();
            // console.log(score);


        
        }else if(score !== mainRandom && score > mainRandom) {
            document.getElementById("losses").innerText = losses +1;
            $("#message").html("You Lose!");
            reset();
            // console.log(score);



        } else {
        $("#score").html(score);
        $("#message").html("");

        // console.log(score);
        
        }
    }

    function reset(){
        mainRandom = randomNum(19,120); //has to be placed before $("random-number") so html value will populate before new session.
        $("#random-number").html(mainRandom);
        score = 0;
    } 

})