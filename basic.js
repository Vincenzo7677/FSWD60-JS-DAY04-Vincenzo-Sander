
//Basic Ex 1
function age(birthYear) {
	//Creates instance of 
	var myDate = new Date();
	//Subract birth year from current year (using getFullYear method from Date) store in age
	var age = myDate.getFullYear() - birthYear;
	//Log output
	console.log(age);
}
//Call function age with arguement
age(1999);

//Basic Ex 2
function truncate(inputString, truncateValue) {
	//Create variable to store output
	var outputString = "";
	//Get the section of inputString from char 0 to truncateValue
	outputString = inputString.substring(0, truncateValue);
	//Log output
	console.log(outputString);
}
//Call function truncate with inputString and truncateValue as arguements
truncate("Hello I only want 5 of these letters", 5)

//Basic Ex 3
function personalInfo(name, surname, age, desc) {
	//Create variable to store output
	var outputString = "";
	//Construct string for output using parameters
	outputString = "Hi I am " + name + " " + surname + " I am " + age + " years old and " + desc + ".";
	//Log output
	console.log(outputString);
}
//Call function personalInfo with name, surname, age, and short description as arguements
personalInfo("Bruce", "Wayne", 44, "I fight crime");