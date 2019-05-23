var ufoData = data;
var len = ufoData.length;
console.log(len);

var tbody = d3.select("tbody");

function init(){
data.forEach(function(incident){

  var row = tbody.append("tr");
  Object.entries(incident).forEach(function([key,value]){

    var cell = tbody.append("td");
    cell.text(value);
  });
});
}

var filteredUfoData;

var dateElement = d3.select("#form-control-date");

var dateValue = dateElement.value;
console.log(dateValue);

function filtered_display(){
  ufoData.forEach(function(incident1){

    var row = tbody.append ("tr");
    Object.entries(incident1).forEach(function([key,value]){

      var cell = tbody.append("td");
      cell.text(value);
    });
});
}

function finalData(){
  if(dateValue !=""){
    ufoData = ufoData.filter(function(date){
      var day = date.date.time;
      
      return date.datetime === "dateValue";

      console.log(dateValue);
      console.log(date.datetime);
      filtered_display();
    });
}
}

function handleSubmit(){
  d3.select("tbody").selectAll("tr").remove();

  finalData();
  
  var _filter_btn=d3.select("filter-btn");

  _filter_btn.on("click",function(){
    handleSubmit();
    });
}

init();


