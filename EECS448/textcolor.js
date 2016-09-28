

//Resource used for rgb function:
//http://stackoverflow.com/questions/2173229/how-do-i-write-a-rgb-color-value-in-javascript

//Function uses values pulled from textcolor.html in order to modify the tag attributes of the dummy text.
function colorChange()
{
	var redVal = document.getElementById("redvalue").value;
	var greenVal = document.getElementById("greenvalue").value;
	var blueVal = document.getElementById("bluevalue").value;
	var width = document.getElementById("widthvalue").value;
	var bgRed = document.getElementById("bgredvalue").value;
	var bgGreen = document.getElementById("bggreenvalue").value;
	var bgBlue = document.getElementById("bgbluevalue").value;
	var myTag = document.getElementById("myText");

	myTag.style.borderColor = 'rgb('+redVal+','+greenVal+','+blueVal+')';
	myTag.style.width = width;
	myTag.style.backgroundColor = 'rgb('+bgRed+','+bgGreen+','+bgBlue+')';

}
