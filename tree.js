class Tree{
    constructor(x,y){
       this.x=x
       this.y=y
       this.boxwidth=450
       this.boxheight=600
       this.boxthikness=10
       
       this.image=loadImage("tree.png")
       this.bottombody=Bodies.rectangle(this.x,this.y,this.boxwidth,this.boxthikness,{isStatic:true})
       this.rightbody=Bodies.rectangle(0,this.y-this.boxheight/2,this.boxthikness,this.boxheight,{isStatic:false})
       this.leftbody=Bodies.rectangle(this.x+this.boxwidth/2,this.y-this.boxheight/2,this.boxthikness,this.boxheight,{isStatic:false})
      
        World.add(world,this.bottombody)
        World.add(world,this.leftbody)
        World.add(world,this.rightbody)
    }
    display(){
        var pos=this.bottombody.position
       
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill("brown")
       imageMode(CENTER)
        image(this.image,0,-this.boxheight/2,this.boxwidth,this.boxheight)
        pop()
    }}