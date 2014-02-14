'use strict';

var schellingModel = {
	similar:0,
	red:0, 
	blue:0,
	empty:0,
	size:40,
	delay:0,
	
	cell: [],
	UNOCCUPIED: 0,
	EMPTY: 1,
	RED: 2,
	BLUE: 3 
};

schellingModel.drawGrid = function(){
	var table = '<table border="0" class="board" id="table">';
	
	for(var i = 0; i < schellingModel.size; ++i){
		table += '<tr>';
		for(var j = 0; j < schellingModel.size; ++j){
			table += '<td>' + j + '</td>';
		}
		table += '</tr>';
	}
	$('#board').append(table + "</table>");
}


$(schellingModel.drawGrid);
