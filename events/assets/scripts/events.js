const btn = document.querySelector('button');

const div = document.querySelector('div');

const buttonClickHandler = (event) => {
    console.log(event);
    event.target.disabled =true;
}

// btn.addEventListener('click', buttonClickHandler);

// Infinite Scroll Feature
// let currentElementNum = 0;
// const scrollHandler = () => {
//     const distanceToBottom = document.body.getBoundingClientRect().bottom;

//     if(distanceToBottom < document.documentElement.clientHeight + 150) {
//         const newDataElement = document.createElement('div');
//         currentElementNum++;
//         newDataElement.innerHTML = `<p>Element: ${currentElementNum}</p>`
//         document.body.append(newDataElement);
//     }
// }
// window.addEventListener('scroll', scrollHandler);


//     btn.removeEventListener('click', buttonClickHandler);
// }, 3000);

const formEl = document.querySelector('form');
formEl.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(event);
});

//event propagation and stopPropagation() method
div.addEventListener('click',  (event)=>{
    console.log('DIV CLICKED');
    console.log(event);
});

btn.addEventListener('click', (event)=>{
    event.stopPropagation();
    console.log('BUTTON CLICKED');
    console.log(event);
});

//event delegation
const list = document.querySelector('ul');
list.addEventListener('click', (event)=>{
    // console.log(event.currentTarget);
    // event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');
    //triggering DOM Programmatically
    btn.click();
})