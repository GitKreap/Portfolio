/*let a = prompt("Введите длину прямоугольника");
let b = prompt("Введите ширину прямоугольника");

a=Number(a); 
b=Number(b); 

let c = 2*(a+b);


console.log("Периметр прямоугольника = ", c);

alert (c)*/

/*Обьем параллелограмма
let a=prompt("Введите длину",6);
let b=prompt("Введите ширину",6);
let d=prompt("Введите высоту",6);
console.log(typeof a);


console.log(Number(a)*Number(b)*Number(d));
*/


/*
console.log (14225435463%100);

 
let a=prompt()

if(a%2==0){
 console.log("Четное");
    
}
else{
console.log("Нечетное");}
*/

/*
let a=prompt();
let b=prompt(a)

if (a%2==b%2) {
    console.log("ЧИсла имеют одинаковую четность");
} else {
    console.log("Числа не имеют одинаковую четность")
}
*/


/*Домашнее

let x=prompt();

console.log(x*x+10*x+15);
*/

/*
let n=prompt();
for(let i=0;i<=n;i++){
    if(i%3==0){
        console.log(i);
    }
}
    */


 
/*Счет N от 1 до N*/
/*
let N=prompt();
let S=0
for(let i=1; i<=N;i++){

  if (i%4==0 || i%5==0){

S+=i;
 }
}
console.log(S);

*/


/*Минимальное и максимальное число*/
/*
let max=0;
let min=100000000000000;
let N=prompt("Кол-во чисел");
for(let i=0;i <N; i++) {

    a=prompt();
    console.log(a);
if(a>max){
    max=a; 
}
if(a<min){

    min=a}}

console.log("Минимальное число: ", min);
console.log("Максимальное число: ", max);
*/


/* Делимость/неделимость числа


let a = prompt("Введите число A:");
let b = prompt("Введите число B:");

if (a%b == 0) {

    console.log("Число ", a, " делится на", b  );
}
else{
    console.log("Число ", a, " не делится на", b, "Остаток:", a%b )
}

*/

/*
Задача 2
Запросите у пользователя количество чисел n, а затем сами числа. 
Программа должна найти и вывести их среднее арифметическое.

Пример ввода:
Введите количество чисел: 3
Введите число: 10
Введите число: 20
Введите число: 30

Пример вывода:
Среднее арифметическое: 20
*/

/*
let N=prompt();
let m=0;
let sum=0;
for(let i=0; i <N; i++) {

  m=Number(prompt("Введите число"));
sum=sum+m;
}
console.log(sum);
console.log(sum/N);
*/

/*массивы
let books = ["Шинель","Война и мир","Колобок", "Вий"];
books.push("Репка");
books.push("Горе от ума");
console.log(books[books.length-1]); 
*/



let films = ["Гарри Поттер","Один дома","Форрест Гамп","Побег из Шоушенка","Крестный отец"]
for (let i=0; i < films.length; i++) {
    
console.log(films[i])
}

