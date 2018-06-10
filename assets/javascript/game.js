var luke = {
    hp: 200,
    attack: 10,
    defense: 5
};

var darthVader = {
    hp: 200,
    attack: 10,
    defense: 5
};

var isCharPicked = false;
var isOpponentPicked = false;


var lukePic = $("<img>");
lukePic.attr("src", "assets/images/Luke.jpg");
lukePic.addClass("characters lukeSky col-md-2");
$("#game").append(lukePic);

var vaderPic = $("<img>");
vaderPic.attr("src", "assets/images/Vader.png");
vaderPic.addClass("characters darthVad col-md-2");
$("#game").append(vaderPic);

// var obiwanPic = $("<img>");
// obiwanPic.attr("src", "assets/images/Obiwan.jpg");
// obiwanPic.addClass("characters obiwanKen col-md-2");
// $("#game").append(obiwanPic);

var stormPic = $("<img>");
stormPic.attr("src", "assets/images/Stormtrooper.jpg");
stormPic.addClass("characters stormTroop col-md-2");
$("#game").append(stormPic);

var macePic = $("<img>");
macePic.attr("src", "assets/images/Macewindu.jpg");
macePic.addClass("characters maceWin col-md-2");
$("#game").append(macePic);

// var sidPic = $("<img>");
// sidPic.attr("src", "assets/images/Sidious.jpg");
// sidPic.addClass("characters darthSid col-md-2");
// $("#game").append(sidPic);

var hanPic = $("<img>");
hanPic.attr("src", "assets/images/Hansolo.jpg");
hanPic.addClass("characters hanSolo col-md-2");
$("#game").append(hanPic);

var grieviousPic = $("<img>");
grieviousPic.attr("src", "assets/images/Grievous.jpg");
grieviousPic.addClass("characters GeneralGrie col-md-2");
$("#game").append(grieviousPic);


$(".characters").click(function () {
    if (isCharPicked === false) {

        var upChar = $("<img>");
        var imagePath = $(this).attr("src");
        upChar.attr("src", imagePath);
        upChar.addClass("col-md-2 player");
        $("#upper").append(upChar);
        isCharPicked = true;
        $(this).addClass("hide");

    }
    //This happens when you pick your character. This part is for picking your opponent.
    else{
        isOpponentPicked = true;
        var downChar = $("<img>");
        var imagePath = $(this).attr("src");
        downChar.attr("src", imagePath);
        downChar.addClass("col-md-2 computer");
        $("#lower").append(downChar);
        $(this).addClass("hide");

    }
    
    
    if(isCharPicked && isOpponentPicked){
        $("#game").addClass("hide");
    }

});

$("#attack").click(function(){
    //Test to see if rest of the charcters can come back after click
    $("#game").removeClass("hide");
});


