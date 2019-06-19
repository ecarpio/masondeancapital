$(function(){

  // Homepage Splash Background
  var options = {
      mobileFallbackImage: "/images/home-bg.png",
      playOnlyIfVisible  : false,
      //coverImage: "/images/home-bg.png",
      fadeOnStartTime: 100,
  };

  myPlayer = $(".player").YTPlayer(options);

  var requiredInput = $('input:required');

  $('.formFields').each(function(){

    requiredInput.on('keyup', function(){
      var isValid = true;
      requiredInput.filter('[required]:visible').each(function() {
        if ( $(this).val() === '' )
        isValid = false;
      });
      
      if(isValid == true) {
        $('.submitApp').prop('disabled', false);
      } else {
        $('submitApp').prop('disabled', true);
      }
    })
  })

  requiredInput.each(function(){
    $(this).on('blur', function(){
      if($(this).val() === '' ){
        $(this).addClass('requiredError')
      }
    })
  })

  // Form Redirect
  $('#submitAppForex').on('click', function(){
    $('input').each(function(){
        if( $(this).val() == "" ){
          $(this).addClass('requiredError');
        } else {
          if ($('#acctType').val() == 'individual' && $('#country').val() == 'usa') {
            window.open("https://www1.oanda.com/register/#/sign-up", "_blank");
          } else if($('#acctType').val() == 'corporation' && $('#country').val() == 'usa'){
            window.open("https://fxtrade.oanda.com/your_account/fxtrade/register/corporate/beforeyoubegin?ib=1198286&amp;opc=82592FCC-798C-11E9-AC2A-F0EF76F6A1A9&amp;eightst=0&amp;seg=has_gate", "_blank");
          } else {
            window.location.replace("/download.html");
          }
        }

        // Function to Collect Data
    });
	});


  // Select Account
  $('#accountSelect button').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    
    $('.formFields input').val('').removeClass('requiredError');
    $('.submitApp').prop('disabled', true);



    // Show Form
    if($('#forex').hasClass('active')) {
      $('.forexAccount').show()
      $('.futuresAccount').hide()
    } else {
      $('.forexAccount').hide()
      $('.futuresAccount').show()
    }


  })
})