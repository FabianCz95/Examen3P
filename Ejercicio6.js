var f1 = 0
var f2 = 1
var suma;

function setup() {
  console.log(fibonacci(11))
}

function fibonacci(k){  
  for(var i = 1; i < k+1; i++){   
    suma = f1 + f2
    f1 = f2
    f2 = suma
  }
  
  if(k == 0) {
    return 0;
  } else if(k == 1){
    return 1;
  } else if(k >= 2){
    return f1    
  }
}