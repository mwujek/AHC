$(document).ready(function(){

  var staffContent = $('.staff-info div');
  var instuctorContent = $('.instructor-info div');

  var h1Open = "<h1 class='staff-name'>";
  var h1Close = "</h1>";
  var pOpen = "<p class='staff-info'>";
  var pClose = "</p>";

// var text = [
//     "",
//     "",
//     "",
//     "",
//     "".
// ];

 //var msKText = h1Open + "" + h1Close + pOpen + "" + pClose;
 var msKText = h1Open + "Ms. Kugichagalia" + h1Close + pOpen + "Ms. Kujichagulia is a professional performing artist, musician, educator, writer, community activist and most importantly, grandmother of six (ages, 3, 3, 9, 10, 14 and 18). She has been teaching performing arts, music, dance and creative writing throughout the San Francisco and Oakland Unified School Districts since the 1980s.  A graduate of San Francisco State University, Ms. Kujichagulia is currently earning her Master’s Degree in Education from Mills College. Ms. Kujichagulia has been an esteemed Cultural Arts & Drumming Instructor with ArtEsteem since 2009." + pClose;
 var ericaText = h1Open + "Erica Wheeler-Dubin" + h1Close + pOpen + "This is placeholder text. Lorem ipsum dolor sit amet, sed id postulant argumentum appellantur, est an illum feugait, id qui aliquando scribentur. Labore copiosae has ne. Te wisi doming usu, ad tation percipit eam, ex labitur moderatius definitionem has. Cum argumentum intellegam et." + pClose;

  function callNewContent(staffName){

    if(staffName === 'Erica Wheeler-Dubin'){
      staffContent.html(ericaText);
    }

    if(staffName === 'Kamilah Crawford'){
      staffContent.html('This is info for: ' + staffName);
    }

    if(staffName === 'Daniel Panko'){
      instuctorContent.html('This is info for: ' + staffName);
    }

    if(staffName === 'Christopher Burch'){
      instuctorContent.html('This is info for: ' + staffName);
    }

    if(staffName === 'Justin Metoyer Mullon'){
      instuctorContent.html('This is info for: ' + staffName);
    }

    if(staffName === 'Ms. Kugichagalia'){
      instuctorContent.html(msKText);
    }

    if(staffName === 'Anthony Hall'){
      instuctorContent.html('This is info for: ' + staffName);
    }
  }



  $('.staff-list > li, .instructor-list > li').on('click', function(){
    var name = $(this).data('member');
    var parentList = $(this).parent().attr('class');

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