const container = document.getElementById('container')

// for (i=0; i <= 5000;i++){
//     const div = document.createElement('div')
//       div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
//       div.addEventListener('mouseover',e=>e.target.classList.add('my-color-class')) 


//     container.appendChild(div)
// }
function makeRows(rows,cols){
  container.style.setProperty('--grid-rows', rows)
  container.style.setProperty('--grid-cols', cols)
  for (lcv = 0; lcv<(rows*cols);lcv++){
    let cell = document.createElement('div');
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover',e=>e.target.classList.add('my-color-class'))
    // cell.style
  }
}
makeRows(64,64);
