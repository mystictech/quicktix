Template.newListModal.events({
    'click #createTicketList': function (){
        var user;
        if (!this.userId){ user ='anonymous';}
        else{ user = Meteor.userId()};
        var newListName = $('#newlistName').val();
        if(newListName == null  || newListName == "")
        {
            $('#newlistError').html("Can't be empty!");
        }
        else
        {
            console.log(newListName);
            TicketListStore.insert({
                listname: newListName,
                createdAt: new Date(),
                createdBy: user
            });
            $('#newlistName').val('');
            $("#newListModal").modal("hide");
        }
    }
});
