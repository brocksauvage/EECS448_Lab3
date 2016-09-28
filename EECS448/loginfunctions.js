
function validatePassword()
{
	var password = document.getElementById("password").value;
	var validate = document.getElementById("validate").value;

	if(password != validate)
	{
		alert("The passwords do not match!");
	}
	else if(password.length < 8 || validate.length < 8)
	{
		alert("One or both of the passwords is less than 8 characters long.");
	}
	else if(password == validate)
	{
		alert("The passwords match!");
	
	}
	return;
}
