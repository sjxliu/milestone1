const character = document.getElementById("character");

const killObject1 = document.getElementById("killObject1");

let score = 0;

window.addEventListener("keydown",(jump) => {
    if (jump.key === 32) {
        if(character.classList != "animate"){
                character.classList.add("animate")}
                setTimeout(function(){
                    character.classList.remove("animate")
                }, 500);
    }
})



// jump(){
//     if(character.classList != "animate"){
//     character.classList.add("animate")}
//     setTimeout(function(){
//         character.classList.remove("animate")
//     }, 500);
// }
// }

// const keyActions = {
//     Spacebar: {keydown: characterActions.jump}
// };
//  a failed try?



// object.onkeydown = function jump(){
//     if (character.classList.contains("animate"))
//     {return} character.classList.add("animate");
//     setTimeout(() => {
//         character.classList.remove("animate")
//     }, 500);
// }

// function jump(){
//     if(character.classList != "animate"){
//     character.classList.add("animate")}
//     setTimeout(function(){
//         character.classList.remove("animate")
//     }, 500);
// }

let vitals = setInterval(() => {
    let characterHead = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let kill1 = parseInt(window.getComputedStyle(killObject1).getPropertyValue("left"));
    if (kill1 < 20 && kill1 > 0 && characterHead>=220){
    killObject1.style.animation = "none";
    alert ("You Lose. Score:" +Math.floor(score/100));
    score = 0;
    killObject1.style.animation = "killObject1 1s infinite linear";
}else { 
    score++;
document.getElementById("score").innerHTML = Math.floor(score/100);
}  10);

// Death & score (not working lol)