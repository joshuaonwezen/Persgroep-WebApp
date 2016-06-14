Meteor.methods ({
  'addArticle' (title, content, author, sent, userId, image, type) {
    Article.insert({
      title: title,
      content: content,
      author: author,
      sent: sent,
      userId: userId,
      likes: 0,
      image: image,
      type: type,
      likedBy: [],
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
      Article.update({id: id}, { $push: {"likedBy": userId}});

  },
  'updateUserPoints' (id, points) {
      Meteor.users.update({"profile.id" : id}, {$set: {"profile.points": points}});
  },
  
  'addTrophy' (userId, trophyId){
        Trophy.update({_id: trophyId},{ $push: {awardedTo: userId}});
        Meteor.users.update({'profile.id': id}, { $push: {"profile.trophy": trophyId}});
  },
});
