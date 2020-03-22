$(document).ready(function(){ //function for page navigation
	$(".nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		    top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
	});

	$(".intro").on("click","a", function (event) {
	event.preventDefault();
		var id  = $(this).attr('href'),
		    top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
	});

	$(".btnUp").on("click","a", function (event) {
	event.preventDefault();
		var id  = $(this).attr('href'),
		    top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
	});

	$(document).scroll(function(){
		if ( $(document).scrollTop() > 0){
			$('.topNubex').fadeIn(2000);
		}
		else {
			$('.topNubex').fadeOut();
		}
	})

});


function ViewDiv(){
  	document.onclick = function(event){
			event = event || window.event;
			if (!event.target) {
				event.target = event.srcElement;
			}
		var elID = event.target.id;
		
		switch(elID){
 			case 'mark2':
 				document.getElementById("year__2012").style.display = "block";break;
 			case 'mark3':
 				document.getElementById("year__2013").style.display = "block";break;
 			case 'mark4':
 				document.getElementById("year__2014").style.display = "block";break;
 		}
	}
};

