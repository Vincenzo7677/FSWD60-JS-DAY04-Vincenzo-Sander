var copyContentButtons = document.getElementsByClassName("copyContentButton");
for(i = 0; i < copyContentButtons.length; i++) {
	copyContentButtons[i].addEventListener('click', function() {copyContentToCurrentStatement(this.textContent);}, false);
}

function copyContentToCurrentStatement(button) {
	console.log(button);
	var statement = document.getElementById("currentStatement")
	statement.appendChild(document.createTextNode(button));
}

var clearStatementButton = document.getElementById("clearStatementButton");
clearStatementButton.addEventListener('click', clearStatement, false);

function clearStatement() {
	var statement = document.getElementById("currentStatement")
	removeChildren(statement);
   	statement.appendChild(document.createTextNode(""));
}

var evaluteStatementButton = document.getElementById("evaluteStatementButton");
evaluteStatementButton.addEventListener('click', evaluateStatement, false);

function evaluateStatement() {
	var statement = document.getElementById("currentStatement");
	var answer = document.getElementById("answer")
	var result = eval(statement.textContent);
   	removeChildren(statement);
   	removeChildren(answer);
   	answer.appendChild(document.createTextNode(result));
}

var deleteToTheLeftButton = document.getElementById("deleteToTheLeftButton");
deleteToTheLeftButton.addEventListener('click', deleteToTheLeft, false);

function deleteToTheLeft() {
	var statement = document.getElementById("currentStatement");
	newStatement = statement.textContent.substring(0, statement.textContent.length-1);
	removeChildren(statement);
	statement.appendChild(document.createTextNode(newStatement));
}


function removeChildren(item) {
   	while (item.hasChildNodes()) {
    	item.removeChild(item.firstChild);
   	}
}