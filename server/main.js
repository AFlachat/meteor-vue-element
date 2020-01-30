import { Meteor } from 'meteor/meteor';

import '/imports/collections/Time';
import '/imports/publications/Time';
import '/imports/methods/UpdateTime';

Meteor.users.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});
Meteor.users.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

Accounts.config({
    forbidClientAccountCreation: true,
});

Meteor.startup(() => {
    // Update the current time
    Meteor.call('UpdateTime');
    // Add a new doc on each start.
    Time.insert({ time: new Date() });
    // Print the current time from the database
    console.log(`The time is now ${Time.findOne().time}`);
});
