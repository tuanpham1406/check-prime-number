 function primeNumber(number) {
     if (number < 2) {
         return false;
     }
     for (let i = 2; i <= Math.sqrt(number); i++) {
         if (number % i == 0) {
             return false;
         }
     }
     return true;
 }

 function isPrime() {
     document.write("Cac so nguyen to nho hon 10000 la: ");
     for (let i = 0; i < 10000; i++) {
         if (primeNumber(i)) {
             document.write(i + ",");
         }
     }
 }
console.log(isPrime());