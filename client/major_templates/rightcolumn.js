Template.rightcolumn.helpers({
    getListTitle: function () {
        const selectedList = Session.get('selectedList');
        if (!selectedList){
            return ("Pick a Ticket list");
        }
        else{
            return TicketStore.findOne({_id: selectedList}).listname;
        }
    },

    getListEntries: function(){
        const selectedList = Session.get('selectedList');
        return TicketStore.findOne({_id: selectedList}).listentries;
    }
});


Template.rightcolumn.events({
    'submit form': function(event){
        event.preventDefault();
        var iteminput = event.target.itemInput.value;
        const selectedList = Session.get('selectedList');
        TicketStore.update({_id: selectedList}, {$push: {listentries: {
            entryNote: iteminput,
            createdAt: new Date(),
            createdBy: "anonymous"
        }}});
        event.target.value = "";
    }
});