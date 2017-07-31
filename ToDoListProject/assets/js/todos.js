//Check off specific todos by clicking
$('ul').on("click", "li", function() 
{
	$(this).toggleClass("completed");
});

//Click o X to delete Todo
$('ul').on("click", "span", function(event)
{
	$(this).parent().fadeOut(500, function()
		{
			$(this).remove();
		});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event)
{
	if(event.which === 13)
	{
		var todoText = $(this).val();
		//creat a new li and add to ul
		$('ul').append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
		$(this).val("");

	}
});
$(".fa-plus").click(function()
{
	$("input[type='text']").fadeToggle();
});