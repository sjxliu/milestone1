class Deadly {
    constructor(){
        this.dnum = 100;
        this.x =width;
        this.y= height - this.dnum;
    }

move(){
    this.x -= 3;
}

    show(){
        image(catImg, this.x, this.y, this.dnum, this.dnum)
    }
}