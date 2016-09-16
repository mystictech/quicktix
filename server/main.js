import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (Meteor.users.find().count() == 0)
{
    Accounts.createUser({
        email: 'root@quicktix.com',
        password: 'root',
        username: 'root',
        role: 'admin',
        profile: {}
    });
    console.log("First time starting QuickTix server! Creating root account! Please login as root and change password!");
}
});
