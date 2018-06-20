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

})