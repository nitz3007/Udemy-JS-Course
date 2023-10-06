const h1 = document.querySelector('h1');
h1.textContent = 'Hey There!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' Changed!';

const AllListElements = document.querySelectorAll('li');
for(const listEl of AllListElements) {
    console.dir(listEl);
}

const section = document.querySelector('section');
const button = document.querySelector('button');
button.addEventListener('click', ()=> {
    // if( section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.className = 'red-bg visible';
    // }

    console.log(section.classList);
    section.classList.toggle('visible');
    section.classList.toggle('invisible');
})
