Template.account_detail.helpers ({
    Article: function () {
        return Article.find({userId: Meteor.user().profile.id});
    },
    Commission: function () {
        return Commission.find({});
    },
    Trophy: function () {
        return Trophy.find({awardedTo: Meteor.user().profile.id});
    }
})

Template.account_detail.rendered = function(){
}

Template.account_detail.events({
    'click .account-article--delete': function(){
        var articleId = $(this)[0].id;
        Meteor.call('deleteArticle', articleId);
    }
    
})