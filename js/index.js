const greetings = 'Hello Script!';
alert(greetings);

let userName; //undefine
userName = prompt('Enter your name');
alert('Hello ' + userName);

const userAge = parseFloat(prompt('Enter you age'));
alert('You age is ' + userAge);

const nextAge = addOne(userAge);
alert('Next year you will be' + nextAge);

if (Number.isNaN(userAge)) {
    alert('Wrong age!');
} else if (userAge >= 18) { // > < >= <= === !== && ||
    alert('You are adult!');
} else {
    alert('You are too young');
}

function addOne (input){
    const result = input + 1;
    return result;
}