
//1. student adlı obyekt yaradıb name, age, course, faculty adlı sahələr verib hər birini console çıxardın.
/*
const student = {
name:'Xatun',
age: 19,
course: 3,
faculty: 'Applied Mathematics and Cybernetics',
}
console.log('name:',student.name);
console.log('faculty:',student.faculty);
console.log('age:',student.age);
console.log('course:',student.course);
*/



//2. Bir obyekt yaradıb başqa dəyişənə yeni obyekt kimi kopyala
/*
const myObj = { 
    name: "LALA", 
    age: 28,
    height: 178,
    weight: 76,
  };
  
  const newObj = { ...myObj };
  
  newObj.age = 31;
  newObj.weight = 70
 
  console.log('obyekt- ',myObj); 
  console.log('yeni obyekt- ',newObj); 
  */


//3. 1-dən 10 kimi olan ədədlərin hərfi yazılışın obyektdən istifadə edərək console çıxardın.
  /*
const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
*/


//4. person adlı, sahələri name, surname olan obyektdə getFullName adlı bir funskiya yaradıb name + surname qaytarsın.
/*
const person = {
    name: 'Xatun',
    Surname: 'Abdullayeva ',

getFullName(){
    return this.name +  ' ' + this.Surname;
},
};
console.log(person.getFullName());
*/


// 5. Hər hansısa bir obyekt yaradıb onun key və value bir sətrdə console çıxardın. Məsələn: Nəticədə “key: name, value: Cavid”.
/*
const teacher = {name: 'Cavid'};
for(key in teacher){
    console.log('key:',key, ',' ,'value:' ,teacher[key]);
}
*/



// 6. Obyektin hər hansısa bir sahəsinin olub olmadığını yoxluyan bir funksiya yazın.
/*
const obj = {1:'one',2:'two',name:'cavid',age:28}
function sahe(obj) {
    for (let key in obj) {
      if (Object.hasOwn(obj,'job')) {
        return true;
      }
    }
    return false;
  }
console.log(sahe(obj)); 
//obyekt daxilinde olan her hansisa keyi(1,2,name,age) yazsam true verir.)
*/


// 7. Ədədlərdən ibarət obyekt yaradın və bütün value-ların cəmini console çıxardın.
/*
const obj = {a:4 , b:7, c:2, d:11, e:34, f:1};
let sum =  0;
for(key in obj){
    sum+=obj[key];
}
console.log('value-larin cemi '+sum);
*/


// 8. Ədədlərdən ibarət olan bir massiv yaradın və onun uzunluğun iki dəfə azaldın.
/*
let numbers = [1,2,3,4,5,6,7,8,9,10,11]; 
let halfNumbers = [];

for (let i = 0; i < numbers.length/2; i++) {
 halfNumbers[i]=numbers[i]
}

console.log(halfNumbers); 
*/


// 9. Massivdə yerləşən bütün ədədlərin cəmini tapın.
/*
let arr = [1,7,3,11,20,4]; 
let result = 0; 
for (let i = 0; i < arr.length; i++) {
  result += arr[i]; 
}
console.log(result);
*/


// 10. Massivdə yerləşən ən böyük və ən kiçik ədədi tapın.
/*
const numbers = [5, 8, 2, 9, 3, 10];
let minElement = numbers[0];
let maxElement = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < minElement) {
    minElement = numbers[i];
  }
  if (numbers[i] > maxElement) {
    maxElement = numbers[i];
  }
}

console.log('En kicik eded: ' + minElement);
console.log('En boyuk eded: ' + maxElement);
*/


// 11. Massivdə yerləşən bütün tək və cüt ədədlərı ayrı massivlərə yazın. Məsələn [1,2,3,4,5] -> [1,3,5] və [2,4].
/*
const numbers = [7, 4, 12, 0, 3];
let evenNumbers = [];
let oddNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  } else {
    oddNumbers.push(numbers[i]);
  }
}\
console.log('cut ededler:',evenNumbers); 
console.log('tek ededler:',oddNumbers);
*/


// 12. Massivdə yerləşən ədələri böyükdən kiçiyə və kiçikdən böyüyə çeşidliyin.
/*
const num = [13,3,5,23]; //kicikden boyuye
for(let i=0;i<num.length-1;i++){
let min = i;
for(let j=i+1; j<num.length;j++){
if(num[j]<num[min]){
    min = j;
}
}
if (min!=i){
    let target=num[i]
    num[i]=num[min]
    num[min]=target;
}
}
console.log(num);

const num1 = [13,3,5,23]; //boyukden kiciye
for(let i=0;i<num1.length-1;i++){
let min = i;
for(let j=i+1; j<num1.length;j++){
if(num1[j]>num1[min]){
    min = j;
}
}
if (min!=i){
    let target=num1[i]
    num1[i]=num1[min]
    num1[min]=target;
}
}
console.log(num1);
*/


// 13. Massivdən false deyimli (undefined, null, false və s.i.) elementləri silib yeni massiv qaytaran funksiya yazın.
/*
const arr = [0, 1, false, true,NaN, "", "salam", null, undefined,'-'];
const result =[];
function FalsyValues(arr) {
    
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i]===null || 
        !arr[i]===undefined ||
        !arr[i]===false ) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  const newArr = FalsyValues(arr);
  console.log(newArr);
  */
 
  
// 14. Massivdə yerləşən elementləri reverse edən funksiya yazın.
/*
  const array = [1, 2, 3, 4]
  let reverseArray = []
  for(let i = array.length - 1; i >= 0; i--) {
    const value = array[i]
    reverseArray.push(value)
  }
  console.log(reverseArray)
 */
