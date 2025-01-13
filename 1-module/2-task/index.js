function print(text) {
  console.log(text);
}

function isValid(name) {
  if (name) {
    return ((name.indexOf(' ') < 0) && (name.length >= 4));
  } return false;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
