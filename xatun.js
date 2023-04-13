//*1-ci tapsiriq
/*for(let i=10; i>=1; i--){
  console.log(i);
}


//*2-ci tapsiriq
for(let i=0; i<100; i++){
  if((i%9)==0){
    console.log(i);
  }
}


//*3-cu tapsiriq
let counter = 0
for(let i=0; i<100; i++){
    
    if(!(i%2)){
        counter++
    }
  }
  console.log(counter);*/
  


//*4-cu tapsiriq
/*const num = 13;
let counter = '';

for(let i=2; i<num; i++){
  if(num % i){
    counter =  'ededi sadedir';
  }else{
    counter =  'ededi murekkebdir';
    break;
  }
}
console.log(num,counter)


//*5-ci tapsiriq
const a = 3;
const b = 8;

if(a<b){
    for(let i = a; i < b; i++){
        console.log(i**2)
    }
}else{
    for(let i = b; i < a; i++){
        console.log(i**2)
    }
}
*/


//*6-ci tapsiriq
const num1 = 8;
const num2 = 5;
let sum = 0;
let counter;

if(num1<num2){
    counter = num1;
    while(counter<=num2){
        sum+=counter;
        counter++;
    }
    console.log(sum)
}else{
    counter = num2;
    while(counter<=num1){
        sum+=counter;
        counter++;
    }
    console.log(sum)
}


//*7-ci tapsiriq
const eded = 325;
let maks = 0; 
for(let i = 1; i < eded; i++){
  if(eded % i === 0){
    maks = i;
     
  }
}
  console.log(eded+ ' ededinin en boyuk boleni ' + maks + ' dir');


//*8-ci tapsiriq
for (let i = 0; i < 5; i++) {
  let str = '';
  for (let j = 5; j > i; j--) {
    str += 'X' ;
  }
  console.log(str);
}

for (let i = 0; i < 7; i++) {
  let str = '';
  for (let j = 1; j <= i; j++) {
    str += 'Y' ;
  }
  console.log(str);
}
