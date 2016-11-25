Template.leftcolumn.helpers({    
    getMyLists: function() {
        var myid = Meteor.userId();
        var mylists = TicketListStore.find({'owners': myid});
        return mylists;
    },

    getLists: function() {
        var lists = TicketListStore.find({'private': false});
        return lists;
    },
    
    getUndoneCount: function(){
        var thisId = this._id;
        var getCount = TicketStore.find({ $and: [ {listid: thisId}, {completed: false}] }).count();
        return getCount;
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
