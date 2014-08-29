$(document).ready(function(){

	//var navList = $('#mainNav');
	var navListElements = $('#mainNav li a');
	var navTitle = $('nav h1');
	var subMenu = $('#sub-menu-list');
	var subMenuLink = $('li.sub-menu');

	navListElements.addClass('whiteTitle'); //start with hidden nav
	navTitle.addClass('whiteTitle'); // start with white title
	//subMenu.slideUp(); // start w sub-menu hidden

	//go to slide
	function goToSlide(slideSection){
		$.fn.fullpage.moveTo(4, slideSection); 
	}

	//fullPage.js initialization
	$('#fullpage').fullpage({
		verticalCentered: true,
		resize : false,
		scrollingSpeed: 700,
		css3: true,
		anchors: ['nav-1', 'nav-2', 'nav-3', 'nav-4', 'nav-5', 'nav-6', 'nav-7', 'nav-8', 'nav-9', 'nav-10'],
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
            	subMenu.removeClass('slideDown');

            }

        },
        afterLoad: function(anchorLink, index){
            //using index

            //fallback for showing nav title?

            if(index == '1'){
                //navList.addClass('hiddenNav');
                navTitle.addClass('whiteTitle');
                navListElements.addClass('whiteTitle');
            }

            if(index == '4'){
            	//subMenu.slideDown();
            	subMenu.addClass('slideDown');
            }
        }
        
    });

	 // moving to program slides

	 /*Scrolling to the section with the anchor link `firstSlide` and to the 2nd Slide */
	 subMenuLink.on('click', function(e){
	 	e = $(this);
	 	var whichSection = e.data('index');
	 	goToSlide(whichSection);
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

	// for impact section (pie chart)

	var placeHere = $('#content-here');
	var heading = ["Increased Productivity and Wellness", "Improved Communication", "Effective Stress Reduction", "Self Esteem Building", "Cultural Diversity"];
	var firstLine = ["Mindful Drumming unleashes the human potential, increases positive energy while reducing negative feelings", "Mindful Drumming increases effective communication amongst co-workers through the creation of rhythms in unison", "Mindful Drumming eases tension through the alignment of body, mind, and spirit", "Mindful Drumming helps employees let go of fear, which reduces cultural distance and connects participants to each other through rhythm", "Mindful Drumming supports employees in today’s global economy to understand and accept our increasingly multi-ethnic and multi-cultural workforce"];
	var secondLine = ["Mindful Drumming sets free inner joy, enhances well being, improves employee morale and reduces absenteeism","Effective communication is inspired by trust, respect, self-esteem, high morale, kindness, and happiness.  Mindful Drumming creates an atmosphere of community","Mindful Drumming is a transformative learning process that brings greater inner peace and joy","Mindful Drumming taps into the heart center that brings employees into a shared physiological, emotional, spiritual and psychological experience","Mindful Drumming harnesses the potential of diversity through practicing an ancient indigenous wisdom as one"];

	$('.pie-section').on('click', function(){
		var whichSection = $(this).data("index");
		var thisColor = $(this).attr("fill");
		
		//window.alert(thisColor);
		whichSection -= 1;
		placeHere.addClass('fadeOut');

		setTimeout(function() {
			placeHere.html('<div class="spacer"><h1>'+heading[whichSection]+"</h1><li>"+firstLine[whichSection]+"</li><li>"+secondLine[whichSection]+"</li></div>");
			var spacer = $('.spacer');
			spacer.css('background',thisColor);
			// if(thisColor === '#F9C900'){
			// 	spacer.css('color','#333');
			// }
		}, 400);



		setTimeout(function() {
			placeHere.removeClass('fadeOut');
		}, 600);

	});


 	// FOR research test!

	var articleHere = $('#article-here');
	var keyword = ["Keyword-1","Keyword-2","Keyword-3","Keyword-4","Keyword-5"];
	var article = ["Remo HealthRHYTHMS® Group Empowerment Drumming is an internationally acclaimed drumming company that has come out with peer- reviewed research on how group drumming positively impacts the immune system, reduces employee burnout and turnover rates, reduces student dropout rates, impacts biology on a genomic level, benefits corporate employee wellness, cultivates creativity and bonding in seniors, effects at-risk adolescents, and reduces stress.","Neurologist Barry Bittman, M.D. of the Mind-Body Wellness Center in Meadville, Pennsylvania and his research team conducted studies indicating that drum circles significantly increase the “disease fighting activity of circulating white blood cells (Natural Killer cells) that seek out and destroy cancer cells and virally-infected cells.” <a href='http://europepmc.org/abstract/MED/11191041' target='_blank'>Click here</a> to read more about Bittman’s study!","Stress Solutions, Inc., an organization that provides techniques for learning how to manage both work-related and home stress, also recognizes the healing benefits of drumming. Research supports that patients with various ailments respond positively to drumming as a form of treatment. Apparently, 'physicians are finding that Alzheimer's patients who drum can connect better with loved ones, and researchers have discovered that hearing slow, steady rhythms, such as drumbeats, helps Parkinson's patients move more steadily.'","Stress Solutions, Inc., an organization that provides techniques for learning how to manage both work-related and home stress, also recognizes the healing benefits of drumming. Research supports that patients with various ailments respond positively to drumming as a form of treatment. Apparently, 'physicians are finding that Alzheimer's patients who drum can connect better with loved ones, and researchers have discovered that hearing slow, steady rhythms, such as drumbeats, helps Parkinson's patients move more steadily.'", "Another article..."];


	$('.research-test li').on('click', function(){
		var whichSection = $(this).data("index");
		whichSection -= 1;
		articleHere.addClass('fadeOut');

		setTimeout(function() {
			articleHere.html("<div class='spacer-2'><h1>"+keyword[whichSection]+"</h1><p>"+article[whichSection]+"</p></div>");
		}, 400);



		setTimeout(function() {
			articleHere.removeClass('fadeOut');
		}, 600);

	});
	


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