Template.leftcolumn.helpers({
    getLists: function() {
        var lists = TicketStore.find().fetch();
        return lists;
    }
});


Template.leftcolumn.events({
    'click .listName': function(event){
        var lastid = this._id;
        console.log(lastid);
        Session.set('selectedList', lastid);
    },
    'click #addList': function(){
        $('#newlistError').html('');
    }
});
