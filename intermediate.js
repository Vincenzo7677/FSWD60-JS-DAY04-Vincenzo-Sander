var Hotel = {
	name: "A hotel",
    availableNights: Math.floor((Math.random()*9)+1),
    checkAvailability: function(nights) {
    	isAvailable = false;
    	console.log(this.availableNights)
    	if((nights-this.availableNights)<=0) {
    		isAvailable = true;
    	}
    	console.log(isAvailable);
    	return isAvailable;
    }
}

console.log(Hotel.availableNights);

var nightsSumbitButton = document.getElementById('nightsSumbitButton');
nightsSumbitButton.addEventListener('click', sumbitNightsData, false);

function sumbitNightsData() {
	var nightsNo = parseInt(document.getElementById("nightsInputField").value);
	var available = Hotel.checkAvailability(nightsNo);
	var nightsOutputContainer = document.getElementById("nightsOutputContainer");
   	while (nightsOutputContainer.hasChildNodes()) {
    	nightsOutputContainer.removeChild(nightsOutputContainer.firstChild);
   	}
	if(available) {
		var output = document.createElement("button")
		output.appendChild(document.createTextNode("I'll Reserve"));
		nightsOutputContainer.appendChild(output);
	} else {
		var output = document.createTextNode("Sorry, no free room for " + nightsNo + " nights");
		nightsOutputContainer.appendChild(output);
	}
}