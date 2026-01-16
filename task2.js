let number = prompt("Введите число:")

if (!isNaN(number) && number.trim() !== "") {
    let num = Number(number);

    if (num % 2 == 0) {
        console.log(`число ${num} является чётным`);
    } else {
        console.log(`число ${num} является нечётным`);
    }
} else {
    console.log("не является числом");
}
