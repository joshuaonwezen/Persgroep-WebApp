Router.configure({
 	layoutTemplate: 'index',
 	waitOn: function () {
 		return [Meteor.subscribe('Article')];
 	}
});

Router.route('/',  {
	name: "article",
  	waitOn: function () {
 		return [Meteor.subscribe('Article'),Meteor.subscribe('Commission')];
 	},
 	action:function () {
 		this.render('article');
 	},
});

Router.route('/register',  {
	name: "register",
 	action:function () {
 		this.render('register');
 	},
});

Router.route('/login',  {
	name: "login",
 	action:function () {
 		this.render('login');
 	},
});

Router.route('/write',  {
	name: "write",
  	waitOn: function () {
 		return [Meteor.subscribe('Article')];
 	},
 	action:function () {
 		this.render('write_article');
 	},
});

Router.route('/article/:_id', {
	name:"articledetail",
	waitOn: function() {
		return [ Meteor.subscribe('Article')]
	},
	action:function () {
  		this.render('article_detail', {
   			data: function () {
      			return id = this.params._id
    		}
  		});
  	}
});