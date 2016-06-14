Router.configure({
    layoutTemplate: 'index',
    waitOn: function () {
        return [Meteor.subscribe('Article')];
    }
});

Router.route('/', {
    name: "article",
    waitOn: function () {
        return [Meteor.subscribe('Article'), Meteor.subscribe('Commission')];
    },
    action: function () {
        this.render('article');
    },
});

Router.route('/register', {
    name: "register",
    action: function () {
        this.render('register');
    },
});

Router.route('/login', {
    name: "login",
    action: function () {
        this.render('login');
    },
});



Router.route('/write', {
    name: "write",
    waitOn: function () {
        return [];
    },
    action: function () {
        this.render('write_article');
    },
});

Router.route('/video', {
    name: "video",
    waitOn: function () {
        return [];
    },
    action: function () {
        this.render('video');
    },
});

Router.route('/article/:_id', {
    name: "article_detail",
    waitOn: function () {
        return [Meteor.subscribe('Article')]
    },
    action: function () {
        this.render('article_detail', {
            data: function () {
                var id = this.params._id
                return articleObj = Article.findOne({_id: id});
            }
        });
    }
});

Router.route('/account/:_id', {
    name: "account_detail",
    waitOn: function () {
        return [Meteor.subscribe('Article'), Meteor.subscribe('Commission'), Meteor.subscribe('Trophy')]
    },
    action: function () {
        this.render('account_detail', {
            data: function () {
                var id = this.params._id
                return Meteor.user();
            }
        });
    }
});