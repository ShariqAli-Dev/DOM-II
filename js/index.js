// ### Mouseover ### // 
const introImg = document.querySelector('.intro img');
const introH2 = document.querySelector('.intro h2');
const introP = document.querySelector('.intro p');

introImg.addEventListener('mouseover', event => {
  introImg.src = 'https://i.ytimg.com/vi/v_cpPMjE0vU/maxresdefault.jpg';
  introImg.alt = 'picture of the cutest panda ever';
  
  introH2.textContent = 'Welcome To The Panda Zone!';
  
  introP.textContent = 'PANDA POO PANDA POO POO PANDA BANG POO PAW POW POW POAD';
})


// ### Keydown ###
// tracks keypresses, every 5 there is an alert message. the keypresses are saved to an array and every 5 in an array there is included a space
let keydownArray = [];

document.addEventListener('keydown', event => {
  keydownArray.push(event.key);
  if((keydownArray.length % 5 === 0) && (keydownArray.length !== 0)) {
    alert(`You have pressed a total of ${keydownArray.length} keys. Which are: \n ${keydownArray}`);
  }
})


// ### Wheel ### //
let scale = 0;

introImg.addEventListener('wheel', event => {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(.125, scale), 4);
  introImg.style.transform = `scale(${scale})`;
});


// ### Load ### //
window.addEventListener('load', () => {
  console.log('Page has loaded');
  alert('Page has loaded');
})


// ### Focus ### //
const contentImage = document.querySelector('.img-content img');

contentImage.addEventListener('focus', event => {
  console.log(event);
  event.target.style.color = 'white';
  contentImage.src = 'https://www.seattleaquarium.org/sites/default/files/images/sea%20otter.png';
  console.log(contentImage);
})


// ### Resize ### //
const mainNavigation = document.querySelector('.main-navigation');

window.addEventListener('resize', () => {
  mainNavigation.style.backgroundColor = 'red';
  console.log('Because you resized, the nav menue is now red!');
})


// ### Scroll ### //
createNavA = () => {
  let newAnchor = document.createElement('a');
  newAnchor.textContent = 'Ello Mate!';
  newAnchor.classList.add('nav-link');
  newAnchor.href = '#';
  newAnchor.textContent = 'testContent';
  document.querySelector('nav').prepend(newAnchor);
  return newAnchor;
}

let newAnchor = createNavA();
let windowHeight = window.outerHeight + window.innerHeight;
new Kursor({
  type: 0,
  removeDefaultCursor: true
});

document.addEventListener('scroll', () => {
  console.log(window.scrollY / 5);
  // if (0 > window.scroolY < windowheight *1/5)
  if((window.scrollY > 0) && (window.scrollY < (windowHeight / 5))) {
    changedCorsour.type = 1;
  }
  else if((window.scrollY > 0) && (window.scrollY < (windowHeight * 2 / 5 ))) {
    changedCorsour.type = 2;
  }
  else if((window.scrollY > 0) && (window.scrollY < (windowHeight * 3 / 5 ))) {
    changedCorsour.type = 3;
  }
  else if((window.scrollY > 0) && (window.scrollY < (windowHeight * 4 / 5 ))) {
    changedCorsour.type = 4;
  }
  else if((window.scrollY > 0) && (window.scrollY < windowHeight)) {
    changedCorsour.type = 5;
  }
})


// ### Select ### //
let inputButton = document.createElement('input');
inputButton.value = 'OWA OWA OWA OWA';
let inputP = document.createElement('p');
inputP.id = 'log';
const textContentDiv = document.querySelector('.text-content');
textContentDiv.prepend(inputButton, inputP)

document.querySelector('input').addEventListener('select', event => {
  console.log(event);
  const selectedItems = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  console.log
  inputButton.value = selectedItems;
  inputButton.style.color = 'red';
});


// ### dbClick ### //
const notSusButton = document.createElement('button')
notSusButton.textContent = 'Press Me If You Dare';
notSusButton.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

document.querySelector('nav').prepend(notSusButton);
console.log(notSusButton);

notSusButton.addEventListener('dbClick', () => {
  window.location = this.href;
});


// ### Drag / Drop ### //


