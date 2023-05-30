const container = document.getElementById('container')
let numOfRows
let numOfCols
const pixelsButton = document.getElementById('pixels')
// for (i=0; i <= 5000;i++){
//     const div = document.createElement('div')
//       div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
//       div.addEventListener('mouseover',e=>e.target.classList.add('my-color-class')) 


//     container.appendChild(div)
// }
function makeRows(rows,cols){
  if (rows===undefined && cols===undefined){
    rows =16
    cols = 16
  }
  container.style.setProperty('--grid-rows', rows)
  container.style.setProperty('--grid-cols', cols)
  for (lcv = 0; lcv<(rows*cols);lcv++){
    let cell = document.createElement('div');
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover',e=>e.target.classList.add('my-color-class'))
    
  }
  console.log('called')
}


pixelsButton.addEventListener("click",getNumofPixels)
function getNumofPixels(){
  
  rows = parseInt(prompt('number of rows you want:'))
  cols = parseInt(prompt('number of columns you want: '))
  if(rows>100|| cols>100){
    rows = 100
    cols = 100
  }
  numOfRows = rows
  numOfCols = cols
  removeStyles()
  makeRows(numOfRows,numOfCols)
  
  
}
function removeStyles(){
  numOfCells = container.childElementCount
  for (lcv = 0; lcv < numOfCells;lcv++){
    container.lastElementChild.remove();

  }
  

  
}

makeRows(numOfRows,numOfCols);