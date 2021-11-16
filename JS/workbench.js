let character;
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
    background(220);
    character.show();
    character.move();
}