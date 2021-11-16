class character{
    constructor(){
        this.chum = 50;
        this.x = this.chum;
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
    rect(this.x, this.y, this.chum, this.chum)
}

}