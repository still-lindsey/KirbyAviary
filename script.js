'use strict';
// please do not delete the 'use strict' line above

function getRandomRGB() {
  let randomRGB1 = _.random(0, 255);
  let randomRGB2 = _.random(0, 255);
  let randomRGB3 = _.random(0, 255);

  return `rgb(${randomRGB1},${randomRGB2},${randomRGB3})`;
}

function getRandomPostion(){
  let randomPosition=_.random(0,100)
  return `${randomPosition}%`
}


let height = 100;
function decreaseHeight(currentHeight) {
  height=currentHeight - 2;
  return `${height}px`;
}

document.getElementById('color-button').addEventListener('click', changeColor)

let instance=1

function changeColor() {
  document.body.style.backgroundColor= getRandomRGB()//side effect
  let buttons =document.querySelectorAll("button")
  for(let button of buttons){
    button.style.color= getRandomRGB()
    button.style.borderColor=getRandomRGB()
  }

  if(instance===1){
    document.querySelector("#new-kirby-button").style.display="block"
  }
  instance=2//only happens once

  console.log('Color button clicked!'); // feel free to change/delete this line
}

document.getElementById("kirby-button").addEventListener("click", moveKirby);


function moveKirby(){
  let kirbys=document.querySelectorAll("img")

  for (let i=0; i<kirbys.length; i++){
    kirbys[i].style.top = getRandomPostion();
    kirbys[i].style.left = getRandomPostion();
    console.log("Kirby button clicked!");
  }
}

document.getElementById("new-kirby-button").addEventListener("click", createKirby);

function createKirby(){
  let kirbyLength = document.querySelectorAll("img").length


  if(kirbyLength<500){
    for (let i=1; i<=kirbyLength; i++){
      let newKirby= document.createElement("img")

      let flyKirbyButton= document.querySelector("#kirby-button")
      let addKirbyButton= document.querySelector("#new-kirby-button")
      let shrinkKirbyButton= document.querySelector("#shrink-kirby-button")

      newKirby.style.top= getRandomPostion()

      newKirby.style.left= getRandomPostion()

      newKirby.src = "https://i.ibb.co/NWrRhhK/kirby-flying-adobespark.png";

      newKirby.alt="flying kirby"

      document.body.appendChild(newKirby)

      addKirbyButton.innerHTML="Multiply Kirbies"
      flyKirbyButton.innerHTML="Fly Kirbies"
      shrinkKirbyButton.innerHTML="Shrink Kirbies"

      document.querySelector("#shrink-kirby-button").style.display = "block";
    }
  }else{
    document.querySelector("#new-kirby-button").style.display = "none"; 
    
    window.alert("Too many Kirbies!!!")
  }

  console.log("New Kirby button clicked!");
}

document
  .getElementById("shrink-kirby-button")
  .addEventListener("click", shrinkKirby);

function shrinkKirby(){
  let kirbys = document.querySelectorAll("img");
  for (let kirby of kirbys) {
    kirby.style.height = decreaseHeight(kirby.offsetHeight);
    console.log("Shrink kirby button clicked!");
  }
  document.querySelector("#kirby-button").style.display = "block";
}
