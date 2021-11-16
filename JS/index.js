// let app = new PIXI.Application({ width: 2000, height: 3000,backgroundColor:0xffffff });
// document.body.appendChild(app.view);

// // let character = PIXI.Character.from('images/german-shepherd.png');
// let hawaii = PIXI.Sprite.from("https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png");
// console.log(hawaii)
// app.stage.addChild(hawaii);

// hawaii.anchor.x = 0;
// hawaii.anchor.y = 0;
 
// move the sprite to the center of the canvas
// hawaii.position.x = 200;
// hawaii.position.y = 200;
 







const character = document.getElementById("character");

const killObject1 = document.getElementById("killObject1");

let score = 0;


function controls(e){
    if (e.keyCode === 32){
jump()
    }
}

document.addEventListener("keyup", controls)

function jump() {
   let position = 0
let timerId = setInterval(() => {

    if(position === 150){
    // clearInterval(timerId)
    console.log("down")
    }


    console.log("jumped")
    position += 30
    character.style.bottom = position + "px"
}, 20);
}


// window.addEventListener("keydown",(jump) => {
//     if (jump.keyCode === 32) {
//         if(character.classList != "animate"){
//                 character.classList.add("animate")}
//                 setTimeout(function(){
//                     character.classList.remove("animate")
//                 }, 500);
//     }
// })

// function jump(){
//     if(character.classList != "animate"){
//     character.classList.add("animate")};

//     setTimeout(function(){
//         character.classList.remove("animate");
//     }, 500);
// }

// object.onkeydown = function jump(){
//     if (character.classList.contains("animate"))
//     {return} character.classList.add("animate");
//     setTimeout(() => {
//         character.classList.remove("animate")
//     }, 500);
// }




// collision (killObject1) {
//     collideRectRect(200, 200, 100, 150, mouseX, mouseY, 50, 75);
// }

// let vitals = setInterval(() => {
//     let characterHead = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     // gets char. Y position, use parseInt so it doesn't return px but whole values
//     let kill1 = parseInt(window.getComputedStyle(killObject1).getPropertyValue("left"));
//     // deadly object position
//     setInterval(() => {
//         killObject1.style
//     }, 300);
//     console.log("CHARACTER HEAD:", characterHead)
//     console.log("KILL 1:", kill1)
//     if (kill1 < 20 && kill1 > 0 && characterHead>=220){
//     killObject1.style.animation = "none";
//     alert ("You Lose. Score:" +Math.floor(score/200));
//     score = 0;
//     killObject1.style.animation = "killObject1 1s infinite linear";
// }else { 
//     score++;
// document.getElementById("score").innerHTML = Math.floor(score/200);
// }  1000});

// Death & score (not working lol)