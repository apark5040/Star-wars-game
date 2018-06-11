var luke = {
    name : "Luke Skywalker",
    hp: 150,
    attack: 5,
    counterAttack: 8,
    image: "assets/images/Luke.jpg"
};

var darthVader = {
    name : "Darth Vader",
    hp: 200,
    attack: 7,
    counterAttack: 10,
    image: "assets/images/Vader.png"
};

var stormTrooper = {
    name : "Stormtrooper",
    hp: 100,
    attack: 4,
    counterAttack: 7,
    image: "assets/images/Stormtrooper.jpg"
}

var maceWindu = {
    name : "Mace Windu",
    hp: 150,
    attack: 6,
    counterAttack: 8,
    image: "assets/images/Macewindu.jpg"
}

var hanSolo = {
    name :"Han Solo",
    hp: 100,
    attack: 5,
    counterAttack: 7,
    image: "assets/images/Hansolo.jpg"
}

var grievous = {
    name: "General Grievous",
    hp: 200,
    attack: 5,
    counterAttack: 8,
    image: "assets/images/Grievous.jpg"
}

var isCharPicked = false;
var isOpponentPicked = false;

var downChar;
var userChar;
var enemyChar;

var battleAttack;

var statBox;
var statBox2;

var wins = 0;


function picAdd(name) {
    var pic = $("<img>");
    pic.attr("src", name);
    pic.addClass("characters col-md-2");
    $("#game").append(pic);
}

picAdd(luke.image);
picAdd(darthVader.image);
// picAdd(stormTrooper.image);
picAdd(maceWindu.image);
// picAdd(hanSolo.image);
picAdd(grievous.image);



$(".characters").click(function () {
    if (isCharPicked === false) {

        var upChar = $("<img>");
        var imagePath = $(this).attr("src");
        upChar.attr("src", imagePath);
        upChar.addClass("col-md-2 player");
        $("#upper").append(upChar);
        isCharPicked = true;
        $(this).addClass("hide");

        statBox = $("<div>");
        statBox.addClass("col-md-4 playerStat");
        $("#upper").append(statBox);


        if ($(this).attr("src") === luke.image) {
            userChar = luke;
        }
        if ($(this).attr("src") === darthVader.image) {
            userChar = darthVader;
        }
        if ($(this).attr("src") === stormTrooper.image) {
            userChar = stormTrooper;
        }
        if ($(this).attr("src") === maceWindu.image) {
            userChar = maceWindu;
        }
        if ($(this).attr("src") === hanSolo.image) {
            userChar = hanSolo;
        }
        if ($(this).attr("src") === grievous.image) {
            userChar = grievous;
        }

        battleAttack = userChar.attack;

        statBox.html("<p>"+userChar.name+"</p>"+
            "<p> HP: " + userChar.hp + "</p>" +
            "<p> Attack: " + userChar.attack + "</p>");
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


        statBox2 = $("<div>");
        statBox2.addClass("col-md-4 playerStat enemyStat");
        $("#lower").append(statBox2);


        if ($(this).attr("src") === luke.image) {
            enemyChar = luke;

        }
        if ($(this).attr("src") === darthVader.image) {
            enemyChar = darthVader;
        }
        if ($(this).attr("src") === stormTrooper.image) {
            enemyChar = stormTrooper;
        }
        if ($(this).attr("src") === maceWindu.image) {
            enemyChar = maceWindu;
        }
        if ($(this).attr("src") === hanSolo.image) {
            enemyChar = hanSolo;
        }
        if ($(this).attr("src") === grievous.image) {
            enemyChar = grievous;
        }

        statBox2.html("<p>"+enemyChar.name+"</p>"+
            "<p> HP: " + enemyChar.hp + "</p>" +
            "<p> Attack: " + enemyChar.attack + "</p>");

    }


    if (isCharPicked && isOpponentPicked) {
        $("#game").addClass("hide");
    }

});

$("#attack").click(function () {


    if (isCharPicked && isOpponentPicked) {
          

        userChar.hp = userChar.hp - enemyChar.counterAttack;
        enemyChar.hp = enemyChar.hp - battleAttack;

        var messageLog = $("<div>");
        $("#message").html(messageLog);
        messageLog.attr("id", "log");
        messageLog.attr("class", "battleLog");

        //////////////////////////////////////////////////////////////////////////////////////////
        messageLog.html("<p>You dealt " + battleAttack + " to your opponent</p>" +
            "<p>Your opponent dealt " + enemyChar.counterAttack + " to you</p>");

        statBox.html("<p>"+userChar.name+"</p>"+
            "<p> HP: " + userChar.hp + "</p>" +
            "<p> Attack: " + battleAttack + "</p>");

        statBox2.html("<p>"+enemyChar.name+"</p>"+
            "<p> HP: " + enemyChar.hp + "</p>" +
            "<p> Attack: " + enemyChar.attack + "</p>");

        //////////////////////////////////////////////////////////////////////////////////////////            

        battleAttack = battleAttack + userChar.attack;

        if (enemyChar.hp <= 0) {
            $("#game").removeClass("hide");
            messageLog.removeClass("battleLog");
            messageLog.empty();
            isOpponentPicked = false;
            downChar.remove();
            $(".enemyStat").remove();
            enemyChar;
            wins++;

        }
        if (userChar.hp <= 0) {
            messageLog.attr("class", "battleLog");
            messageLog.html("<p class='winMessage'>You lose</p>");
        }

    }

    if (wins === 3) {
        messageLog.attr("class", "battleLog");
        messageLog.html("<p class='winMessage'>You win!</p>");
    }

});




