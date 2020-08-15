class Sonic {
  constructor(){
    this.x = 100;
    this.y = 100;
    this.velx = 2
    this.vely = 2
  }
  
  mostrar(){
    image(isonic,this.x,this.y, 70,100)
  }
  
  mover(){
  if(keyCode == 68){
      this.x = this.x + this.velx
    } else if (keyCode == 65){
      this.x = this.x - this.velx
    } else if (keyCode == 83){
      this.y = this.y + this.vely
    } else if (keyCode == 87){
      this.y = this.y - this.vely
    }
  }
  
  salir(){
    if(this.x > width){
      return true;
    } else {
      return false;
    }
    
    if(this.y > height){
      return true;
    } else {
      return false;
    }
  }
  
  reaparecer(){
    if(this.x > width){
      this.x = -10 + this.velx
    }

    if(this.y > height){
      this.y = -10 + this.vely
    } else if(this.y < 0){
      this.y = 410 - this.vely;
    }
  }
}