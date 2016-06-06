Meteor.methods ({
  'addArticle' (title, context, author, sent, userId) {
    Article.insert({
      title: title,
      context: context,
      author: author,
      sent: sent,
      userId: userId,
      id: new Date().getTime().toString(),
      addedAt: new Date(),
    })
  },
});
