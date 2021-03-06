Template.ticketentry.helpers({
    'isChecked': function(){
        var isCompleted = this.completed;
        if(isCompleted){ return "checked"; }
        else { return ""; }
    },

    'priorityColor': function(){
        var docId = this._id;
        //var selectedPrior = $("#priorityselect").val();
        var selectedPrior = TicketStore.findOne({_id: docId}).priority;
        if (selectedPrior == "0"){
            return "white";
        }
        if (selectedPrior == "1"){
            return "lawngreen";
        }
        if (selectedPrior == "2"){
            return "yellow";
        }
        if (selectedPrior == "3"){
            return "red";
        }
    }
});

Template.ticketentry.events({
    'change [type=checkbox]': function()
    {
        var docId = this._id;
        var isCompleted = this.completed;
        if(isCompleted)
        {
            TicketStore.update({_id: docId}, {$set: {completed: true}});
        }
        else{
            TicketStore.update({_id: docId}, {$set: {completed: false}});
        }
    },

    'click .addcomment': function()
    {
        var divid = "#" + (this._id) + "row";
        console.log(divid);
        $(divid).attr('class', 'row');
    },

    'click .commentSubmit': function()
    {
        var username = Meteor.users.findOne({_id: Meteor.userId()}).username;
        var thistimeString = (new Date()).toLocaleDateString() + " @ " + (new Date()).toLocaleTimeString();
        var userid = Meteor.userId();
        var thistime = new Date();
        var id = this._id;
        var inputid = "#" + (id) + "Input";
        var comment = $(inputid).val();
        TicketStore.upsert({_id: id},
        {$push:
            { replies:
                {
                    comment: comment,
                    commenterId: userid,
                    commenter: username,
                    when: thistime,
                    whenstring: thistimeString,
                    completed: false
                }
            }
        });
        var divid = "#" + (this._id) + "row";
        $(divid).attr('class', 'commentrow row');
        $(inputid).val('');
    },

    'click .cancelcomment': function()
    {
        var divid = "#" + (this._id) + "row";
        $(divid).attr('class', 'commentrow row');
    },

    'change .doneCheck': function(){
        var isCompleted = this.completed;
        if (isCompleted){
            TicketStore.upsert({_id: this._id}, {$set: {completed: false}});
        }
        else{
            TicketStore.upsert({_id: this._id}, {$set: {completed: true}});
        }
    },

    'change #priorityselect': function(event){
        var priorityval = (event.target).value;
        console.log(this._id + " to priority " + priorityval);
        TicketStore.update({_id: this._id}, {$set: {priority: priorityval}});
    }


});