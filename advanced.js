//Global variable statement
var statement = document.getElementById("currentStatement");
//Adds listeners for buttons
copyContentButtons = document.getElementsByClassName("copyContentButton"); //Direct copy buttons 
for(i = 0; i < copyContentButtons.length; i++) {
	copyContentButtons[i].addEventListener('click', function() {copyContentToCurrentStatement(this.textContent);}, false);
}
document.getElementById("clearStatementButton").addEventListener('click', clearStatement, false); //Clear button
document.getElementById("evaluteStatementButton").addEventListener('click', evaluateStatement, false); //Equals button
document.getElementById("deleteToTheLeftButton").addEventListener('click', deleteToTheLeft, false); //Del button
//Button functions
function copyContentToCurrentStatement(button) { //Most button functions
	statement.appendChild(document.createTextNode(button));
}
function clearStatement() { //Clear button function
	removeChildren(statement);
   	statement.appendChild(document.createTextNode(""));
}
function evaluateStatement() { //Equals button function
	var answer = document.getElementById("answer") 
	result = document.createTextNode(eval(statement.textContent));
   	removeChildren(statement);
   	removeChildren(answer);
   	answer.appendChild(result);
}
function deleteToTheLeft() { //Del button function
	newStatement = statement.textContent.substring(0, statement.textContent.length-1);
	removeChildren(statement);
	statement.appendChild(document.createTextNode(newStatement));
}
//Multi use functions
function removeChildren(item) {
   	while (item.hasChildNodes()) item.removeChild(item.firstChild);
}