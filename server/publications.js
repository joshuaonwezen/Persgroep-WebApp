Meteor.publish('Article', function () {
    return Article.find();
});

Meteor.publish('Commission', function () {
    return Commission.find();
});
