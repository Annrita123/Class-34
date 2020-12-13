class Box{
constructor(x,y){
  var box_options={
    restitution:0.7,
    friction:0.5,
    density:0.6
  }
this.body=Bodies.rectangle(x,y,50,50,box_options);
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
rect(0,0,50,50);
pop()

}
}
  

    


 
