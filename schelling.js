'use strict';

var schellingModel =
{
    similar:0,
    red:0,
    blue:0,
    empty:0,
    size:40,
    delay:0,
    cell:[],
    UNOCCUPIED: 0,
    EMPTY: 1,
    RED: 2,
    BLUE: 3
};

schellingModel.setUpGrid = function()
{
    var table = '<table border="0" class="board" id="table">';

    for(var i = 0; i < schellingModel.size; ++i)
    {
        table += '<tr>';
        for(var j = 0; j < schellingModel.size; ++j)
        {
            table += '<td id="r'+i+'c'+j+'"></td>';
        }
        table += '</tr>';
    }
    $('#board').append(table + "</table>");
}

schellingModel.setUpBoard = function()
{
    var size = schellingModel.size;

    for(var i = 0;  i < size; ++i)
    {
        schellingModel.cell[i] = new Array(size);
    }

}

schellingModel.getValues = function()
{
    board.similar = $("#similar").val();
    board.red = $("#color").val();
    board.blue = 100 - $("#color").val();
    board.size = $("#size").val();
    board.delay = $("#delay").val();
}

schellingModel.fillCells = function()
{
    var size = schellingModel.size;
    for(var i = 0; i < size; ++i)
    {
        for(var j = 0; j < size; ++j)
        {
            var randNumber = Math.floor(Math.random() * 100) + 1;
            if(randNumber <= board.empty)
            {
                schellingModel.cell[i][j] = board.EMPTY;
            }
            else
            {
                var rNumber = Math.floor(Math.random()* 100) + 1;
                if(rNumber <= board.red)
                {
                    schellingModel.cell[i][j] = board.RED;
                }
                else
                {
                    schellingModel.cell[i][j] = board.BLUE;
                }
            }
        }
    }
}

schellingModel.colorGrid = function()
{
    var size = schellingModel.size;

    for(var i = 0; i < size; ++i)
    {
        for(var j = 0; j < size; ++j)
        {
            var $celTable = $("#r"+i+"c"+j);
            $celTable.removeClass();
            var valBoardCell = schellingModel.cell[i][j];
            switch(valBoardCell)
            {
            case schellingModel.EMPTY:
                $cellTable.addClass("empty");
		$cellTable.css();
                break;
            case schellingModel.RED:
                $cellTable.addClass("red");
                break;
            case schellingModel.BLUE:
                $cellTable.addClass("blue");
                break;
            }
        }
    }
}

schellingModel.start = function()
{
    schellingModel.setUpGrid();
    schellingModel.getValues();
    schellingModel.setUpBoard();
    schellingModel.fillCells();
    schellingModel.colorGrid();
}

$('document').ready(function(){
    schellingModel.setUpGrid();
    schellingModel.getValues();
    schellingModel.setUpBoard();
    schellingModel.fillCells();
    schellingModel.colorGrid();
});
