var luke = {
    hp: 500,
    attack: 10,
    counterAttack: 5,
    name: "assets/images/Luke.jpg"
};

var darthVader = {
    hp: 100,
    attack: 10,
    counterAttack: 5,
    name: "assets/images/Vader.png"
};

var stormTrooper = {
    hp: 100,
    attack: 10,
    counterAttack: 5,
    name: "assets/images/Stormtrooper.jpg"
}

var maceWindu = {
    hp: 100,
    attack: 10,
    counterAttack: 5,
    name: "assets/images/Macewindu.jpg"
}

var hanSolo = {
    hp: 100,
    attack: 10,
    counterAttack: 5,
    name: "assets/images/Hansolo.jpg"
}

var grievous = {
    hp: 100,
    attack: 10,
    counterAttack: 5,
    name: "assets/images/Grievous.jpg"
}

var isCharPicked = false;
var isOpponentPicked = false;

var downChar;
var userChar;
var enemyChar;

var wins = 0;


function picAdd(name) {
    var pic = $("<img>");
    pic.attr("src", name);
    pic.addClass("characters col-md-2");
    $("#game").append(pic);
}

picAdd(luke.name);
picAdd(darthVader.name);
// picAdd(stormTrooper.name);
picAdd(maceWindu.name);
// picAdd(hanSolo.name);
picAdd(grievous.name);



$(".characters").click(function () {
    if (isCharPicked === false) {

        var upChar = $("<img>");
        var imagePath = $(this).attr("src");
        upChar.attr("src", imagePath);
        upChar.addClass("col-md-2 player");
        $("#upper").append(upChar);
        isCharPicked = true;
        $(this).addClass("hide");

        if ($(this).attr("src") === luke.name) {
            userChar = luke;
        }
        if ($(this).attr("src") === darthVader.name) {
            userChar = darthVader;
        }
        if ($(this).attr("src") === stormTrooper.name) {
            userChar = stormTrooper;
        }
        if ($(this).attr("src") === maceWindu.name) {
            userChar = maceWindu;
        }
        if ($(this).attr("src") === hanSolo.name) {
            userChar = hanSolo;
        }
        if ($(this).attr("src") === grievous.name) {
            userChar = grievous;
        }
       $("#pickChar").remove();

    }
    //This happens when you pick your character. This part is for picking your opponent.
    else {
        isOpponentPicked = true;
        downChar = $("<img>");
        var imagePath = $(this).attr("src");
        downChar.attr("src", imagePath);
        downChar.addClass("col-md-2 computer");
        $("#lower").append(downChar);
        $(this).addClass("hide");

        if ($(this).attr("src") === luke.name) {
            enemyChar = luke;

        }
        if ($(this).attr("src") === darthVader.name) {
            enemyChar = darthVader;
        }
        if ($(this).attr("src") === stormTrooper.name) {
            enemyChar = stormTrooper;
        }
        if ($(this).attr("src") === maceWindu.name) {
            enemyChar = maceWindu;
        }
        if ($(this).attr("src") === hanSolo.name) {
            enemyChar = hanSolo;
        }
        if ($(this).attr("src") === grievous.name) {
            enemyChar = grievous;
        }

    }


    if (isCharPicked && isOpponentPicked) {
        $("#game").addClass("hide");
    }

});

$("#attack").click(function () {

    if (isCharPicked && isOpponentPicked) {

        userChar.hp = userChar.hp - enemyChar.counterAttack;
        enemyChar.hp = enemyChar.hp - userChar.attack;

        var messageLog = $("<div>");
        $("#message").html(messageLog);
        messageLog.attr("id", "log");
        messageLog.attr("class", "battleLog");
        messageLog.html("<p>You dealt " + userChar.attack + " and brought down your opponents HP to " + enemyChar.hp + "</p>" +
            "<p>Your opponent dealt " + enemyChar.counterAttack + " and brought your HP down to " + userChar.hp + "</p>");

        userChar.attack = userChar.attack + 5;

        if (enemyChar.hp <= 0) {
            $("#game").removeClass("hide");
            messageLog.removeClass("battleLog");
            messageLog.empty();
            isOpponentPicked = false;
            downChar.remove();
            enemyChar;
            wins++;
            
            
        }
        if(userChar.hp <= 0){
            alert("You lose");
        }
        
    }

    if(wins === 3){
        messageLog.attr("class", "battleLog");
        messageLog.html("<p>You win!</p>");
    }

});




