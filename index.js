const character = document.getElementById("character");

const killObject1 = document.getElementById("killObject1");

let counter = 0;

function jump(){
    if (character.classList.contains("animate"))
    {return} character.classList.add("animate");
    setTimeout(() => {
        character.classList.remove("animate")
    }, 500);
}

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
    if (kill1 < 20 && kill1 > 0 && characterHead>=220);
    block.style.animation = "none";
    block.style.display = "none";
    alert ("You Lose.")
}, 10);