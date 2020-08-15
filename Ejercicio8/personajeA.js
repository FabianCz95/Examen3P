class Sonic {
  constructor(){
    this.x = 100;
    this.y = 200;
    this.velx = 2
    this.vely = 2
  }
  
  mostrar(){
    imageMode(CENTER);
    image(isonic,this.x,this.y, 70,100);
  }
  
  mover(){
  if(keyCode == 39){
      this.x = this.x + this.velx
    } else if (keyCode == 37){
      this.x = this.x - this.velx
    } else if (keyCode == 40){
      this.y = this.y + this.vely
    } else if (keyCode == 38){
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
      this.x = 0 + this.velx
    }
    if(this.x < 0){
      this.x = 400 - this.velx
    }

    if(this.y > height){
      this.y = 0 + this.vely
    } 
    if(this.y < 0){
      this.y = 400 - this.vely
    }
  }
}