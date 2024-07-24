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
  if((keydownArray.length % 5 === 0) && (keydownArray.length > 0)) {
    alert(`You have pressed a total of ${keydownArray.length} keys. Which are: \n ${keydownArray}`);
  }
  console.log(event);
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
document.addEventListener('scroll', event => {
  setInterval(() => {
    console.log(`Your Mouse's Y Position: ${window.scrollY}`);
  }, 10000)
});


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
let dragContainer = document.createElement('div');
// dragContainer.classList.add('drag-container');

let p1 = document.createElement('p');
// p1.classList.add('draggable');
p1.draggable = 'true';
p1.textContent = '1';

let p2 = document.createElement('p');
// p2.classList.add('draggable');
p2.draggable = 'true';
p2.textContent = '2';

let p3 = document.createElement('p');
// p3.classList.add('draggable');
p3.draggable = 'true';
p3.textContent = '3';

let p4 = document.createElement('p');
// p4.classList.add('draggable');
p4.draggable = 'true';
p4.textContent = '4';

// CSS COMPONENTS FOR DIV AND P //
dragContainer.style.backgroundColor = 'dimgray';
dragContainer.style.padding = '1rem';
dragContainer.style.marginTop = '1rem';

p1.style.padding = '1rem';
p1.style.backgroundColor = 'white';
p1.style.border = '1px solid black';
p1.style.cursor = 'move';

p2.style.padding = '1rem';
p2.style.backgroundColor = 'white';
p2.style.border = '1px solid black';
p2.style.cursor = 'move';

p3.style.padding = '1rem';
p3.style.backgroundColor = 'white';
p3.style.border = '1px solid black';
p3.style.cursor = 'move';

p4.style.padding = '1rem';
p4.style.backgroundColor = 'white';
p4.style.border = '1px solid black';
p4.style.cursor = 'move';

// cloning dragContanier --> dragContainer2
let dragContainer2 = dragContainer.cloneNode(true);

// appending p1 p2 to containerDiv
dragContainer.append(p1);
dragContainer.append(p2);
dragContainer2.append(p3);
dragContainer2.append(p4);

// appending to document
let body = document.querySelector('body');
body.append(dragContainer, dragContainer2);


// Funcationality to JS Dom Elements [drag/drop]
let draggableElementsArray = [p1, p2, p3, p4];
let containersArray = [dragContainer, dragContainer2];

// checking if the event is being dragged
draggableElementsArray.forEach(element => {
  element.addEventListener('dragstart', () => {
    element.classList.add('beingDragged');
  });

  element.addEventListener('dragend', () => {
    element.classList.remove('beingDragged');
  });
});

// Placing element into array
containersArray.forEach(container => {
  container.addEventListener('dragover', event => {
    event.preventDefault();
    let draggableElement = document.querySelector('.beingDragged');
    container.appendChild(draggableElement);
  });
});




