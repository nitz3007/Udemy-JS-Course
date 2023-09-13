const h1 = document.querySelector('h1');
h1.textContent = 'Hey There!';
h1.style.color = 'white';
h1.style.backgroundColor = 'red';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' Changed!';

const AllListElements = document.querySelectorAll('li');
for(const listEl of AllListElements) {
    console.dir(listEl);
}