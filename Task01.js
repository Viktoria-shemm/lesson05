// Выведите в консоль таблицу степеней от 1 до 10 по аналогии как в уроке выводится таблица умножения

for (let a = 2; a <= 10; a++) {
    console.log("------");
    for (let m = 2; m <= 10; m++) {
        let result = a ** m;
        console.log(`${a} ^ ${m} = ${result}`);
    }
}
