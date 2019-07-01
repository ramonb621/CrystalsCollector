$(document).ready(function() {

    var mainRandom = "";

    var crystalRandom = "";

    var wins = "";

    var losses = "";

    $(".crystal").on("click", function(){
        crystalRandom = Math.random(Math.min(19) * (Math.max(10))) * 100;
            
        console.log(crystalRandom);
    });
});