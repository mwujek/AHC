$(document).ready(function(){

  var staffContent = $('.staff-info div');
  var instuctorContent = $('.instructor-info div');

  var h1Open = "<h1 class='staff-name'>";
  var h1Close = "</h1>";
  var pOpen = "<p class='staff-info'>";
  var pClose = "</p>";


  // function calculatePosition(){

  // }



// var text = [
//     "",
//     "",
//     "",
//     "",
//     "".
// ];

 //var msKText = h1Open + "" + h1Close + pOpen + "" + pClose;
 var msKText = h1Open + "Ms. Kugichagalia" + h1Close + pOpen + "Ms. Kujichagulia is a professional performing artist, musician, educator, writer, community activist and most importantly, grandmother of six (ages, 3, 3, 9, 10, 14 and 18). She has been teaching performing arts, music, dance and creative writing throughout the San Francisco and Oakland Unified School Districts since the 1980s.  A graduate of San Francisco State University, Ms. Kujichagulia is currently earning her Master’s Degree in Education from Mills College. Ms. Kujichagulia has been an esteemed Cultural Arts & Drumming Instructor with ArtEsteem since 2009." + pClose;
 var ericaText = h1Open + "Erica Wheeler-Dubin" + h1Close + pOpen + "Erica Wheeler-Dubin was born and raised in San Francisco. After graduating from UC Santa Cruz with a Bachelor’s Degree in Psychology, she attended the Academy of Art University in San Francisco for a semester studying Fine Art. Then she began volunteering for Attitudinal Healing Connection, Inc. (AHC) in December 2011, for the annual Martin Luther King Jr. Celebration. She is a younger sister, twin sister, daughter, friend and avid soccer player, focused on finding solutions to societal barriers and systems of injustice through building meaningful relationships with the power of intention. She currently serves as Communications at AHC and occasional ArtEsteem Instructor." + pClose;
 var kamilahText = h1Open + "Kamilah Crawford" + h1Close + pOpen + "Kamilah Crawford has been a part of the Attitudinal Healing Connection, Inc. (AHC) since 2002, when she participated in ArtEsteem in middle school. Kamilah produced one of the first superheroes of ArtEsteem, entitled “Super Milah.” After graduating from ArtEsteem, she received her first job with AHC as a Youth Assistant. Kamilah recently graduated in 2013 from the University of California, Davis with a Bachelor’s of Science in Neurobiology, Physiology & Behavior. Upon graduating, she returned home to her family (AHC) and has served as the Office Assistant. Kamilah is a hard worker that goes out her way to ensure her job is complete. Kamilah is originally from West Oakland and is passionate about health care and helping to ensure that everyone has adequate access to medicine. Kamilah is preparing for a career as a physician." + pClose;
var anthonyHText = h1Open + "Anthony Hall" + h1Close + pOpen + "Anthony Hall is an artist, designer and creator.  Anthony has created a wonderful new ball game called Circleball.  He designs homes, and has applied his creative skills beautifying many homes in West Oakland.   He lives in West Oakland and serves on many Boards that work to enhance the community.  He is deeply engaged and involved in enhancing and improving the community of West Oakland." + pClose;
var comingSoon =  h1Open + 'Bios Coming Soon!' + h1Close;

  function callNewContent(staffName){

    if(staffName === 'Erica Wheeler-Dubin'){
      staffContent.html(ericaText);
    }

    if(staffName === 'Kamilah Crawford'){
      staffContent.html(kamilahText);
    }

    if(staffName === 'Daniel Panko'){
      instuctorContent.html(comingSoon);
    }

    if(staffName === 'Christopher Burch'){
      instuctorContent.html(comingSoon);
    }

    if(staffName === 'Justin Metoyer Mullon'){
      instuctorContent.html(comingSoon);
    }

    if(staffName === 'Ms. Kugichagalia'){
      instuctorContent.html(msKText);
    }

    if(staffName === 'Anthony Hall'){
      instuctorContent.html(anthonyHText);
    }
  }

var xPos = [
    "-75px",
    "-150px",
    "150px",
    "75px",
    "225px",
    "0px",
    "0px"
];

var xPosActive = [
    "-75px",
    "-150px",
    "150px",
    "75px",
    "225px",
    "0px",
    "0px"
];

  // $('.staff-list > li, .instructor-list > li').on('click', function(){
  //   var name = $(this).data('member');
  //   var parentList = $(this).parent().attr('class');
  //   var element = $(this);
  //   var addedClass = $('.active-member');
  //   var allItems = $('.staff-list, .instructor-list').find('.active-member');
  //   if(allItems.hasClass('active-member')){
  //     allItems.removeClass('active-member');
  //     //allItems.css('background-position', '');
  //   }

      $('.staff-list > li, .instructor-list > li').on('click', function(){
    var name = $(this).data('member');
    var parentList = $(this).parent().attr('class');
    var element = $(this);
    var addedClass = $('.active-member');
    var allItems = $('.staff-list, .instructor-list').find('.active-member');
    if(allItems.hasClass('active-member')){
      allItems.removeClass('active-member');
      //allItems.css('background-position', '');
    }
    

    
setTimeout(function() {
  element.addClass('active-member');
}, 300);

// });


    if(parentList === "staff-list"){
      staffContent.fadeOut();

      setTimeout(function() {
        callNewContent(name);
        staffContent.fadeIn();
      }, 500);
    }

    if(parentList === "instructor-list"){

      instuctorContent.fadeOut();

      setTimeout(function() {
        callNewContent(name);
        instuctorContent.fadeIn();
      }, 500);
    }

  });


});