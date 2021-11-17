const character = document.getElementById("character");
const killObject1 = document.getElementById("killObject1");
const counter=0;

window.addEventListener("keydown",(jump) => {
    if (jump.key === "w") {
        if(character.classList != "animate"){
                character.classList.add("animate")}
                setTimeout(function(){
                    character.classList.remove("animate")
                }, 500);
    }
})

let vitals = setInterval(function() {

        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
        let kill1 = parseInt(window.getComputedStyle(killObject1).getPropertyValue("left"));
        //console.log(characterTop, kill1)
        if(kill1<20 && kill1>-20 && characterTop<=-160){
            // kill1.style.animation = "none";
            console.log('hello')
            killObject1.style.animation = "none";
            alert("Game Over. score: "+ time
            
            // Math.floor(counter/60)
            
            );
            counter=0;
            killObject1.style.animation = "block 1s infinite linear";
        }else{
            counter++;
            document.getElementById("scoreSpan").innerHTML = 
            time
            // Math.floor(counter/60);
        }
    }, 0); 

let time = 0;
const countDown = setInterval(() => {
++time;
document.getElementById("timer").innerHTML = time;
if (time <= 0){
    time = 0;
}
}, 600);

function stopTimer() {
    clearInterval(countDown);
    let time = 0;
}



// function vitals(){
//     function charV(){ 
//   let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
//     let kill1 = parseInt(window.getComputedStyle(killObject1).getPropertyValue("left"));
//     // console.log(characterTop, kill1)
//     if(kill1<20 && kill1>-20 && characterTop<=-160){dead()}else{next()}
// }

// function dead() {
//     killObject1.classList.remove=("animate");
//     clearInterval(core);
// console.log("dead");
// const score= document.getElementById("scoreSpan");
// if(score.innerHTML<Math.floor(counter/60)){
//     score.innerHTML=Math.floor(counter/60);
// }
// counter = 0;
// }
//         // kill1.style.animation = "none";
//         killObject1.style.animation = "none";
//         alert("Game Over. score: "+Math.floor(counter/60));
//         // counter=0;
//         killObject1.style.animation = "block 1s infinite linear";
//     }else{
//         counter++;
//         document.getElementById("scoreSpan").innerHTML = Math.floor(counter/60);
//     }
// }, 0); 

// function next() {
//     counter++
//     document.getElementById("scoreSpan").innerHTML = Math.floor(counter/60);

// }
// if (killObject1.classList == "animateKill"){return}killObject1.classList.add("animateKill");

// const core=setInterval(check, 10);}

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

