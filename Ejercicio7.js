var A = [3,8,9,7,6,5]

function setup() {
  solucion(4)
}

function solucion(k){  
  for(var i = 1; i < k+1; i++){
    A.unshift(A.pop())
  }
  
  console.log(A)
}