/*$(document).ready(function() {
   $('#tab').mouseenter(function() {
       $(#infobar).animate({
           height: '+=10px'
       });
   });
   $('#infotab').mouseleave(function() {
       $(#infobar).animate({
          heigth: '-=10px'
       }); 
   });
   $('#button').click(function() {
       $(this).toggle(1000);
   });
});

$(document).ready(function(){
   $('div').mouseenter(function(){
       $('div').fadeTo('fast', 1);
   });
   $('div').mouseleave(function(){
       $('div').fadeTo('fast',0.5 );
   });
});
$(document).ready(function(){
   $('div').mouseenter(function(){
       $('div').css('color', 'white');
   });


$(document).ready(function() {
    $('div').click(function() {
        $('div').fadeOut('slow');
    });
});
$(document).ready(function() {
    $target=$('#chump');
    $target.fadeOut('fast');
});*/


// listed in chronological order and then physical order*/

$(document).ready(function(){
	$('.contentbox').hide();
	$('#titlebox').fadeIn('fast');
// for the main tabs
		// first enlarge/ white up function
			// menu tab
	 
	//shadow looks bad in design
		

	// Now bring up content

  //our* story starts up automatically and when title is clicked
  
		$('#ourstorybox').fadeIn('slow');
		
		$( '#titlebox').click(function(){
		    $('.contentbox').fadeOut('fast');
		 		$('#ourstorybox').fadeIn('slow');
		 		});
	 	 //menu
	$('#roomtab').click(function() {
		$('.contentbox').fadeOut('fast');
		$('#menubox').fadeIn('slow');
		$('.item').hide();
		$('#item1').fadeIn('slow');
		$('#menul1').css('color','black');
	
	});

	 
			//event info
	$('#locationtab').click(function() {
		$('.contentbox').fadeOut('fast');
		$('#infobox').fadeIn('slow');
		
	});



	

	
	// INTERACTIVE MENU
	
	
	$('#menul2').click(function() {
      	  $('#item1').fadeOut('fast');
         $('#item2').fadeIn('slow');
		 
		
  	});
  /* 	$('#menul2').mouseleave(function() {
      		 $('#item2').fadeOut('slow');
  	});*/
	 
	$('#menul1').click(function() {
      		 $('#item1').fadeIn('slow');
          $('#item2').fadeOut('slow');
		  
  	});

	// OUR STORY
		
	$('#dotbox a').mouseenter(function() {
      	          $('#dotbox a').animate({
					  height:'+=10px'
				  });
				
	});

   	$('#dotbox a').mouseleave(function() {
      		    $('#dotbox a').animate({
					  height:'-=10px'
				  });
   	});
	/* attempt to make current button visible			  
	$('.activeSlide').fadeTo('slow', .5)
	$('#dotbox a').fadeTo('slow', 1)
	*/
				  
   
	

	 
});


