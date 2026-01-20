let input = prompt("Введите строку или число:");
let number = Number(input);

if (isNaN(number) || input.trim() === "") {
    console.log("Ошибка: это не число");
} else {
    if (number > 100) {
        console.log("Число больше 100");
    } else if (number < 100) {
        console.log("Число меньше 100");
    } else {
        console.log("Число равно 100");
    }
}