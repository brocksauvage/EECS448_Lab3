var index = 0;

function next()
{
	index++;
	changePics();
}

function previous()
{
	index--;
	changePics();
}

function changePics()
{
	var picArray = document.getElementsByClassName("slides");
	if(index >= picArray.length)
	{
		index = 0;
	}
	if(index < 0)
	{
		index = picArray.length-1;
	}
	for(var i = 0; i < picArray.length; i++)
	{
		picArray[i].style.display = "none";
	}
	picArray[index].style.display = "block";
}
