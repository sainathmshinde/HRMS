$(function(){
     
	  
     $(".clickClass").click(function()
		 {  
		     
			 if($(this).siblings(".reportFilterSubMenu").css("display")=="none")
			    {
				  $(this).siblings(".reportFilterSubMenu").slideDown("slow");
				  $(this).siblings(".reportFilterSubMenu").css('top',$(this).parent().parent().css("height"));
				}
			else if(!($(this).siblings(".reportFilterSubMenu").css("display")=='none')){
			      $(this).siblings(".reportFilterSubMenu").slideUp("slow"); 
			    }
		   $(".clickClass").not(this).siblings(".reportFilterSubMenu").slideUp("slow");
		 });
		 
		/* 
		$(".reportFilterMenu").click(function(){
			if($(this).find(".reportFilterSubMenu").css("display")=="none")
			    {
				  $(this).find(".reportFilterSubMenu").slideDown("slow");
				}
			else if(!($(this).find(".reportFilterSubMenu").css("display")=='none')){
			      $(this).find(".reportFilterSubMenu").slideUp("slow"); 
			    }
		  $(".reportFilterMenu").not(this).find(".reportFilterSubMenu").slideUp("slow");
		});
		 */
		 
		 $(".reportFilterSubMenu").find(".selectAllValues").click(function(){
		     
			 if($(this).is(':checked')){
			    
			    $(this).parent().parent().find(".filterCheck").prop("checked","checked");
				//$(this).parent().parent().parent().parent().find(".clickClass").removeClass("filterGlowClass");
				$(this).parent().parent().parent().parent().find(".downArrowHead").html("&#9660;"); 
			 }
			 else{
			     $(this).parent().parent().find(".filterCheck").removeAttr("checked");
				// $(this).parent().parent().parent().parent().find(".clickClass").removeClass("filterGlowClass");
				 $(this).parent().parent().parent().parent().find(".downArrowHead").html("&#9660;"); 
			 }
		 });
		 
		 $(".reportFilterSubMenu").find(".selectAllSpan").click(function(){
			
             if($(this).siblings(".selectAllValues").is(':checked')){
				//alert("hii");
				$(this).siblings(".selectAllValues").removeAttr('checked');
				$(this).parent().parent().find(".filterCheck").removeAttr("checked"); 
				$(this).parent().parent().parent().parent().find(".downArrowHead").html("&#9660;");
				 
			}else if(!($(this).siblings(".selectAllValues").prop('checked')=='checked')){
				$(this).siblings(".selectAllValues").prop('checked','checked');
				$(this).parent().parent().find(".filterCheck").prop("checked","checked"); 
				$(this).parent().parent().parent().parent().find(".downArrowHead").html("&#9660;"); 
			}			
		   
		 });
		 
		 
		 
		 
		 $(".reportFilterSubMenu").find(".filterCheck").click(function(){
		    
			if(!($(this).is(':checked'))){
			   $(this).parent().parent().parent().parent().parent().find(".selectAllValues").removeAttr("checked");
			  // $(this).parent().parent().parent().parent().parent().parent().find(".clickClass").addClass("filterGlowClass");
			   $(this).parent().parent().parent().parent().parent().parent().find(".downArrowHead").html('&check;');
			}else{
			 
			  // $(this).parent().parent().parent().parent().parent().parent().find(".clickClass").addClass("filterGlowClass");
			  // $(this).parent().parent().parent().parent().parent().parent().find(".downArrowHead").html('&check;');
			}
			
		    
		 });
		 
		$('.reportFilterMenu').mouseleave(function(){
	        if(!($(this).find('.reportFilterSubMenu').is(":hover"))){
				
			}else{
				$(this).find(".reportFilterSubMenu").css("display","none");
			}
	    });
		
		
		
		$('.selectFilterValues').click(function(){
		  	if($(this).siblings(".filterCheck").is(':checked')){
				//alert("hii");
				$(this).siblings(".filterCheck").removeAttr('checked');
				$(this).parent().parent().parent().parent().parent().find(".selectAllValues").removeAttr("checked");
				$(this).parent().parent().parent().parent().parent().parent().find(".downArrowHead").html('&check;');
				
			}else if(!($(this).siblings(".filterCheck").prop('checked')=='checked')){
				$(this).siblings(".filterCheck").prop('checked','checked');
				//$(this).parent().parent().parent().parent().parent().find(".downArrowHead").html('&check;');
			}
			 
		});
		
		$('body').click(function(item){
	
			if($(item.target).closest("#filterHead").length == 0)
			{
				$(".reportFilterSubMenu").css("display","none");
			}
		});
		
});