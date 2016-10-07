Template.leftcolumn.helpers({
    getLists: function() {
        var lists = TicketListStore.find().fetch();
        return lists;
    }
});


Template.leftcolumn.events({
    'click .listName': function(){
        var listid = this._id;
        console.log(listid);
        Session.set('selectedList', listid);
    },
    'click #addList': function(){
        $('#newlistError').html('');
    }
});
