Template.createUserModal.events({
    'submit form': function(event){
        event.preventDefault();
        usernameVar = (event.target).username.value;
        emailVar = (event.target).email.value;
        pwdVar = (event.target).pwd.value;
        cpwdVar = (event.target).cpwd.value;
        roleVar = (event.target).rolecheck.options[rolecheck.selectedIndex].value;

        if(usernameVar == null || usernameVar == 0){$('#createUserError').html('Must have username!');}
        else if(emailVar == null || emailVar == 0){$('#createUserError').html('Must have email!');}
        else if(pwdVar == null || pwdVar == 0){$('#createUserError').html('Must have password!');}
        else if(cpwdVar == null || cpwdVar == 0){$('#createUserError').html('Must confirm password!');}
        else if(cpwdVar == 0){$('#createUserError').html('Must assign role!');}
        else if(cpwdVar != pwdVar){$('#createUserError').html("Passwords don't match!");}

        else
        {
            Accounts.createUser({
                email: emailVar,
                password: pwdVar,
                username: usernameVar,
                role: roleVar,
                profile: {}
            });

            $('#createUserModal').modal("hide");
        }
    }
});