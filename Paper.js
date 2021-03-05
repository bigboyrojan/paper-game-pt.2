class Paper  {
constructor (x,y,radius){

var choices = {
    isStatic: false,
    density: 1.2,
    restitution: 0.3,
    friction: 0.5,
   
}
this.x = x;
this.y =y;
this.r = radius;

this.body = Bodies.circle(this.x,this.y,(this.r-20)/2, choices);
this.image = loadImage("paper.png");



World.add(world, this.body);
}
display() {
var ball = this.body.position;
ellipseMode(RADIUS);
fill(200,32,40);
//ellipse(ball.x,ball.y,this.r);
image(this.image,100,625,this.r,this.r);
}

}