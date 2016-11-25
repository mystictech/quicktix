Template.rightcolumn.helpers({
    getListTitle: function () {
        const selectedList = Session.get('selectedList');
        if (!selectedList){
            return ("...Create or Choose a Ticket list on the left...");
        }
        else{
            return TicketListStore.findOne({_id: selectedList}).listname;
        }
    },
    getListEntries: function(){
        const selectedList = Session.get('selectedList');
        if (selectedList != null) {
            return TicketStore.find({listid: selectedList, completed: false}, { sort: {createdAt: -1}});
        }
    },
    doneListEntries: function(){
        const selectedList = Session.get('selectedList');
        if (selectedList != null) {
            return TicketStore.find({listid: selectedList, completed: true}, { sort: {createdAt: -1}});
        }
    },
    checked: function(){
        var isCompleted = this.completed;
        if(isCompleted) { return "checked"; }
        else {return "";}
    },
    isPrivate: function(){
        const selectedList = Session.get('selectedList');
        if (TicketListStore.findOne({'_id': selectedList}).private == true )
        {
            return 'lock';    
        }
        else{
            return 'unlock';
        }
        
    }
    
});


Template.rightcolumn.events({
    'submit form': function(event){
        event.preventDefault();
        var iteminput = event.target.itemInput.value;
        if (iteminput == null || iteminput == ""){
            toastr.warning("Can't create empty ticket.");
        }
        else {
            const selectedList = Session.get('selectedList');
            var username = Meteor.users.findOne({'_id': Meteor.userId() }).username;
            var thistime = (new Date()).toLocaleDateString() + " @ " + (new Date()).toLocaleTimeString();
            var priority = "0";
            var increment = TicketStore.find({listid: selectedList}).count() + 1;
            TicketStore.insert({
                listid: selectedList,
                increment: increment,
                priority: priority,
                entryNote: iteminput,
                createdAt: thistime,
                createdBy: username,
                completed: false,
                replies: []
            });
            toastr.success("Ticket created successfully.")
            event.target.itemInput.value = "";
        }
    },
    'click #titlePrivate': function()
    {        
        var thisid = Session.get('selectedList');        
        var privacystatus = TicketListStore.findOne({_id: thisid}).private;
        console.log(thisid + " has privacy that is " + privacystatus);
        if (privacystatus == true)
        {
            TicketListStore.update({'_id': thisid}, { $set: {'private': false}});
        }
        else if (privacystatus == false)
        { 
            TicketListStore.update({'_id': thisid}, { $set: {'private': true}});
        }
        
        
    }
});