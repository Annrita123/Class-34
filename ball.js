class Ball{
  constructor(x,y){
    var ball_options={
      restitution:0.7,
      friction:0.5,
      density:0.6
    }
  this.body=Bodies.circle(x,y,50,ball_options);
  //this.x=x;
  //this.y=y;
  World.add(world,this.body);
  
  }
  display(){
  var pos=this.body.position;
  var angle=this.body.angle;
  push()
  translate(pos.x,pos.y);
  rotate(angle);
  ellipse(0,0,50,50);
  pop()
  
  }
  }
    
  