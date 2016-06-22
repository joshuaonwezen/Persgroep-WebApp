Template.account_detail.helpers ({
    Article: function () {
        return Article.find({userId: Meteor.user().profile.id});
    },
    Commission: function () {
        return Commission.find({takenBy: Meteor.user().profile.id});
    },
    Trophy: function () {
        return Trophy.find({awardedTo: Meteor.user().profile.id});
    },
})

Template.account_detail.rendered = function(){
}

Template.account_detail.events({
    //Delete specific items
    'click .account-article--delete': function(){
        var articleId = $(this)[0].id;
        Meteor.call('deleteArticle', articleId);
    },
    'click .account-commission--delete': function(){
        var commissionId = $(this)[0]._id;
        Meteor.call('deleteCommission', commissionId);
    }
    
})