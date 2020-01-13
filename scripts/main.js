//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

//alert('hello!');


//let myHTML = document.querySelector('html');
//myHTML.onclick = alert('别戳我，我怕疼。');

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lamb.png') {
      myImage.setAttribute('src', 'images/sheep.png');
    } else {
      myImage.setAttribute('src', 'images/lamb.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please input your name:');
  if(!myName || myName === null) {
    //setUserName();
    pass;
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'SHEEP IS COMING，' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'SHEEP IS COMING，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}

/*
这里的所有内容
都是注释。
*/


// 这是一条注释。