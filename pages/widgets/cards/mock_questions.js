$(function(){


    $('#login').click(function(){
        $('#signuppage').hide()
          $('#loginpage').show()
    })

    $('#signup').click(function(){
        $('#loginpage').hide()
        $('#signuppage').show()
  })

  $('#v2').click(function(){
        $('#questions').hide()
         $('#sidebar2').show()
  })

  $('#v1').click(function(){
    $('#sidebar2').hide()
    $('#questions').show();
})

  $('#click23').click(function(){
      $('#signuppage').hide();
      $('#loginpage').show()

  })

  $('#click24').click(function(){
    $('#loginpage').hide()
      $('#signuppage').show()

})

})