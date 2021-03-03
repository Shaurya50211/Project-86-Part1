var canvas = new fabric.Canvas("myCanvas");

var heightOfBodyPart = 30;
var widthOfBodyPart = 30;

var X = 10;
var Y = 10;

bodyPart = "";
character = "";

function playerUpdate(){
    fabric.Image.fromURL("Player.png", function(Img){
        character = Img;
        character.scaleToWidth(150);
        character.scaleToHeight(140);
        character.set({
            top: Y,
            left: X
        });
        canvas.add(character);
    });
}

function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        bodyPart = Img;
        bodyPart.scaleToWidth(widthOfBodyPart);
        bodyPart.scaleToHeight(heightOfBodyPart);
        bodyPart.set({
            top: Y,
            left: X
        });
        canvas.add(bodyPart);
    });
}