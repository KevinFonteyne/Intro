function hello() {
    console.log("Kevin Fonteyne");
}

function sayHello(name) {
    let lastName = "Fonteyne";

    console.log("Hello" + " " + name + " " + lastName + "!");
}

function exec1() {
    for (i = 0; i < 20; i++) {
        if (i != 7 && i != 13) {
            console.log(i);
        }
    }

    let name = "";
    if (!name) {
        console.error("I'm sorry, I can't get the name");
    }
}

function exec2() {
    let numbers = [123, 3, -1, 12, -123, 45, 10, 20, 203, -2, -29, 12, 123];
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        console.log(numbers[i]);
        total = total + numbers[i];
        if (number < 0) {
            console.log("is negative", number);
        }
    }
    console.log(total);
}

function sum(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

function init() {
    console.log("Intro Page");
    //access any DOM element
    hello();
    let myName = "Kevin";
    sayHello(myName);

    let res = sum(21, 21);
    exec1();

    exec2();
}

window.onload = init;
