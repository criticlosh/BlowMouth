const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine
var world
var ball,blower,blowerMouth


function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world

  ball = new Ball(width/2 + 80,height/2 - 80, 80 , 80)

  blower = new Blower(width/2 - 50, height/2 + 50, 150, 20)
 
  blowerMouth = new BlowerMouth(width/2 + 70, height/2 + 20, 100, 90)


  button = createButton("click to blow");
  button.position(width/2, height - 100 )
  button.class("blowButton")
  button.mousePressed(blow);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)

  ball.show()
 blower.show()
 blowerMouth.show()

}

function blow(){
Matter.Body.applyForce(ball.body, {x : 0, y : 0 }, {x : 0, y : -0.05})

}