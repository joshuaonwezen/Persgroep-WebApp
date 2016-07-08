Template.article_detail.helpers({
    Article: function () {
        return Article.find({_id: id});
    },
})

Template.article_detail.rendered = function () {
    //Hides the likes/dislikes initially
    $('.article--detail--content--target').append(articleObj.content);
    $('.article-detail--like').hide();
    $('.article-detail--dislike').hide();

    //Show correct button based on article array of users that liked/disliked it
    if (articleObj.likedBy.indexOf(Meteor.user().profile.id) == -1) {
        $('.article-detail--like').show();
    }
    if (articleObj.dislikedBy.indexOf(Meteor.user().profile.id) == -1) {
        $('.article-detail--dislike').show();
    }
}

Template.article_detail.events({
    //Like
    'click .article-detail--like': function (event) {
        var articleLikes = articleObj.likes;
        //Add correct points based on if disliked or not
        if (articleObj.dislikedBy.indexOf(Meteor.user().profile.id) != -1) {
            var updatedLikes = articleLikes + 2;
        }else{
            updatedLikes = articleLikes + 1;
        }
        
        //Remove user from dislikes if disliked
        Meteor.call('removeArticleUserDislikes', articleObj.id, Meteor.user().profile.id);
        Meteor.call('updateArticleLikes', articleObj.id, updatedLikes, Meteor.user().profile.id);
        $('.article-detail--like').hide();
        $('.article-detail--dislike').show();

        //Add experience to user account
        var userPoints = Meteor.user().profile.points;
        var updatedPoints = userPoints + 5;
        Meteor.call('updateUserPoints', Meteor.user().profile.id, updatedPoints);
    },
    'click .article-detail--dislike': function (event) {
        var articleLikes = articleObj.likes;
        //Adds correct amount of points based on if it's already liked or not
        if (articleObj.likedBy.indexOf(Meteor.user().profile.id) != -1) {
            var updatedLikes = articleLikes - 2;
        }else{
            updatedLikes = articleLikes - 1;
        }
        
        Meteor.call('removeArticleUserLikes', articleObj.id, Meteor.user().profile.id);
        Meteor.call('updateArticleDislikes', articleObj.id, updatedLikes, Meteor.user().profile.id);
        //Show correct button
        $('.article-detail--dislike').hide();
        $('.article-detail--like').show();

    },
    'submit form': function (event) {
        event.preventDefault();
        var comment = $('#article-detail--comment-text').val();
        if (comment != '') {
            $('.error-message').remove();
            //getting formatted date
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            today = mm + '/' + dd + '/' + yyyy;
            
            //Add comment
            Meteor.call('addArticleComment', articleObj.id, comment, Meteor.user().profile.firstname + ' ' + Meteor.user().profile.lastname, today);

            //Adds points
            var userPoints = Meteor.user().profile.points;
            var updatedPoints = userPoints + 5;
            Meteor.call('updateUserPoints', Meteor.user().profile.id, updatedPoints);
            $('#article-detail--comment-text').val('');
        }else{
            //Adds error message
            $('.error-message').remove();
            $('.article-detail--comment-row > form').append('<label class="error-message">U heeft niet alle velden correct ingevoerd.</label>')
        }
    }
});