class bin { 
    constructor(x,y){

       var options = {
          isStatic : true
       }

       this.x = x;
       this.y = y;
       this.width = 200;
       this.height = 213;
       this.Wallthickness = 20;
       
       this.image = loadImage("dustbingreen.png")
       this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
       this.leftBody=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.wallthickness, this.height,options)
       this.rightBody=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.wallthickness, this.height,options)   

       World.add(world, this.bottomBody)
		World.add(world, this.leftBody)
		World.add(world, this.rightBody);
       }
   
    display(){
      var posBottom=this.bottomBody.position;
      var posLeft=this.leftBody.position;
      var posRight=this.rightBody.position;

      

      push()
			translate(posLeft.x, posLeft.y);				
			angleMode(PI)
			fill(255)
			rotate(this.angle)			
         pop()
         
         push()
			translate(posRight.x, posRight.y);		
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)		
			pop()

       
         push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width, this.height)			
			pop()
    }
   
   }