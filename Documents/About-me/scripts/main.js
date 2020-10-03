let myImage = document.querySelector('thinking.JPG');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('thinking.JPG');
    if(mySrc === 'pics/thinking.JPG') {
      myImage.setAttribute('thinking.JPG','pics/appalach.JPG');
    } else {
      myImage.setAttribute('appalach.JPG','pics/thinking.JPG');
    }
}

