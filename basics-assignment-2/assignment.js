function alertFn1 () {
    alert("Good morning");
}

function alertName (name) {
    alert(name);
}

function concatinateStrings(str1, str2, str3) {
    alert(str1 + str2 + str3);
}

alertFn1();
alertName('Niharika');

const task3Element = document.getElementById('task-3');
task3Element.addEventListener('click', alertFn1);

concatinateStrings('Hello', 'My', 'Sunshine');

