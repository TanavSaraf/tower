class Box extends BaseClass {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.image = loadImage("box.png");
    this.visibility=255;
    this.height=height;
    this.width=width;
  }
  score()
  {
    if(this.visibility<0 && this.visibility>-10)
    {
      sc++;
    }
  }
display()
{
  
  if(this.body.speed<2)
  {
    super.display();
    
  }else{
    World.remove(world,this.body);
    push()
    this.score()
    this.visibility=this.visibility-5;
    tint(255,this.visibility);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    pop()
  }

}
}

