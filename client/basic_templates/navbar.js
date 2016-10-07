/**
 * Created by taysseer on 16/09/16.
 */
Template.quicknavbar.events({
    'click #logout': function(){
        Meteor.logout();
    }
});

Template.quicknavbar.helpers({
    isAdmin: function()
    {
        var UserId = Meteor.userId();
        //var ProfileId = ProfileStore.findOne({userId: UserId}).profile.roles;
        var role = Meteor.users.findOne({'_id': UserId}).profile.role;
        if (role != null && role == 'admin')
        {
            return true;
        }
        else
        {
            return false;
        }
    }
})