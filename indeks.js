//1-ci tapsiriq  
const a = 9
const result = a**2
console.log(result)
//--------------------------
const b = 9
const result1 = b**3
console.log(result1)
//-------------------------
let num = 7
let kvadrat = num * num
let kub = num * num * num
console.log(kvadrat,kub)


//2-ci tapsiriq
const v = 60 //suret
const s = 180 //mesafe
const t=(s / v) * 60 //vaxt
console.log(t) 


//*3-cu tapsiriq
const r = 11
const z = 15
const y = 7
if(r > z && r > y){
    console.log('r ededlerden en boyuyudur');
}else if(z > r && z > y){
    console.log('z ededlerden en boyuyudur');
}else{
    console.log('y en boyuk ededdir');
}


//*4-cu tapsiriq
const x = 567
if((x % 2) === 0){
    console.log('cut');
}else {
    console.log('tek');
}
//----------------
let number = 48;
if(number % 2 ===0 ){
    console.log('eded cutdur');
}else {
    console.log('eded tekdir');
}

//*5-ci tapsiriq
const h=4
switch(h){
  case 1:
    console.log('bazar ertesi');
    break;
  case 2:
    console.log('cersenbe axsami');
    break;
  case 3:
    console.log('cersenbe');
    break;
  case 4:
    console.log('cume axsami');
    break;
  case 5:
    console.log('cume');
    break;
  case 6:
    console.log('senbe');
    break;
  case 7:
    console.log('bazar');
    default:
    console.log('bele bir gun movcud deyil')
}


//*6-ci tapsiriq
let number1 = 42;
let n1= parseInt (number1 / 10);
let n2= number1 % 10;
let str = ''
switch (n1) {
  case 1:
    str = 'on' 
    break;
  case 2:
    str = 'iyirmi'
    break;
  case 3:
    str = 'otuz'
    break;
  case 4:
    str = 'qirx'
    break;
  case 5:
    str = 'elli'
    break;
  case 6:
    str = 'altmis'
    break;
  case 7:
    str = 'yetmis'
    break;
  case 8:
    str = 'seksen'
    break;
  case 9:
    str = 'doxsan'
    break;
    default:
     console.log('doqquzdan boyuk');
    break;
} 

    switch (n2) {
      case 1:
        str = str + ' bir'
        break;
      case 2:
        str = str + ' iki'
        break;
      case 3:
        str = str + ' uc'
        break;
      case 4:
        str = str + ' dort'
        break;
      case 5:
        str = str + ' bes'
        break;
      case 6:
        str = str + ' alti'
        break;
      case 7:
        str = str + ' yeddi'
      case 8:
        str = str + ' sekkiz'
        break;
      case 9:
        str = str + ' dokkuz'
        break;
        default:
            console.log(' doqquzdan boyuk');
        break;
    
    } 
      console.log(str)


//*7-ci tapsiriq
let J=289
if(J > 1 && J < 10){
    console.log('bir reqemli eded')
}else if(J > 10 && J < 100){
    console.log('iki reqemli eded');
}else if(J > 100 && J < 1000){
    console.log('uc reqemli eded');
}else{
    console.log('bele eded yoxdur');
}