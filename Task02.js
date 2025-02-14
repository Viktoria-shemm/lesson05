// Напишите функцию isPrime.
// Она принимает число и возвращает true, если число является простым, а в ином случае false.
// Простое число - целое положительное число, имеющее ровно два различных натуральных делителя - единицу и самого себя.
// Например, 5 - простое число, так как делится без остатка только на 1 и на себя.
// 151, 911, 1987 - так же простые числа
// Используйте цикл for в функции

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(5));   
console.log(isPrime(4));    
console.log(isPrime(151));  
console.log(isPrime(911));  
console.log(isPrime(1987));