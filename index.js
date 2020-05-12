//global variables
const firstDiv = document.getElementById('first');
const secondDiv = document.getElementById('second');
const thirdDiv = document.getElementById('third');

//Clear screen between updates
const clear = () => {
  let circles = document.querySelectorAll("#circle");
  for(let i = 0; i < circles.length; i++){
    circles[i].remove();
  }
}

const zeroShift = (hourArray, minArray, secArray) => {
  switch(hourArray.length) {
    case 1:
      hourArray.unshift('0','0','0','0');
      break;
    case 2:
      hourArray.unshift('0','0','0');
      break;
    case 3:
      hourArray.unshift('0','0');
      break;
    case 4:
      hourArray.unshift('0');
      break;
    default:
      break;
  }
  switch(minArray.length) {
    case 1:
      minArray.unshift('0','0','0','0','0');
      break;
    case 2:
      minArray.unshift('0','0','0','0');
      break;
    case 3:
      minArray.unshift('0','0','0');
      break;
    case 4:
      minArray.unshift('0','0');
      break;
    case 5:
      minArray.unshift('0');
    default:
      break;
  }
  switch(secArray.length) {
    case 1:
      secArray.unshift('0','0','0','0','0');
      break;
    case 2:
      secArray.unshift('0','0','0','0');
      break;
    case 3:
      secArray.unshift('0','0','0');
      break;
    case 4:
      secArray.unshift('0','0');
      break;
    case 5:
      secArray.unshift('0');
    default:
      break;
  }
}
const toggle = (array, div) =>{
  for(let i = 0; i < array.length; i++){
    const circle = document.createElement("div");
    circle.id = "circle";
    if(array[i] == '1'){
      circle.className = "circleOn";
    } else if (array[i] == 0) {
      circle.className = "circleOff";
    }
    div.appendChild(circle);
  }
}
//Create the "pixels" that we'll toggle 'off and on'
const createPixels = (hourBin, minBin, secBin) =>{
  let hourArray = hourBin.split("");
  let minArray = minBin.split("");
  let secArray = secBin.split("");
  zeroShift(hourArray, minArray, secArray);
  clear();
  toggle(hourArray, firstDiv);
  toggle(minArray, secondDiv);
  toggle(secArray, thirdDiv);

}
//convertToBin converts the current time represeted on a 24hr clock into its binary counterparts
const convertToBin = (hour, minutes, seconds) =>{
  const hourBin = (hour).toString(2);
  const minBin = (minutes).toString(2);
  const secBin = (seconds).toString(2);
  createPixels(hourBin, minBin, secBin);
}

/*getTime grabs the current time and seperates them into hour, minute, second variable
* and then passes those to the convertToBin method
*/
const getTime = () =>{
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  convertToBin(hour, minutes, seconds);
  var t = setTimeout(getTime, 1000); //built in
}
//main function calls getTime method
(function main(){
  getTime();
})();
