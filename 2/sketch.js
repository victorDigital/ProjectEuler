

function setup() {
  noCanvas();
  fib();
}

function draw() {
}

function fib() {
  let pnum = 1;
  let num = 2;
  let result = [1,2];
  let finalnums = [];
  final = 0;
  while(num < 4000000) {
    let tempNum = num + pnum;
    result.push(tempNum);
    pnum = num;
    num = tempNum;
  }
  for(let i = 0; i < result.length; i++) {
    if(result[i] % 2 == 0) {finalnums.push(result[i])}
  }
  for(let i = 0; i < finalnums.length; i++) {
    final += finalnums[i];
  }
  console.log(final);
}