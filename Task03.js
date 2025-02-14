// Напишите функцию, которая принимает строку и возвращает обратную строку
// Пример: "Привет мир" => "рим тевирП"

const reverseString = (str) => {
    return str.split("").reverse().join("");
}

console.log(reverseString("Привет мир"));