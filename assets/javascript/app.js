console.log("connected modal");

    var button = $("#user-model")
    var user = $("#user");
    var register = $("#register");
    var confirmPw = $("#hide-pw")

    $(document).ready(function(){
<<<<<<< HEAD
        confirmPw.hide();
        button.on("click", function(event) {
            event.preventDefault();
         
=======
        $("#user-model").hide();
    });

    button.on("click", function(event) {
      event.preventDefault();
      $("#user-model").show();

        
      addUser.on("click", function(register){
          submit.preventDefault();
        var $email = $("#email-input").val().trim();
        var $pw = $("#pw-input").val().trim();
        var $confirm = $("#confirm-input").val().trim();
        console.log($email);
        console.log($pw);
        console.log($confirm);
      })

>>>>>>> master
      
              
            register.on("click", function(register){
                submit.preventDefault();
                confirmPw.show();
              var $email = $("#email-input").val().trim();
              var $pw = $("#pw-input").val().trim();
              var $confirm = $("#confirm-input").val().trim();
              console.log($email);
              console.log($pw);
              console.log($confirm);
            })
      
            
      
          });
    });

    