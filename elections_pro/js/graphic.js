//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "1U6mXptATstdy0JIrMRDTVRjThDTCdiZdmT9fZAQsvrU";

  //test commune
  //  var key =  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS476aGqFWoy3K45VIqIzaldg3sohU8k98i40H3muDpc5AUQPxutWKGxOHVbcNc1nwcVYG-AnPL3MEj/pubhtml"

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [{
  "data": "Préfecture",
  "title": "Préfecture"
}, {
  "data": "Type",
  "title": "Type"
}, {
  "data": "Collectivité",
  "title": "Collectivité"
}, 

{
  "data": "Votants",
  "title": "Votants"
}, 

{
  "data": "1ER PLACE",
  "title": "1. Part des voix"
},
{
  "data": "2E PLACE",
  "title": "2. Part des voix"
},
{
  "data": "3PLACE",
  "title": "2. Part des voix"
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
      "info": false,
      "columns": columns,
      "order": [
        [0, "asc"]
      ], //order on second column
      "pagingType": "numbers", //no page numbers
      
        //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
      
    });
  }
});
//end of writeTable
