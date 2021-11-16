class character{
    constructor(){
        this.x = 50;
        this.y = height - 50;
        this.vy = 0
        // velocity, speed along Y axis
    }

jump(){
    this.vy = -5;
    
}

move(){
    this.y += this.vy;
}

show() {
    rect(this.x, this.y, 50, 50)
}



}