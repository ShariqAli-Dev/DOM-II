// ### Variables ### //
const introImg = document.querySelector('.intro img');
const introH2 = document.querySelector('.intro h2');
const introP = document.querySelector('.intro p');

let keydownArray = [];


// ### Mouseover ### // 
introImg.addEventListener('mouseover', event => {
  introImg.src = 'https://i.ytimg.com/vi/v_cpPMjE0vU/maxresdefault.jpg';
  introImg.alt = 'picture of the cutest panda ever';
  
  introH2.textContent = 'Welcome To The Panda Zone!';
  
  introP.textContent = 'PANDA POO PANDA POO POO PANDA BANG POO PAW POW POW POAD';
})


// ### Keydown ###
// tracks keypresses, every 5 there is an alert message. the keypresses are saved to an array and every 5 in an array there is included a space
document.addEventListener('keydown', event => {
  keydownArray.push(event.key);
  if((keydownArray.length % 5 === 0) && (keydownArray.length !== 0)) {
    alert(`You have pressed a total of ${keydownArray.length} keys. Which are: \n ${keydownArray}`);
  }
})


// ### Wheel ### //


// ### Load ### //


// ### Focus ### //


// ### Resize ### //


// ### Scroll ### //


// ### Select ### //


// ### dbClick ### //


// ### Drag / Drop ### //


