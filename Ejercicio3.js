function setup() {
  relacion(5,10);
  relacion(10,5);
  relacion(5,5);
}

function relacion(a,b){
  if(a > b){
    console.log(1)
  } else if(a < b) {
    console.log(-1)
  } else if(a == b){
    console.log(0)
  }
}