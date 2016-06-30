
$(document).ready(function(){
  var container = $('.container');
  var numOfRows = $('#numOfRows');
  var numOfCols = $('#numOfCols');

  var plusColBtn = $('#plusCol');
  var minusColBtn = $('#minusCol');
  var plusRowBtn = $('#plusRow');
  var minusRowBtn = $('#minusRow');

  var initGridBtn = $('#initGridBtn');
  var colorClasses = ['white', 'red', 'green', 'blue'];
  var colorCycle = colorClasses.length-4;


  initGrid();
  addClickHandlers();

  plusColBtn.on('click', addCol);
  minusColBtn.on('click', minusCol);
  plusRowBtn.on('click', addRow);
  minusRowBtn.on('click', minusRow);


function addCol(){
  if(+numOfCols.text() > 101){
    numOfCols.text("10");
  } else {
  numOfCols.text(+numOfCols.text() + 1);
  }
  initGrid();
}
function minusCol(){
  if(+numOfCols.text() <= 11){
    numOfCols.text("10");
  } else {
    numOfCols.text(+numOfCols.text() -1);
  }
  initGrid();
}
function addRow(){
  if(+numOfRows.text() > 100){
    numOfRows.text('10');
  } else {
    numOfRows.text(+numOfRows.text() + 1);
  }
  initGrid();
}
function minusRow(){
  if(+numOfRows.text() <= 11){
    numOfRows.text('10');
  } else {
    numOfRows.text(+numOfRows.text() - 1);
  }
  initGrid();
}

function addClickHandlers(){
  var cells = $('.cell');
  cells.on('click', changeColor);
}


function changeColor( ){
  if (+colorCycle.text < 3){
    +colorCycle.text() + 1;
  } else {
    colorCycle.text = (colorClasses.length - 4);
  }
  var color = colorClasses [colorCycle];
  $(this).removeClass(colorClasses.join(' '));
  $(this).addClass(color);
  console.log(colorCycle);
}



  function initGrid(){
    container.html('');
    for(var i = 0; i< +numOfRows.text(); i += 1){
      var row = $('<div></div>');
      row.addClass('row');
      for(var j = 0; j < +numOfCols.text(); j += 1){
        var cell = $('<div></div>');
        cell.addClass('cell border');
        row.append(cell);
      }
      container.append(row);
    }
  }
});
