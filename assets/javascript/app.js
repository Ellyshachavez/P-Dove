console.log("connected modal");

    var popUp = $("#user-model")
    var user = $("#user");
    var register = $("#register");
    var confirmPw = $("#hide-pw")

    $(document).ready(function(){
    });

    popUp.on("click", function(event) {
      event.preventDefault();
      confirmPw.hide();


        
      register.on("click", function(register){
          submit.preventDefault();
        var $email = $("#email-input").val().trim();
        var $pw = $("#pw-input").val().trim();
        var $confirm = $("#confirm-input").val().trim();
        console.log($email);
        console.log($pw);
        console.log($confirm);
      })

      
              
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

    