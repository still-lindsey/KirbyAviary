'use strict';
// please do not delete the 'use strict' line above

const getRandomRGB = () => {
  let randomRGB1 = _.random(0, 255);
  let randomRGB2 = _.random(0, 255);
  let randomRGB3 = _.random(0, 255);

  return `rgb(${randomRGB1},${randomRGB2},${randomRGB3})`;
}

const getRandomPosition = () => {
  let randomPosition=_.random(0,100);
  return `${randomPosition}%`;
}

let height = 100;
const decreaseHeight = (currentHeight) =>  {
  height=currentHeight - 2;
  return `${height}px`;
}

const registerEventHandlers = () => {
  document.getElementById('color-button').addEventListener('click', changeColor);
  document.getElementById('new-kirby-button').addEventListener('click', createKirby);
  document.getElementById('shrink-kirby-button').addEventListener('click', shrinkKirby);
  document.getElementById('fly-kirby-button').addEventListener('click', moveKirby);
}

document.addEventListener('DOMContentLoaded', registerEventHandlers);

//change color button
const changeColor = () =>  {
  document.body.style.backgroundColor= getRandomRGB();
  let buttons = document.querySelectorAll('button');
  for(let button of buttons){
    button.style.color= getRandomRGB();
    button.style.borderColor=getRandomRGB();
  }
  document.querySelector('span').style.color = document.querySelector('#new-kirby-button').style.color;
}


//multiply kirby button
const state = {
  kirbyCount: 1
};

const createKirby = () => {
  let kirbyLength = document.querySelectorAll('img').length;
  if(kirbyLength<514){
    for (let i=1; i<=kirbyLength; i++){
      let newKirby= document.createElement('img');
      newKirby.style.top= getRandomPosition();
      newKirby.style.left= getRandomPosition();
      newKirby.src = 'https://i.ibb.co/NWrRhhK/kirby-flying-adobespark.png';
      newKirby.alt='flying kirby';
      const element = document.querySelector('#kirby-container');
      element.appendChild(newKirby);
      state.kirbyCount = i + kirbyLength
      const counter = document.querySelector('span');
      counter.innerHTML = `Kirby Kount: ${state.kirbyCount}`;
    }
  }else{
    document.querySelector('#new-kirby-button').style.backgroundColor = 'grey'; 
    window.alert('Too many Kirbies!!!');
  }
  console.log('New Kirby button clicked!');
}

//shrink kirby button
const shrinkKirby = () => {
  let kirbys = document.querySelectorAll('img');
  for (let kirby of kirbys) {
    kirby.style.height = decreaseHeight(kirby.offsetHeight);
    console.log('Shrink kirby button clicked!');
  }
}

//fly kirby button
const moveKirby = () => {
  let kirbys=document.querySelectorAll('img')
  for (let i=0; i<kirbys.length; i++){
    kirbys[i].style.top = getRandomPosition();
    kirbys[i].style.left = getRandomPosition();
    console.log('Kirby button clicked!');
  }
}