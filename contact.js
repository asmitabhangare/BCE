// jQuery.validator.addMethod("noSpace", function(value, element) { 
//     return value == '' || value.trim().length != 0;  
// }, "No space please and don't leave it empty");
jQuery.validator.addMethod("customEmail", function(value, element) { 
  return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
}, "Please enter valid email address!");
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
var $contactForm = $('#contact');
if($contactForm.length){
  $contactForm.validate({
      rules:{
          //username is the name of the textbox
          fname: {
            required: true
              //alphanumeric is the custom method, we defined above
              
          },
          lname: {
            required: true
            //alphanumeric is the custom method, we defined in the above
           
        },
          email: {
            required: true,
            customEmail: true
          },
          mobile:{
          required: true,
		  number: true,
		  minlength: 10,
		  maxlength: 10
          }
          
        },
          
      },
      messages:{
          fname: {
              //error message for the required field
              required: 'Please enter First Name!'
          },
          lname: {
            //error message for the required field
            required: 'Please enter Last Name!'
        },
          email: {
              required: 'Please enter email!',
              //error message for the email field
              email: 'Please enter valid email!'
          },
          mobile: {
            required: 'Please enter mobile number!',
            //error message for the email field
            mobile: 'Please enter a mobile number!'
        },
          
      },
  });
}
