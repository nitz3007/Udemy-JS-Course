const button = document.querySelector('button');
const output = document.querySelector('p');

//Promisifying navigator API
const getPosition = (opt) => {
  const promise = new Promise((resolve, reject)=> {
    navigator.geolocation.getCurrentPosition((success)=>{
      resolve(success);
    },
    (error)=>{
      reject(error);
    },
    opt);
  });
  return promise;
}
//Promisifying a Browser API: setTimeout()
const setTimer = duration => {
  const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Promise resolved!');
    }, duration);
  });
  return promise;
}

function trackUserHandler() {
  //Promise chaining
  let positionData;
  getPosition()
  .then(pos=>{
    positionData = pos;
    return setTimer(2000);
  })
  .catch((err)=>{
    console.log(err);
    return 'error occured!!!';
  })
  .then(data => {
    console.log(data, positionData);
  })
  // navigator.geolocation.getCurrentPosition(
  //   posDetail => {
  //     setTimer(2000).then(data => {
  //       console.log(data, posDetail);
  //     });
  //   },
  //   error => {
  //     console.log(error)
  //   }
  // )
  setTimeout(()=>{
    console.log('Timer Done')
  }, 0);
  console.log('Getting position...')
}

button.addEventListener('click', trackUserHandler);