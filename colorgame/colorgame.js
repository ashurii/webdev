var difficulty = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");

resetButton.addEventListener("click", function()
{
	reset();
});

init();

function init()
{
	//Mode button event listeners
	setupModeButtons();
	setupSquares();
	reset();
	
}

function setupModeButtons()
{
	for(var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click", function()
		{
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "EASY" ? difficulty = 3: difficulty = 6;

			reset();

		});
	}
}
function setupSquares()
{
	for(var i = 0; i < squares.length; i++)
	{
		reset();
		//add click listeners to squares
		squares[i].addEventListener("click", function()
		{
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to picked color
			if(clickedColor === pickedColor)
			{
				changeColors(clickedColor);
				messageDisplay.textContent = "Correct!";
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}
			else
			{
				this.style.backgroundColor = "#232323"
				messageDisplay.textContent = "Try Again";
			}
		})
	}
	reset();
}
	




function reset()
{
	colors = generateRandomColors(difficulty);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}

	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	message.textContent = "";
}


function changeColors(color)
{
	//loop through all squares
	for(var i = 0; i < colors.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
	//change each color to match given color

}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++)
	{
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor()
{
	var r = Math.floor((Math.random() * 256));
	var g = Math.floor((Math.random() * 256));
	var b = Math.floor((Math.random() * 256));
	return "rgb(" + r + ", " + g + ", " + b + ")";
}