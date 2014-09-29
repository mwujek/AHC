$(document).ready(function(){

	var placeHere = $('#content-here');
	var keyword = ["Keyword-1","Keyword-2","Keyword-3","Keyword-4","Keyword-5"];
	var article = ["Remo HealthRHYTHMS® Group Empowerment Drumming is an internationally acclaimed drumming company that has come out with peer- reviewed research on how group drumming positively impacts the immune system, reduces employee burnout and turnover rates, reduces student dropout rates, impacts biology on a genomic level, benefits corporate employee wellness, cultivates creativity and bonding in seniors, effects at-risk adolescents, and reduces stress.","Neurologist Barry Bittman, M.D. of the Mind-Body Wellness Center in Meadville, Pennsylvania and his research team conducted studies indicating that drum circles significantly increase the “disease fighting activity of circulating white blood cells (Natural Killer cells) that seek out and destroy cancer cells and virally-infected cells.” <a href='http://europepmc.org/abstract/MED/11191041' target='_blank'>Click here</a> to read more about Bittman’s study!","Stress Solutions, Inc., an organization that provides techniques for learning how to manage both work-related and home stress, also recognizes the healing benefits of drumming. Research supports that patients with various ailments respond positively to drumming as a form of treatment. Apparently, 'physicians are finding that Alzheimer's patients who drum can connect better with loved ones, and researchers have discovered that hearing slow, steady rhythms, such as drumbeats, helps Parkinson's patients move more steadily.'","Stress Solutions, Inc., an organization that provides techniques for learning how to manage both work-related and home stress, also recognizes the healing benefits of drumming. Research supports that patients with various ailments respond positively to drumming as a form of treatment. Apparently, 'physicians are finding that Alzheimer's patients who drum can connect better with loved ones, and researchers have discovered that hearing slow, steady rhythms, such as drumbeats, helps Parkinson's patients move more steadily.'", "Another article..."];


	$('.pie-section').on('click', function(){
		var whichSection = $(this).data("index");
		whichSection -= 1;
		placeHere.fadeOut();
		
		setTimeout(function() {
			placeHere.html("<h1>"+keyword[whichSection]+"</h1><p>"+article[whichSection]+"</p>");
		}, 400);
		
		
		
		setTimeout(function() {
			placeHere.fadeIn();
		}, 600);
		
	});

});
