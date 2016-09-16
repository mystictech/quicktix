/**
 * Created by taysseer on 16/09/16.
 */
Template.quicknavbar.events({
    'click #logout': function(){
        Meteor.logout();
    }
});

Template.quicknavbar.helpers({
    isAdmin: function(){
        console.log(Meteor.userId());
    }
})