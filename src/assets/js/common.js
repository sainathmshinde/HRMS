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
	$("a.nav-link").click(function(e) {

    // remove previous active class
    $(".sidebar .nav .nav-item > a.nav-link").removeClass("active");

    // add active to clicked one
    $(this).addClass("active");
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