//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "1wl4yU6GbuWw0posmuYX1OPJcOMW29Sz9ltREOD4meTA";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [{
  "data": "epci",
  "title": "Libellé EPCI"
}, {
  "data": "nature",
  "title": "Nature juridique"
}, {
  "data": "population",
  "title": "Population"
}, {
  "data": "t2017",
  "title": "Taux intercommunal TH 2017"
},
{
  "data": "t2018",
  "title": "Taux intercommunal voté TH 2018"
},
{
  "data": "evolution",
  "title": "Évolution en points"
}




];

$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  //cdn.datatables.net/plug-ins/1.10.19/i18n/French.json

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive" id="mySelection"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#mySelection").DataTable({
      "autoWidth": false,
      "language": {
        "lengthMenu": "_MENU_ entrées affichées",
        "search": "Recherchez :",
        "paginate": {
          "previous": "précédente",
          "next": "suivante"
        }
       },
      "data": data,
      "columns": columns,
      "order": [
        [1, "desc"]
      ], //order on second column
      "pagingType": "numbers", //no page numbers
      "info": false,
        //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
      
    });
  }
});
//end of writeTable
