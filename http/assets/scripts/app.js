const listElement = document.querySelector('.posts');
const postTemplate = document.querySelector('#single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postLists = document.querySelector('ul');

//Using XMLHttpRequest API
// const sendHttpRequest = (method, url, data) => {
//     const promise = new Promise((resolve, reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.responseType = 'json';
//         xhr.onload = function() {
//             if(xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.response);
//             } else {
//                 reject(new Error('Something went wrong!'));
//             }
           
//         }

//         xhr.onerror = function() {
//             reject(new Error('Failed to send request!'));
//         }
//         xhr.send(JSON.stringify(data));
//     });
//     return promise;
// }

//Using fetch() API
const sendHttpRequest = (method,url,data) => {
    return fetch(url,{
        method: method,
        data: data
    }).then(response => {
        if(response.status >= 200 && response.status < 300) {
            return response.json()
        }
        else {
            return response.json().then(errData => {
                console.log(errData);
                throw new Error(errData);
            })
        }
    })
    // .catch(error => {
        //this catch block only catches technical errors ie. errors on & above 500
    //     console.log(error);
    //     throw new Error('Something went wrong!');
    // });
}

const fetchPosts = async() => {
    try {
        const listOfPosts = await sendHttpRequest('GET','https://jsonplaceholder.typicode.com/posts');
        for(const post of listOfPosts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
        }
    } catch(error) {
        alert(error.message);
    }
   
}

const createPost = async(title, body) => {
    const userId = Math.random();
    //JSON data
    // const post = {
    //     title: title,
    //     body: body,
    //     userId: userId,
    // }

    const fd = new FormData();
    fd.append('title', title);
    fd.append('body', body);
    fd.append('userId', userId);
    console.log(fd)
    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd)
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = event.currentTarget.querySelector('#title').value;
    const body = event.currentTarget.querySelector('#content').value;
    createPost();
})

postLists.addEventListener('click', (event)=>{
    if(event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`)
    }
    console.log( );
})
