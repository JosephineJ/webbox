
(function(){

  function buildTable(entries){

    function createTableHeader(tableEl, data){
      var headerTitles = Object.keys(data[0]);
      var headerCell;
      var headerRow = document.createElement('tr');
      tableEl.appendChild(headerRow);
      headerTitles.forEach(function(prop){
        headerCell = document.createElement('th');
        headerRow.appendChild(headerCell);
        headerCell.textContent = prop;
      });
    }

    function createTableBody(tableEl, data){
      var bodyRow,
          bodyCell;
      data.forEach(function(dataObj){
        bodyRow = document.createElement('tr');
        tableEl.appendChild(bodyRow);
        for (var key in dataObj){
          bodyCell = document.createElement('td');
          if (!isNaN(dataObj[key])){
            bodyCell.style.textAlign = "right";
          }
          bodyRow.appendChild(bodyCell);
          bodyCell.textContent = dataObj[key];
        }
      });
    }


    var parentEl = document.getElementById('tableWrapper');
    var table = document.createElement('table');
    parentEl.appendChild(table);




    createTableHeader(table, entries);
    createTableBody(table, entries);
  }

  buildTable(MOUNTAINS);
  
})();