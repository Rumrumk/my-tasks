let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");


age = Number(age);

if (age < 18) {
    console.log(`Привет, ${name}! Ты ещё школьник.`);
} else if (age >= 18 && age <= 65) {
    console.log(`Привет, ${name}! Ты взрослый человек, заходи.`);
} else if (age > 65) {
    console.log(`Привет, ${name}! Для возрастных лиц у нас скидки.`);
} else {
    console.log("Ошибка: введен некорректный возраст");
}