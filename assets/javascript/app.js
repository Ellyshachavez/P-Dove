console.log("connected modal");

    var button = $("#user-model")
    var addUser = $("#add-user");
    var register = $("#register");

    $(document).ready(function(){
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

      

    });