Template.article.helpers({
    Article: function () {
        //Sorts users based on likes with a limit of 20 on initial load
        return Article.find({}, {sort: {likes:-1}, limit:20});
    },
    Commission: function () {
        return Commission.find({});
    },
    AccountStatus: function () {
        if (Meteor.user()) {
            return Meteor.user().profile.professional;
        }
    },
})

Template.article.rendered = function () {
    
}

Template.article.events({

})