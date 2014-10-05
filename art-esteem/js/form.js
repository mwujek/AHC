var button = $('.submit');
var emailRecipient = 'communications@ahc-oakland.org';
var errorWaitTime = 5000;
var formSelector = $('#commentForm');
var successModal = $('#successModal');
var errorSlider = $('#slider');

function sendEmail(name, subject, comment, email){
  
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': '5LahdFvP5PIIhkjxbwnagg',
      'message': {
        'from_email': email,
        'to': [
        {
          'email': emailRecipient,
          'name': 'RECIPIENT NAME (OPTIONAL)',
          'type': 'to'
        }
        ],
        
        
        'autotext': 'true',
        'subject': 'Notification from ArtEsteem: '+ subject,
        'html': '<p><em>Message from '+name+':</em></p><p>'+comment+'</p>'
      }
    }
  }).done(function() {
    //}).done(function(response) {
   //console.log(response); // if you're into that sorta thing
 });
}

function successMessage(){
	formSelector.remove();
	errorSlider.remove();

	successModal.addClass('successVisible');
}


function showErrorMessage(){
  var slider = $('#slider');
  slider.addClass('slideDownWarning');
  setTimeout(function(){
    slider.removeClass('slideDownWarning');
  },errorWaitTime);
}



button.on('click', function(){
 showErrorMessage();
});




$("#commentForm").validate({
  ignore: ".ignore",
  submitHandler: function() {
    
    var name = document.getElementById("cname").value;
    var eSubject = document.getElementById("csubject").value;
    var comments = document.getElementById("ccomment").value;
    var emailHere = document.getElementById("cemail").value;
    var validation = document.getElementById("cvalidation").value;
    if(validation === '3'){
      
      sendEmail(name,eSubject,comments,emailHere);
      successMessage();
    }else{
          //run code adding notification
          showErrorMessage();
        }
      }
    });




// api keys below
// 5LahdFvP5PIIhkjxbwnagg






button.on('clickz', function(){
  var emailHere = 'somerandomplace@gmail.com';
  var heythere = 'Just Testing to see if this works!! Horray!!';
  var eSubject = 'New Subject';
  var name = 'Dr. Rose';
  sendEmail(name,eSubject,heythere,emailHere);
  
});