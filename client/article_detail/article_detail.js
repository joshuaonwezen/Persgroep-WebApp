Template.article_detail.helpers ({
    Article: function () {
        return Article.find({_id: id});
    },
})

Template.article_detail.rendered = function(){
    $('.article--detail--content--target').append(articleObj.content);
    $('.article-detail--like').hide();

    if(articleObj.likedBy.indexOf(Meteor.user().profile.id) == -1){
        $('.article-detail--like').show();
    }
}

Template.article_detail.events({
   'click .article-detail--like': function(event){
       var articleLikes = articleObj.likes;
       var updatedLikes = articleLikes + 1;
       Meteor.call('updateArticleLikes', articleObj.id, updatedLikes,  Meteor.user().profile.id);
       $('.article-detail--like').hide();
       
       var userPoints = Meteor.user().profile.points;
       var updatedPoints = userPoints + 5;
       console.log(userPoints, updatedPoints);
       Meteor.call('updateUserPoints', Meteor.user().profile.id, updatedPoints);
   }    
});