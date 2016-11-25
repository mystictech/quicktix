import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  if (Meteor.users.find().count() == 0)
    {
        Accounts.createUser({
            email: 'root@quicktix.com',
            username: 'root',
            password: 'p4$$w0rd'
        });
        var rootId = Meteor.users.findOne({username: 'root'})._id;
        if (rootId == null  || rootId == ""){
            console.log('couldnt get root Id');
        }
        else {
            ProfileStore.insert({userId: rootId, role: 'admin', profile: {}});
            console.log("First time starting QuickTix server! Creating root account! Please login as root and change password!");
        }
    }
});