/*
// task 1
let num = 0
while (num < 10) {
    num = num + 1
    console.log(num)
}

// task 2
let sum = 0;
for (let num = 1; num <= 100; num++) {
  sum += num;
}
console.log("Сумма всех чисел от 1 до 100: " + sum);

// task 3
let number = 0
while (number <= 20) {
if(number % 2 === 0) {
console.log(number)
}
number++
}

// task 4
let factorial = 1 
let numberr = prompt("Введите значение:")
while (numberr > 1) {
  factorial *= numberr
  numberr -= 1
}
console.log(factorial)

// task 
let number = 12345;
let sum = 0;

while (number > 0) {
let digit = number % 10;  
sum += digit;             
number = number / 10 | 0; 
}
console.log("Сумма цифр числа: " + sum);

// task 6
let text = "Kazakhstan";
let index = 0;

while (index < text.length) {
    console.log(text[index]);
    index++;
}

// task 7
let upperlimit = prompt("Введите верхний предел диапазона:");
upperlimit = Number(upperlimit);

let num = 3;
while (num <= upperlimit) {
    console.log(num);
    num += 3;
}

// task 8
let sim = "Indonezia";
let num = sim.length;
console.log("Количество символов в строке: " + num)

// task 9 
let fruits = ["Яблоко", "Банан", "Апельсин", "Груша"];
let er = 0;

while (er < fruits.length) {
    console.log(fruits[er]);
    er++;
}

// task 10
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
let iter = 0;
while (iter < numbers.length) {
    sum += numbers[iter];
    iter++;
}
console.log("Сумма всех элементов: " + sum);

// task 11
let number = [-1, -2, -3, -4]; 
let i = 0;
let allPositive = true;
while (i < number.length && allPositive) {
  if (number[i] <= 0) allPositive = false;
  i++;
}
console.log(allPositive ? "Все элементы положительные." : "Все отрицательные элементы.");

// task 12
let numbers = [1, 2, 3, 4, 5]; 
let sum = 0;
let iter = 0;
while (iter < numbers.length) {
  sum += numbers[iter];
  iter++;
}
let average = sum / numbers.length;
console.log("Среднее арифметическое значение элементов массива:", average);

// task 13
let numbers = [16, 3, 9, 10, 14]; 
let min = numbers[0]; 
let i = 1; 
while (i < numbers.length) {
  if (numbers[i] < min) {
    min = numbers[i]; 
  }
  i++;
}
console.log("Наименьший элемент массива:", min);

// task 14
let mass = [4, 1, 3, 2, 8]; 
let evenCount = 0;
let oddCount = 0; 
let num = 0; 
while (num < mass.length) {
  if (mass[num] % 2 === 0) { 
    evenCount++;
  } else { 
    oddCount++;
  }
  num++; 
}
console.log("Количество четных элементов:", evenCount);
console.log("Количество нечетных элементов:", oddCount);

// task 15
let array = [1, -2, 3, -4, 5, -6];
let positiveArray = [];
let index = 0;
let newIndex = 0;
while (index < array.length) {
    if (array[index] >= 0) {
        positiveArray[newIndex] = array[index]; 
        newIndex++; 
    }
    index++;
}
console.log(positiveArray);

// task 1
let str = "Hello, world!";
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr); 

// task 2
let min = [22, 21, 15, 52, 41]
let number = min[0]
let i = 1
while(i < min.length) {
  if (min[i] < number) {
    number = min[i];
  }
  i++
}
console.log("Наименьшее число" , number)

// task 3
let inputString = "Around the world";
let vowels = "aeiouAEIOU"; 
let count = 0;
let i = 0;
while (i < inputString.length) {
    if (vowels.includes(inputString[i])) {
        count++; 
    }
    i++;
}
console.log("Количество гласных букв:", count);

// task 4
let mas1 = ["hello"];
let mas2 = ["world"];
let array = [];
let i = 0;
while (i < mas1.length) {
  array = array.concat(mas1[i]);
  i++;
}
i = 0;
while (i < mas2.length) {
  array = array.concat(mas2[i]);
  i++;
}
console.log(array);
// task 5
let arr = [1, 2, 3, 1, 4, 2, 5, 3];
let uniqueArr = [];
let index = 0;
while (index < arr.length) {
    if (uniqueArr.indexOf(arr[index]) === -1) {
        uniqueArr.push(arr[index]);
    }
    index++;
}
console.log(uniqueArr);

// task 6
let number = [1, 2, 3, 3, 2, 1];
let pal = true;
let i = 0;
while (i < number.length / 2) {
  if (number[i] !== number[number.length - 1 - i]) {
    pal = false;
    break;
  }
  i++;
}
console.log(pal);

// task 7
let str = ("level")
let pal = true
let i = 0
while (i < str.length / 2) {
  if (str[i] !== str[str.length - 1 - i]) {
    pal = false;
    break;
  }
  i++
}
console.log(pal)
// task 8
let str = "try and try";
let kol = 0;
let i = 0;
let words = str.split(" ");
while (i < words.length) {
  kol++;
  i++;
}
console.log("Количество слов: " + kol);

// task 9
let number = []; 
let pos = 0; 
while (pos <= 98) {
  number.push(pos); 
  pos += 7; 
}
console.log(number);
*/
// task 10
let N = prompt("Введите число N:");
N = parseInt(N); 
let powerOfTwo = 1; 
while (powerOfTwo * 2 <= N) {
  powerOfTwo *= 2;
}
console.log("Самая большая степень двойки, не превосходящая", N, "это", powerOfTwo);

