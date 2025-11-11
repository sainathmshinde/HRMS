$(document).ready(function()
{
	
	$("li.mainmenu").hover(function()
	{
		//alert("j");
		
		$(this).find("ul.sub-menu").slideDown();
		$(this).find(">a").addClass("hoverMenuli");
	},
	function()
	{
		$(this).find("ul.sub-menu").slideUp();
		$(this).find(">a").removeClass("hoverMenuli");
	});
	
	$("a").click(function()
	{
		var url = $(this).attr("url");
		if(typeof(url) != "undefined")
		{
			$(".wrapperContent").load(url); 
			$("html, body").animate({ scrollTop: 0 }, "slow");
		}
	});
	
	
	
	
});