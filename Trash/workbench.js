let character;
let charImg;
let catImg;
let banImg;
let kills = [];



function preload(){
charImg = loadImage("german-shepherd.png");
catImg = loadImage("evilcat.jpg");
banImg = loadImage("bananaBackground.jpg");
}



function setup (){
createCanvas(600, 450);
character = new Character();
}

function keyPressed(){
    if (key == " "){
        character.jump();
    }
}


function draw (){
if(random(1)<0.005){
    kills.push(new Kill());
}

    background(banImg);
    character.show();
    character.move();
}