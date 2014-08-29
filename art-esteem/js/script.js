$(document).ready(function(){

	//var navList = $('#mainNav');
	var navListElements = $('#mainNav li a');
	var navTitle = $('nav h1');
	var subMenuP = $('#sub-menu-programs');
	var subMenuLinkP = $('#sub-menu-programs li.sub-menu');

	var subMenuOMP = $('#sub-menu-OMP');
	var subMenuLinkOMP = $('#sub-menu-OMP li.sub-menu');
	var navColorData;




	navListElements.addClass('whiteTitle'); //start with hidden nav
	navTitle.addClass('whiteTitle'); // start with white title
	//subMenu.slideUp(); // start w sub-menu hidden

	//go to slide
	function goToSlidePrograms(slideSection){
		$.fn.fullpage.moveTo(4, slideSection); 
	}

	function goToSlideSSH(slideSection){
		$.fn.fullpage.moveTo(5, slideSection); 
	}

	function makeNavDark(){
		navListElements.removeClass('lightness');
		navTitle.removeClass('lightness');
		setTimeout(function() {
     	 navListElements.addClass('darkness');
		navTitle.addClass('darkness');
}, 400);
	}

	function makeNavLight(){
		navListElements.removeClass('darkness');
		navTitle.removeClass('darkness');
		setTimeout(function() {
     	navListElements.addClass('lightness');
		navTitle.addClass('lightness');
}, 400);
		
	}
	

	//fullPage.js initialization
	$('#fullpage').fullpage({
		verticalCentered: true,
		resize : false,
		scrollingSpeed: 700,
		css3: true,
		anchors: ['nav-1', 'nav-2', 'nav-3', 'nav-4', 'nav-5', 'nav-6', 'nav-7', 'nav-8', 'nav-9', 'nav-10','nav-11','nav-12','nav-13'],
		menu: '#mainNav',
		slidesNavigation: false,
		autoScrolling: true,
		onLeave: function(index, nextIndex, direction){
            //after leaving section 2
            if(index == '1' && direction =='down'){
                //navList.removeClass('hiddenNav');
                navTitle.removeClass('whiteTitle');
                navListElements.removeClass('whiteTitle');
            }

            if(index == '4'){
            	subMenuP.removeClass('slideDown2');

            }

            if(index == '5'){
            	subMenuOMP.removeClass('slideDown');

            }

        },
        afterLoad: function(anchorLink, index){
            //using index

            //fallback for showing nav title?
      

            
            // navColorData = $('div.active').data('navcolor');
     

            // if(navColorData === 'dark'){
            // 	//window.alert('dark');
            // 	makeNavlight();
            // }

            // if(navColorData === 'light'){
            // 	//window.alert('light');
            // 	makeNavDark();
            	
            // }

        


        if(index == '1'){
                //navList.addClass('hiddenNav');
                navTitle.addClass('whiteTitle');
                navListElements.addClass('whiteTitle');
            }

            if(index == '4'){
            	//subMenu.slideDown();
            	subMenuP.addClass('slideDown2');
            }

            if(index == '5'){
            	//subMenu.slideDown();
            	subMenuOMP.addClass('slideDown');
            }
        }
        
    });

	 // moving to program slides

	 /*Scrolling to the section with the anchor link `firstSlide` and to the 2nd Slide */
	 subMenuLinkP.on('click', function(e){
	 	e = $(this);
	 	var whichSection = e.data('index');
	 	goToSlidePrograms(whichSection);
	 });

	 subMenuLinkOMP.on('click', function(e){
	 	e = $(this);
	 	var whichSection = e.data('index');
	 	goToSlideSSH(whichSection);
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


	 //change the colors of each section 
	 //		using this rather than the Fullpage.js function because it can control
	 //other features such as font color and data attributes.
	 // var sectionColors = ['#6262AA','#F53133','#fff','#000','#F3953D', '#FDCC10'];
	 // //color all the sections different colors
	 // $('.section').each(function(i) {
	 // 	$(this).css({
	 // 		'background': sectionColors[i-1] 
	 // 	});

	 // 	if (i>sectionColors.length){
	 // 		$(this).css({
	 // 			'background': sectionColors[i-sectionColors.length] 
	 // 		});

	 // 	}
	 // });



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