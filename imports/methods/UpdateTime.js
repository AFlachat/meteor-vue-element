Meteor.methods({
    UpdateTime() {
        Time.upsert('currentTime', { $set: { time: new Date() } });
    },
});
