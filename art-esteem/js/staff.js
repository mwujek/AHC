$(document).ready(function(){

  var staffContent = $('.staff-info');
  var instuctorContent = $('.instructor-info');

  function callNewContent(staffName){

    if(staffName === 'Erica Wheeler-Dubin'){
      staffContent.html('This is info for: ' + staffName);
    }

    if(staffName === 'Someone Else'){
      staffContent.html('This is info for: ' + staffName);
    }

    if(staffName === 'Instructor #1'){
      instuctorContent.html('This is info for: ' + staffName);
    }

    if(staffName === 'Instructor #2'){
      instuctorContent.html('This is info for: ' + staffName);
    }

    if(staffName === 'Instructor #3'){
      instuctorContent.html('This is info for: ' + staffName);
    }

    if(staffName === 'Instructor #4'){
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