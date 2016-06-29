
$(document).ready(function(){
  var container = $('.container');
  var numOfRows = $('#numOfRows');
  var numOfCols = $('#numOfCols');
  var plusColBtn = $('#plusCol');
  var minusColBtn = $('#minusCol');
  var plusRowBtn = $('#plusRow');
  var minusRowBtn = $('#minusRow');

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
}
function minusCol(){
  if(+numOfCols.text() <= 11){
    numOfCols.text("10");
  } else {
    numOfCols.text(+numOfCols.text() -1);
  }
}
function addRow(){
  if(+numOfRows.text() > 100){
    numOfRows.text('10');
  } else {
    numOfRows.text(+numOfRows.text() + 1);
  }
}
function minusRow(){
  if(+numOfRows.text() <= 11){
    numOfRows.text('10');
  } else {
    numOfRows.text(+numOfRows.text() - 1);
  }
}

function addClickHandlers(){
  var cells = $('.cell');
  cells.on('click', changeColor);

function changeColor( ){
  var colorClasses = ['white', 'red', 'green', 'blue'];
  var colorCycle = Math.round(Math.random() * (colorClasses.length-1));
  var color = colorClasses [colorCycle];
  $(this).removeClass(colorClasses.join(' '));
  $(this).addClass(color);
}
  }
  function initGrid(){
    for(var i = 0; i< +numOfRows; i += 1){
      var row = $('<div></div>');
      row.addClass('row');
      for(var j = 0; j < +numOfCols; j += 1){
        var cell = $('<div></div>');
        cell.addClass('cell border');
        row.append(cell);
      }
      container.append(row);
    }
  }
});
