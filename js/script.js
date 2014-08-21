$(document).ready(function(){

	//fullPage.js initialization
	 $('#fullpage').fullpage({
        verticalCentered: true,
        resize : false,
        scrollingSpeed: 700,
        css3: true,
        anchors: ['nav-1', 'nav-2', 'nav-3', 'nav-4', 'nav-5', 'nav-6', 'nav-7', 'nav-8', 'nav-9'],
    	menu: '#mainNav'
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