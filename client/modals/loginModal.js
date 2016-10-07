Template.loginModal.events({
    'submit form': function(event){
        event.preventDefault();
        var usernameVar = event.target.username.value; console.log(usernameVar);
        var passwordVar = event.target.pwd.value; console.log(passwordVar);
        Meteor.loginWithPassword(usernameVar, passwordVar, function(error){
            if(error){console.log(error); toastr.warning(error);}
        });
        $('#loginModal').modal("hide");
    }
})