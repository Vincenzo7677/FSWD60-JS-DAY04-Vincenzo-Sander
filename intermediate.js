//Create object hotel
var Hotel = {
	//Generate availableNights randomly between 1 and 10
    availableNights: Math.floor((Math.random()*9)+1),
    //Create function checkAvailability with parameter nights
    checkAvailability: function(nights) {
    	//Set availability to false
    	isAvailable = false;
    	//Console log number of available nights
    	console.log(this.availableNights)
    	//If there are enough nights
    	if((nights-this.availableNights)<=0) {
    		//Set available to true
    		isAvailable = true;
    	}
    	//Log result
    	console.log(isAvailable);
    	//Return availability
    	return isAvailable;
    }
}

//Find the sumbit button
var nightsSumbitButton = document.getElementById('nightsSumbitButton');
//Add a listener for click to run sumbitNightsData
nightsSumbitButton.addEventListener('click', sumbitNightsData, false);

//Create function, no parameters
function sumbitNightsData() {
	//Find input field and store text contents (An integer hopefully)
	var nightsNo = parseInt(document.getElementById("nightsInputField").value);
	//run checkAvailability with nightsNo and store the value in available (True or false)
	var available = Hotel.checkAvailability(nightsNo);
	//Find the output container
	var nightsOutputContainer = document.getElementById("nightsOutputContainer");
	//Delete all child nodes to clear output space
   	while (nightsOutputContainer.hasChildNodes()) {
    	nightsOutputContainer.removeChild(nightsOutputContainer.firstChild);
   	}
	if(available) {
		//Create a button
		var output = document.createElement("button")
		//Set button text to I'll Reserve
		output.appendChild(document.createTextNode("I'll Reserve"));
		//Add a listener for click to run reserved()
		output.addEventListener('click', reserved, false)
		//Add button to output container
		nightsOutputContainer.appendChild(output);
	} else {
		//Create a text node with apology
		var output = document.createTextNode("Sorry, no free room for " + nightsNo + " nights");
		//Add text node to output container
		nightsOutputContainer.appendChild(output);
	}
}

function reserved() {
	alert('Reserved!')
}