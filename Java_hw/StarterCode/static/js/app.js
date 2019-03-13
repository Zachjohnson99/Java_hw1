// from data.js
var tableData = data;

var tbody = d3.select("#tbody");

var filterBtn = d3.select("#filter-btn");

var inputField = d3.select("#datetime");

var submit = d3.select("#filter-btn"); 


var inputDate = d3.select("#datetime");

// function
function loadTableData(filterdata) {
  
  d3.select("tbody")
  
    .selectAll("tr")
  
    .data(filterdata)
  
    .enter()
  
    .append("tr")
  
    .html(function(d) {
  
      return `<td>${d.datetime}</td> <td>${d.city}</td> <td>${d.state}</td> <td>${d.country}</td>
  
              <td>${d.shape}</td> <td>${d.durationMinutes}</td> <td>${d.comments}</td>     `;
  
    });
  };
submit.on("click", function() {

    // Prevent the page from refreshing
  d3.event.preventDefault();
  
    // Get the value property of the input element
  var inputValue = inputDate.property("value");
  console.log(inputValue);
    
  
    // Create Filtered dataset based on InputValue entered by user
  if (inputValue) {
  var filterdata = tableData.filter(onerec => onerec.datetime === inputValue);}
  console.log(filterdata);
   
    // Build new UFO Table with the filtered subset of UFO Sighting data
    
  loadTableData(filterdata);
});
