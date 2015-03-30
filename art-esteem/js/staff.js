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
var danielText = h1Open + "Daniel Panko" + h1Close + pOpen + "Daniel Panko was born and raised in the bay area and has been expressing himself through art his entire life. He has been working with Attitudinal Healing Connection since 2005 on and off as a teaching artist. He has seen how art has the power to unite people, and bring beauty and awareness into the world. He studied at California College Of Arts and Crafts and graduated with honors. He is a muralist, illustrator, and painter and is thankful  to have the opportunity of working with amazing, powerful, and inspirational youth from around the bay." + pClose;
var christopherText = h1Open + "Christopher Burch" + h1Close + pOpen + "Christopher Burch is an artist, events organizer, and educator based in San Francisco CA and St. Louis MO. He received the Painting Fellowship for his graduate studies at the San Francisco Art Institute (MFA 2008) and is a graduate of Columbia College with a BFA in 2002. He worked with The St. Louis Freedom Schools as a program coordinator and arts instructor from 2000 to 2002. From 2004 to 2006 he worked as curriculum developer for the Center of Creative Arts (COCA) in St. Louis Mo creating several year-long educational/residence programs within four St. Louis public schools. In 2008 to 2009 he worked for the East Oakland School of the Arts (EOSA). In the course of his education work, Burch was a board member, from 2002-2006, of a community based arts Organization in St. Louis MO, entitled Art Dimensions. 2008 to 2010, in San Francisco, he co-curated an independent arts series entitled &#34;The Other Side of a Smile.&#34; Starting in 2008 and continuing to this day he has organized several ongoing underground music/community-building residencies in San Francisco entitled &#34;Gumbo Experiment&#34; and &#34;Unbroken Circle.&#34; Currently, Burch is working on several large-scale public works/ educational programs that explore personal myth making and the re-imagining of identity, entitled 'Reflective Mythologies: Portraits Re-mixed.&#34; He is also a founding member of The Screwed Arts collective whose architecturally scaled improvisation wall drawings have been exhibited at the Regional Arts Commission in St, Louis MO, The World Chess Hall of Fame St, Louis Mo and The Urban Institute for Contemporary Arts Grand Rapids MI.&#34;" + pClose;
var justinText = h1Open + "Justin Metoyer Mullon" + h1Close + pOpen + "Justin is a bay area native and graduate of San Francisco State from the department of Africana Studies. As a student of SFSU he also learned about art throughout the Americas, Africa and Asia in addition to his other research. He grew up drawing, building, painting,creating and destroying. As a multi-medium artist Justin merges his philosophical and visual vocabulary to express his creative passions in art intended to expand, heal, and uplift mind, body and soul. Justin has a background in working with youth of various ethnic and geographical backgrounds, and is passionate about engaging them in meaningful dialogue and activities." + pClose;
var keenaText = h1Open + "Keena Romano" + h1Close + pOpen + "Keena Romano is an Oakland-based Muralist and art enthusiast. She studied painting and media studies at Pomona College and returned to her hometown to actively work with art communities in the Bay Area.  Her passion is to learn, explore and share healing art practices locally and globally. Keena has been working with Elementary Schoolers as an art instructor and is committed to cultivating safe spaces for them to express themselves in new and imaginative ways." + pClose;
var jenniferText = h1Open + "Jennifer &quot;Taiwo&quot; Adejobi" + h1Close + pOpen + "Jennifer &quot;Taiwo&quot; Adejobi is a Freelanced Illustrator from California. Born and raised in Oakland, she learned the importance of the process of art making at a young age. Most of Jennifer's artwork is based on her dreams and past childhood experiences. As a child and teenager, she needed a positive outlet, and through art, she had found it. Jennifer graduated from CCA (California College of the Arts) in 2010 with a BFA in Illustration. After graduating, she continued to work on her techniques as a draftsman and began to experiment with different types styles and mediums until she was able to engross herself into a style that she could call her own. Jennifer has become an Illustrator whose artwork is all about uprooting and shedding light on stories that have been untold or forgotten." + pClose;


var comingSoon =  h1Open + 'Bios Coming Soon!' + h1Close;

  function callNewContent(staffName){

    if(staffName === 'Erica Wheeler-Dubin'){
      staffContent.html(ericaText);
    }

    if(staffName === 'Kamilah Crawford'){
      staffContent.html(kamilahText);
    }

    if(staffName === 'Daniel Panko'){
      instuctorContent.html(danielText);
    }

    if(staffName === 'Christopher Burch'){
      instuctorContent.html(christopherText);
    }

    if(staffName === 'Justin Metoyer Mullon'){
      instuctorContent.html(justinText);
    }

    if(staffName === 'Ms. Kugichagalia'){
      instuctorContent.html(msKText);
    }

    if(staffName === 'Anthony Hall'){
      instuctorContent.html(anthonyHText);
    }

    if(staffName === 'Keena Romano'){
      instuctorContent.html(keenaText);
    }
    if(staffName === 'Jennifer Adejobi'){
      instuctorContent.html(jenniferText);
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