let Todo = "";
const namefield=document.querySelector("#TodoField");
const sectionTag = document.querySelector("section");

document.querySelector('#todoListForm').addEventListener("submit", function(event){
console.log("Submitting the form");
event.preventDefault( );
var value = $("#ToDoFeild").val();
$("#myList").append( "<li>"+value+"</li>" )
})