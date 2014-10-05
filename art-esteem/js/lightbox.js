
$(document).ready(function() {


$('#artwork-container').rebox({ 
	selector: 'a',
	giveName: 'art-only',
	captionName: 'art-caption'

});
$('#class-container').rebox({ 

	selector: 'a',
	giveName: 'photos-only',
	buttonName: 'photo-buttons'

});

});
