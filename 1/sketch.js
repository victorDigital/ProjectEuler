let result = 0;

function setup() {
  noCanvas();
  for(let i = 0; i < 1000; i++) {
    result += isMulti(i, 3, 5)
  }
  console.log(result);
}

function draw() { //works?
}

function isMulti(n,num,num2) {
  let doOut = false;
  if(n % num == 0) { doOut = true;}
  if(n % num2 == 0) { doOut = true;}
  if(doOut) {
    return int(n);
  } else {
    return int(0);
  }
}