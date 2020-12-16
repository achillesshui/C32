class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    var options = {
      'restitution':0.8,
      'friction':0.1,
      'density':0.1
  }
    this.image = loadImage("sprites/wood1.png");
  }

};
