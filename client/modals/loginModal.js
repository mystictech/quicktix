Template.loginModal.events({
    'submit form': function(event){
        //event.preventDefault();
        var emailVar = event.target.email.value;
        var passwordVar = event.target.pwd.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
        $('#loginModal').modal("hide");
    }
})