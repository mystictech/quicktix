Template.newListModal.events({
    'click #createTicketList': function (){
        var userID = Meteor.userId();

        if (userID == null){ user ='anonymous';}        

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
                createdBy: userID,
                owners: [userID],
                private: false
            });
            $('#newlistName').val('');
            $("#newListModal").modal("hide");
        }
    }
});
