////Variable objects for each character that includes the stats and image path
//WILL MAKE ADJUSTMENTS TO BALANCE OUT CHARACTERS LATER
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


///variables declared to be used later in click functions

//These are used when selecting characters. Insures that you can't click on the same character again.
var isCharPicked = false;
var isOpponentPicked = false;

//downChar is the image of the defender selected. Will eventually be used to remove() everytime defender dies
var downChar;

//user and enemy stat of selected characters
var userChar;
var enemyChar;

//used during attack button function. Will add base attack to this variable each click
var battleAttack;

//DOM for displaying and updating stat box next to characters
var statBox;
var statBox2;

//win counter
var wins = 0;

//function for initially adding images to html
function picAdd(name) {
    var pic = $("<img>");
    pic.attr("src", name);
    pic.addClass("characters col-md-2");
    $("#game").append(pic);
}


//using function for each charcter. If adding or omitting, be sure to adjust win condition at the bottom of code
picAdd(luke.image);
picAdd(darthVader.image);
picAdd(stormTrooper.image);
picAdd(maceWindu.image);
// picAdd(hanSolo.image);
picAdd(grievous.image);


//click function for selecting user charcter and then defender
$(".characters").click(function () {
    if (isCharPicked === false) {

        //creates image tag of the character selected
        var upChar = $("<img>");
        var imagePath = $(this).attr("src");
        upChar.attr("src", imagePath);
        upChar.addClass("col-md-2 player");
        $("#upper").append(upChar);

        //Insures that you cannot select another character for yourself
        isCharPicked = true;

        //Hides or "remove" the character the main roster
        $(this).addClass("hide");

        //creates stat box next to character
        statBox = $("<div>");
        statBox.addClass("col-md-4 playerStat");
        $("#upper").append(statBox);


        //sets userChar to one of the character variables based on image source.
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

        //set battleAttack equal to the base attack
        battleAttack = userChar.attack;

        //Adds the stats into the stat box
        statBox.html("<p>Your character: "+userChar.name+"</p>"+
            "<p> HP: " + userChar.hp + "</p>" +
            "<p> Attack: " + userChar.attack + "</p>");

        //removes the "Pick characters" heading in the html    
        $("#pickChar").remove();

    }
    //This part is for picking your opponent.
    else {

        //Sets boolean true to insure that you cannot select another opponent
        isOpponentPicked = true;

        //Adds defender to the lower div
        downChar = $("<img>");
        var imagePath = $(this).attr("src");
        downChar.attr("src", imagePath);
        downChar.addClass("col-md-2 computer");
        $("#lower").append(downChar);

        //Hides selected opponent from roster
        $(this).addClass("hide");


        //Adds stat box of defender
        statBox2 = $("<div>");
        statBox2.addClass("col-md-4 playerStat enemyStat");
        $("#lower").append(statBox2);


        //sets enemy object based on image source
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


        //Adds the stats in the enemy stat box
        statBox2.html("<p>Defender: "+enemyChar.name+"</p>"+
            "<p> HP: " + enemyChar.hp + "</p>" +
            "<p> Attack: " + enemyChar.counterAttack + "</p>");

    }

    //This is to temporaily hide the rest of the characters so that they can't be clicked during battle.
    if (isCharPicked && isOpponentPicked) {
        $("#game").addClass("hide");
    }

});


//click function for the attack button
$("#attack").click(function () {

    //First set a conditional to insure that one character for each side has been selected
    if (isCharPicked && isOpponentPicked) {
          

        //Damage calculations
        userChar.hp = userChar.hp - enemyChar.counterAttack;
        enemyChar.hp = enemyChar.hp - battleAttack;

        //Adds a battle log that appears below the attack button
        var messageLog = $("<div>");
        $("#message").html(messageLog);
        messageLog.attr("id", "log");
        messageLog.attr("class", "battleLog");

        //Adds the battle log message in the battle log box and updates the hp and attack in the stat boxes.
        //////////////////////////////////////////////////////////////////////////////////////////
        messageLog.html("<p>You dealt " + battleAttack + " to your opponent</p>" +
            "<p>Your opponent dealt " + enemyChar.counterAttack + " to you</p>");

        statBox.html("<p>Your character: "+userChar.name+"</p>"+
            "<p> HP: " + userChar.hp + "</p>" +
            "<p> Attack: " + battleAttack + "</p>");

        statBox2.html("<p>Defender: "+enemyChar.name+"</p>"+
            "<p> HP: " + enemyChar.hp + "</p>" +
            "<p> Attack: " + enemyChar.counterAttack + "</p>");

        //////////////////////////////////////////////////////////////////////////////////////////            

        //updates user attack by their base attack each click
        battleAttack = battleAttack + userChar.attack;

        //When enemy dies, condtion is met
        if (enemyChar.hp <= 0) {

            //reveals the rest of the characters 
            $("#game").removeClass("hide");

            //"Hides" the message log temporaily while selecting characters again
            messageLog.removeClass("battleLog");
            messageLog.empty();

            //sets boolean to false so enemy can be picked again
            isOpponentPicked = false;

            //removes the defeated enemy image and stat box
            downChar.remove();
            $(".enemyStat").remove();

            //clears out the enemyChar variable. Not sure if this is nessesary. Added as a precaution
            enemyChar;

            //adds to win counter by 1
            wins++;

        }

        //Lose condition
        if (userChar.hp <= 0) {

            //adds back the message box and puts in "You Lose"
            messageLog.attr("class", "battleLog");
            messageLog.html("<p class='winMessage'>You lose</p>");
        }

    }

    //win condition. **Adjust the win condition number based on number of characters available
    if (wins === 4) {

        //adds back the message box and puts in "You win!"
        messageLog.attr("class", "battleLog");
        messageLog.html("<p class='winMessage'>You win!</p>");
    }

});




