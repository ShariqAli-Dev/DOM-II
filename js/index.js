 // Your code goes here
// HELELOOLOLO
/* Event
  * `mouseover`
  * `keydown`
  * `wheel`
  * `load`
  * `focus`
  * `resize`
  * `scroll`
  * `select`
  * `dblclick`
  * `drag / drop`
*/

// ### Variables ### //
const introImg = document.querySelector('.intro img');
const introH2 = document.querySelector('.intro h2');
const introP = document.querySelector('.intro p');


// ### Mouseover ### // 
introImg.addEventListener('mouseover', event => {
  introImg.src = 'https://i.ytimg.com/vi/v_cpPMjE0vU/maxresdefault.jpg';
  introImg.alt = 'picture of the cutest panda ever';
  
  introH2.textContent = 'Welcome To The Panda Zone!';
  
  introP.textContent = 'PANDA POO PANDA POO POO PANDA BANG POO PAW POW POW POAD';
})

// ### Keydown ###

