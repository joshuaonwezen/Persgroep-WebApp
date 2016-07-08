Meteor.methods ({
   //Add article with all the values necessary
  'addArticle' (title, content, author, sent, userId, image, video) {
    Article.insert({
      title: title,
      content: content,
      author: author,
      sent: sent,
      userId: userId,
      likes: 0,
      image: image,
      video: video,
      likedBy: [],
      dislikedBy: [],
      comments: [],
      id: new Date().getTime().toString(),
      addedAt: new Date(),
    })
  },
  'deleteArticle' (id){
     Article.remove({
         id: id,  
     })  
  },
  //Adds a user to the article likes/dislikes so that it can be iterated through to check if it's liked/dislieked or not
  'updateArticleLikes' (id, likes, userId) {
      Article.update({id : id},{$set:{likes : likes}}); 
      Article.update({id: id}, { $push: {'likedBy': userId}});
  },
  'updateArticleDislikes' (id, likes, userId) {
      Article.update({id : id},{$set:{likes : likes}});   
      Article.update({id: id}, { $push: {'dislikedBy': userId}});
  },
  //Remove the user from the array listed above
  'removeArticleUserLikes' (id, userId){
        Article.update({id: id}, { $pull: {'likedBy': userId}});  
  },
  'removeArticleUserDislikes' (id, userId){
        Article.update({id: id}, { $pull: {'dislikedBy': userId}});
  },
  //Adds a comment to a specific article
  'addArticleComment' (id, comment, name, posted){
      Article.update({id: id}, { $push: {"comments": [comment, name, posted]}});
  },
  //Updates experience/points
  'updateUserPoints' (id, points) {
      Meteor.users.update({"profile.id" : id}, {$set: {"profile.points": points}});
  },
  //Adds a trophy
  'addTrophy' (userId, trophyId){
        Trophy.update({_id: trophyId},{ $push: {awardedTo: userId}});
        Meteor.users.update({'profile.id': userId}, { $push: {"profile.trophy": trophyId}});
  },
  //Accept a commission to assign it to you
  'acceptCommission' (id, username){
      Commission.update({_id: id}, { $set: {takenBy: username}});
  },
  'deleteCommission' (id){
        Commission.update({_id: id}, { $set: {takenBy: ''}});
  },
  //Sets account status to professional
  'updateAccountStatus' (id){
       Meteor.users.update({"profile.id" : id}, {$set: {"profile.professional" : true}});
  }
});
