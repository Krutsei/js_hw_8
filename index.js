
// 1.Вивести на екран всі числа від 1 до 10 за допомогою циклу while.

console.log

let number1 = 1

while (number1 <=10 ) {
    console.log(number1)
    number1 += 1
}

// 2. Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.


console.log

for (let i = 1; i < 21; i += 1) {
    if (i % 2 === 1) {
        continue
        
    }
console.log(i)
}

// 3. Вивести на екран таблицю множення числа 7 за допомогою циклу for.
 
console.log

for (let n = 0; n <= 10; n += 1) {
    const multiP = n*7
    console.log(multiP)
}

// 4. Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.

console.log

const numbers = [1, 2, 3, 4, 5]

let A = 0

while (A < numbers.length) {
    console.log(numbers[A])
    A+= 1
}

// 5. Створити масив із числами від 1 до 10. 
//За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. 
//Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.

console.log

const numbers10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let B = 0; B < numbers10.length; B += 1) {
    console.log(B)
  
    if (numbers10[B] === 6) {
      break;
    }
  }

  //За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. 
  //Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

  console.log

for (let k = 1; k < 20; k += 1) {
    if (k % 3 === 0) {
        continue
        
    }
console.log(k)
}