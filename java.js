//1. 2 daxil olan parametrlərin cəmini qaytaran funksiya yazın.
/*function reqem(num1, num2) {
    return num1 + num2;
  }

  let sum = reqem(5, 7);
  console.log(sum);*/
  
   

//2. Daxil olan parametrin “Tək” və yaxud “Cüt” olduğunu yoxlayıb boolean qaytaran funksiya yazın.
/*function eded(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(eded(7));*/


//3. Parametrlərdə “Ad” və “Soyad” qəbul edib aralarında boşluğ ilə qaytaran funksiya yazın.
/*function fullname(ad, soyad){
    return  ad + " " + soyad
}
   console.log(fullname('Xatun','Abdullayeva'))*/


//4. Daxil olan ədədin mənfi və yaxud müsbət olduğunu yoxlayıb boolean qaytaran funksiya yazın.
/*function reqem(number) {
    if (number > 0) {
      return true;
    } else {
      return false;
    }
  }
   
  console.log(reqem(0)); 
  console.log(reqem(8)); 
  console.log(reqem(-3)); */

  
//5. Parametrdən daxil olan ədədin faktorialını qaytaran funksiya yaradın.
/*function factorial(num) {
    if (num === 0) {
      return 1;
    }
    else {
      return num * factorial(num - 1);
    }
}
console.log(factorial(5));
console.log(factorial(9));
console.log(factorial(0));*/


//6. Parametrlərdən gələn intervalda yerləşən ədədləri funksiya ilə console çıxardın. (rekursiya)
/*function parametrin(start, end) {
  if (start <= end) {
    console.log(start);
    parametrin(start + 1, end);
  }
}
parametrin(3, 9); */


//7. Parametrdə n ədədini qəbul edən və n-ci Fibonaççi sayını qaytaran funksiya yazın. (rekursiya)
/*function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n-1) + fibonacci(n-2);
    }
  }

  console.log(fibonacci(8))*/

