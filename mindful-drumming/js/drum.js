/*jshint devel:true */

$(document).ready(function(){

	var $drumPiece = $('.hover-drum');
	var $hoverTip = $('.hover-tip');
	var $infoHere = $('#content-here p');
	var ulOpen = "<ul>", ulClose = "</ul>", liOpen = "<li>", liClose = "</li>",h1Open="<h1>",h1Close="</h1>";
	var drumText = [
		h1Open+'Increased Productivity and Wellness'+h1Close+ulOpen+liOpen+'Mindful Drumming unleashes the human potential, increases positive energy while reducing negative feelings'+liClose+liOpen+'Mindful Drumming sets free inner joy, enhances well being, improves employee morale and reduces absenteeism'+liClose+ulClose,
		h1Open+'Improved Communication'+h1Close+ulOpen+liOpen+'Mindful Drumming increases effective communication amongst co-workers through the creation of rhythms in unison'+liClose+liOpen+'Effective communication is inspired by trust, respect, self-esteem, high morale, kindness, and happiness.  Mindful Drumming creates an atmosphere of community'+liClose+ulClose,
		h1Open+'Effective Stress Reduction'+h1Close+ulOpen+liOpen+'Mindful Drumming eases tension through the alignment of body, mind, and spirit'+liClose+liOpen+'Mindful Drumming is a transformative learning process that brings greater inner peace and joy'+liClose+ulClose,
		h1Open+'Self Esteem Building'+h1Close+ulOpen+liOpen+'Mindful Drumming helps employees let go of fear, which reduces cultural distance and connects participants to each other through rhythm'+liClose+liOpen+'Mindful Drumming taps into the heart center that brings employees into a shared physiological, emotional, spiritual and psychological experience'+liClose+ulClose,
		h1Open+'Cultural Diversity'+h1Close+ulOpen+liOpen+'Mindful Drumming supports employees in today’s global economy to understand and accept our increasingly multi-ethnic and multi-cultural workforce'+liClose+liOpen+'Mindful Drumming harnesses the potential of diversity through practicing an ancient indigenous wisdom as one'+liClose+ulClose
	];

function fadeInText(index){
	$infoHere.fadeOut();
	setTimeout(function(){
		$infoHere.html(index);
	},350);

	setTimeout(function(){
		$infoHere.fadeIn();
	},400);

}

$drumPiece.hover(
	function() {
		var text = $( this ).data('category');
		$hoverTip.html(text);
		console.log(text);
	}, function() {
		//$( this ).find( "span:last" ).remove();
	}
	);

$drumPiece.on("click",function() {
	var text = $( this ).data('category');
	//$hoverTip.html(text);
	//console.log(text);

	if(text === 'Increased Productivity and Wellness'){
		fadeInText(drumText[0]);
	}

	if(text === 'Improved Communication'){
		fadeInText(drumText[1]);
	}
	if(text === 'Effective Stress Reduction'){
		fadeInText(drumText[2]);
	}
	if(text === 'Self Esteem Building'){
		fadeInText(drumText[3]);
	}
	if(text === 'Cultural Diversity'){
		fadeInText(drumText[4]);
	}
			//console.log('hi');
			//window.alert('asd');
		});


});