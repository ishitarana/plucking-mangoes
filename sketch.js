
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var tree,stone,ground,launcher,boyimg
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12
var launchingforce=100
function preload(){
boyimg=loadImage("boy.png")

	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone=new Stone(235,420,30)
	mango1=new mango(1100,100,30)
	mango2=new mango(1170,130,30)
	mango3=new mango(1010,140,30)
	mango4=new mango(1000,70,30)
	mango5=new mango(1100,70,30)
	mango6=new mango(1000,230,30)
	mango7=new mango(900,230,40)
	mango8=new mango(1140,150,40)
	mango9=new mango(1100,230,40)
	mango10=new mango(1200,200,40)
	mango11=new mango(1120,50,40)
	mango12=new mango(900,160,40)
	tree=new Tree(1050,580)
	ground=new Ground(width/2,600,width,20)
	launcher=new Launcher(stone.body,{x:235,y:420})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  image(boyimg,200,340,200,300)
  mango1.display()
mango2.display() 
mango3.display()  
mango4.display()
mango5.display()
mango6.display()
mango7.display()
mango8.display()
mango9.display()
mango10.display()
mango11.display()
mango12.display()
tree.display()
stone.display()
launcher.display()
ground.display()
detectcollion(stone,mango1)
detectcollion(stone,mango2)
detectcollion(stone,mango3)
detectcollion(stone,mango4)
detectcollion(stone,mango5)
detectcollion(stone,mango6)
detectcollion(stone,mango7)
detectcollion(stone,mango8)
detectcollion(stone,mango9)
detectcollion(stone,mango10)
detectcollion(stone,mango11)
detectcollion(stone,mango12)
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseRealeased(){
	launcher.fly()
}
function keyPressed(){
	if(keyCode==32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcher.attach(stone.body)
	}
}
	function detectcollion(stone,mangoes){
		mangoPosition=mangoes.body.position
		stonePosition=stone.body.position		
var distance=dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)
if(distance<=mangoes.r+stone.r){
Matter.Body.setStatic(mangoes.body,false)
}
}