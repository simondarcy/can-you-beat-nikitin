//Defaults
var score = 0;
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

function endGame(){
    //End game function
    $('#end').show();
    $('#score').hide();
    $('#sound-boo')[0].play();
    $('#rte').hide();
    $("#game").unbind("click");
}

function startGame(){
    //The actual "game" script;
    $("#game").on("click", function(){
        punchSound = $('#sound-punch')[0];
        punchSound.currentTime = 0;
        punchSound.play();
        //Increment and update score
        score++;
        $("#score").text(score);

        //Update Nikitin based on current score
        if (score == 10){
            $('#nikitin').addClass("bloody");
        }
        else if (score == 18){
            $('#nikitin').addClass("very-bloody");
        }
        else if (score == 28){
            endGame()
        }

        //Do punch
        $('#conlan').addClass("punch");
        $('#nikitin').addClass("hit");

        //Return
        setTimeout(function(){
            $('#conlan').removeClass("punch");
            $('#nikitin').removeClass("hit");
            $('#score').removeClass('fadein');
        }, 100);

    });//End main game script
}

//On page load
$(document).ready(function () {

    //Fix the height of the screen, for mobile devices
    $('.fix-height').css({"height":h});

    //Show main intro screen
    $('#intro').on("click", function(){
        $(this).hide();
        $('#sound-bell')[0].play();
        $('#rte').show();
        startGame()
    });

    //Show finished screen
    $('#replay').on("click", function(){
       //reset the game
       score=0;
       $('#score').text(score).show();
       $('#end').hide();
       $('#nikitin').removeClass('bloody very-bloody');
       $('#rte').show();
        startGame();
    });
	
	//Show social screen
    $('#share').on("click", function(){
		$('#social').show();
		$('#end').hide();
    });



});//End dom ready