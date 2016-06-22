Meteor.methods ({
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
  'updateArticleLikes' (id, likes, userId) {
      Article.update({id : id},{$set:{likes : likes}}); 
      Article.update({id: id}, { $push: {'likedBy': userId}});
  },
  'updateArticleDislikes' (id, likes, userId) {
      Article.update({id : id},{$set:{likes : likes}});   
      Article.update({id: id}, { $push: {'dislikedBy': userId}});
  },
  'removeArticleUserLikes' (id, userId){
        Article.update({id: id}, { $pull: {'likedBy': userId}});  
  },
  'removeArticleUserDislikes' (id, userId){
        Article.update({id: id}, { $pull: {'dislikedBy': userId}});
  },
  'addArticleComment' (id, comment, name, posted){
      Article.update({id: id}, { $push: {"comments": [comment, name, posted]}});
  },
  'updateUserPoints' (id, points) {
      Meteor.users.update({"profile.id" : id}, {$set: {"profile.points": points}});
  },
  
  'addTrophy' (userId, trophyId){
        Trophy.update({_id: trophyId},{ $push: {awardedTo: userId}});
        Meteor.users.update({'profile.id': userId}, { $push: {"profile.trophy": trophyId}});
  },
  'acceptCommission' (id, username){
      Commission.update({_id: id}, { $set: {takenBy: username}});
  },
  'updateAccountStatus' (id){
       Meteor.users.update({"profile.id" : id}, {$set: {"profile.professional" : true}});
  }
});
