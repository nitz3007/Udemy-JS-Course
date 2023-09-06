const sayHello = name => (
  console.log('Hi ' + name)
);

const sayHello1 = (greeting, name = 'Ballu') => (
  console.log(greeting + ' ' + name)
);

const sayHello2 = () => (
  console.log('Hi There!')
);

const sayHello3 = (name = 'Bindu') => {
  return ('Hello ' + name);
};

const callbackFunction = () => {
  console.log('Callback function called!')
};

const checkInput = (callback, ...strings) => {
  for(const str of strings) {
    if(str === '') {
      return;
    }
  }
  callback();
}

sayHello('Niharika');
sayHello1('Hey', 'Sparsh');
sayHello2();
sayHello3('Kritika');
checkInput(callbackFunction, 'abc', 'def', 'wer', '', 'iop');