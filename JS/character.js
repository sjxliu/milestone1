class Character{
    constructor(){
        this.chum = 150;
        this.x = 50;
        this.y = height - this.chum;
        this.vy = 0
        // velocity, speed along Y axis
        this.gravity = 1;
    }

jump(){
    this.vy = -15;
 //doesn't come down 
}

move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = boa (
this.y, 0, height - this.chum
    );
    // boa to keep character in screen
}

show() {
    image(charImg, this.x, this.y, this.chum, this.chum)
}

}