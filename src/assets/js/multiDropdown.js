$(function(){
 /*
 $(".menu").hover(function(){
	  if($(this).find(".subs").css("display")=='none')
	    {$(".showNavigation").not(this).css("display","none");
		  $(".subs").not(this).css("display","none");
		  $(this).find(".subs").show('slide',{direction:'left'},600);
		  $(this).find(".subs").css("display","inline-flex");
		  $(this).find(".showNavigation").show();
		  $(".dashboardMenuButton").removeClass("dashboardMenuButtonFont");
		 
		   
		}else{
		
		}
	  
	 });*/
	
	$(".menuA").click(function(){
		if($(this).parent().find(".menuSubMenuDiv").css("display")=='none'){
			
			 $(".menu").not(this).find(".menuSubMenuDiv").slideUp(200);
		  $(this).parent().find(".menuSubMenuDiv").slideDown(600);
		}else{
			$(this).parent().find(".menuSubMenuDiv").slideUp(200);
		}
		
		$(".commonReportDivTable").hide();
			$(".commonFormDivTable").hide();
		    $(".subs").hide();
			$(".showNavigation").hide();
	});
	
	$(".favSpecial").click(function(){
		if($(this).parent().find(".commonFormDivTable").css("display")=='none'){
			
			$(".commonReportDivTable").hide();
			$(".commonFormDivTable").hide();
		    $(".subs").hide();
			$(".showNavigation").hide();
			$(this).parent().find(".subs").show();
		   $(this).parent().find(".showNavigation").show();
		   $(this).parent().find(".subs").height($(".mainSubMenuDiv").height());
		   $(this).parent().find(".commonFormDivTable").show('slide',{direction:'left'},100);
		}
	});
	
	$(".formListShow").hover(function(){
		if($(this).parent().parent().parent().parent().parent().find(".commonFormDivTable").css("display")=='none'){
			$(".commonReportDivTable").hide();
			$(".commonFormDivTable").hide();
		    $(".subs").hide();
			$(".showNavigation").hide();
		   $(this).parent().parent().parent().parent().parent().find(".subs").show();
		   $(this).parent().find(".showNavigation").show();
		   $(this).parent().parent().parent().parent().parent().find(".subs").height($(".mainSubMenuDiv").height());
		   $(this).parent().parent().parent().parent().parent().find(".commonFormDivTable").show('slide',{direction:'left'},100);
		}
	});
	
	$(".tableListShow").hover(function(){
		if($(this).parent().parent().parent().parent().parent().find(".commonReportDivTable").css("display")=='none'){
			$(".commonReportDivTable").hide();
			$(".commonFormDivTable").hide();
		    $(".subs").hide();
			$(".showNavigation").hide();
		   $(this).parent().parent().parent().parent().parent().find(".subs").show();
		   $(this).parent().find(".showNavigation").show();
		   $(this).parent().parent().parent().parent().parent().find(".subs").height($(".mainSubMenuDiv").height());
		   $(this).parent().parent().parent().parent().parent().find(".commonReportDivTable").show('slide',{direction:'left'},100);
		}
	});
	
	
	$(".dashboardMenuButton").hover(function(){
	   $(".mainSubMenuDiv").show('slide',200);
	   $(".dashboardMenuButton").removeClass("dashboardMenuButtonFont");
	});
	
	$(".mainSubMenuDiv").hover(function(){
		
	},function(){
		 $(".subs").hide();
		 $(".showNavigation").hide();
		 $(".menuSubMenuDiv").hide();
		$(".mainSubMenuDiv").hide();
		$(".dashboardMenuButton").addClass("dashboardMenuButtonFont");
	});

	
	
	$('body').click(function(item){
	
			if($(item.target).closest("#menuBox").length == 0)
			{
				 $(".subs").hide();
				 $(".showNavigation").hide();
				 $(".menuSubMenuDiv").hide();
				$(".mainSubMenuDiv").hide();
				$(".dashboardMenuButton").addClass("dashboardMenuButtonFont");
			}
		});
	
});