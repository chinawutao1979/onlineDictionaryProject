$(document).ready(function () {
  $("#onLookup").click(lookupWord);
  $(document).keydown(function (event) {
    if(event.keyCode == 13){
      lookupWord();
    }   
  });
});

function lookupWord() {
  $.ajax({
    //url: "http://localhost:3000/searchWord",
    url: "https://online-dictionary-project.herokuapp.com/searchWord",
    type: "get",
    data: { term: $("#term").val() },
    dataType: "json",
    success: showResult,
    error: noResult,
  });
}
function showResult(data) {
  $("#tbodyid").empty();  
  if($("#term").val().trim()==""){
    $("#tbodyid").append(
    "<th>Sorry,The term was not inputed. Please input the term. </th>"
    );
  }else if(data.length == 0){
    $("#tbodyid").append(
      "<th>Sorry,The word ( "+$("#term").val()+" ) was not found in [englishdictionary]. Please change another word. </th>"
    );
  }else{
    $("#word").html($("#term").val());
    for (var i in data) {
      $("#tbodyid").append(
        "<tr><td>" +
          (parseInt(i) + 1) +
          " (" +
          data[i].wordtype +
          ")" +
          " :: " +
          data[i].definition +
          "</td></tr>"
      );
    }
  }
  
}
function noResult(error) {
  alert(error.responseText);
  console.log("error= " + error.responseText);
}
