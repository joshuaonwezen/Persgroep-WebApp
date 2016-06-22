Template.article.helpers({
    Article: function () {
        return Article.find({}, {sort: {likes:-1}, limit:20});
    },
    Commission: function () {
        return Commission.find({});
    },
    AccountStatus: function () {
        return Meteor.user().profile.professional;
    },
})

Template.article.rendered = function () {
    
}

Template.article.events({

})