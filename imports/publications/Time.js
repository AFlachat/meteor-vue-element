Meteor.publish('Time', function () {
    return Time.find({});
});
