class Box extends Ground {
    constructor(x, y, width, height){
      super(x,y,width,height);
      
    }
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
  
   
  };
  