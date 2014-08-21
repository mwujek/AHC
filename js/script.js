$(document).ready(function(){


	//fullPage.js initialization
	 $('#fullpage').fullpage({
        verticalCentered: true,
        resize : false,
        scrollingSpeed: 700,
        css3: true,
        anchors: ['nav-1', 'nav-2', 'nav-3', 'nav-4', 'nav-5', 'nav-6', 'nav-7', 'nav-8', 'nav-9', 'nav-10'],
    	menu: '#mainNav',
    	autoScrolling: true
    });


	 // carousel initialization

	  $("#recommendations").owlCarousel({

		// Most important owl features
		items : 4,
		singleItem : true,
		itemsScaleUp : false,
		 
		//Basic Speeds
		slideSpeed : 400,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		 
		//Autoplay
		autoPlay : 3500,
		stopOnHover : true,
		 
		// Navigation
		navigation : true,
		navigationText : ["<",">"],
		rewindNav : true,
		scrollPerPage : false,
		 
		//Pagination
		pagination : true,
		paginationNumbers: false,
		 
		// Responsive
		responsive: true,
		

	  });



	  $("#artwork").owlCarousel({

		// Most important owl features
		items : 4,
		singleItem : true,
		itemsScaleUp : false,
		 
		//Basic Speeds
		slideSpeed : 400,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		 
		//Autoplay
		autoPlay : 3500,
		stopOnHover : true,
		 
		// Navigation
		navigation : true,
		navigationText : ["<",">"],
		rewindNav : true,
		scrollPerPage : false,
		 
		//Pagination
		pagination : true,
		paginationNumbers: false,
		 
		// Responsive
		responsive: true,
		

	  });

	  $("#photos").owlCarousel({

		// Most important owl features
		items : 4,
		singleItem : true,
		itemsScaleUp : false,
		 
		//Basic Speeds
		slideSpeed : 400,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		 
		//Autoplay
		autoPlay : 3500,
		stopOnHover : true,
		 
		// Navigation
		navigation : true,
		navigationText : ["<",">"],
		rewindNav : true,
		scrollPerPage : false,
		 
		//Pagination
		pagination : true,
		paginationNumbers: false,
		 
		// Responsive
		responsive: true,
		

	  });



	//warning for old IE browsers
	$('#ie_warning_button').on('click', function(){
		$('#ie_warning').fadeOut('slow');
	});

	//make a div to center certain link buttons 
	$('.button-center').wrap("<div class='link-wrapper'></div>");

	


});



	function slideSwitch() {
        var active = $('div.active-ss');
        var nextSlide = active.next();
        var lastSlide = $('#fourth');
        var firstSlide = $('#first');
        //var fadeSpeed = 1000;
        //console.log('time!'); 

        
        if(lastSlide.hasClass('active-ss') ===true){
        //window.alert('YES!');
        active.removeClass('active-ss');
        firstSlide.addClass('active-ss');
        //active.fadeOut();
        //firstSlide.fadeIn();

} else {
        //if(active-ss ===)
   		
   		active.removeClass('active-ss');
        nextSlide.addClass('active-ss');
        //active.fadeOut();
        //nextSlide.fadeIn();


        }
    }

    	//slideshow for home page
    $(function() {
        setInterval(slideSwitch, 4000);
    });