Template.navigation.helpers({
    name: function () {
        return Meteor.user().profile.firstname + ' ' + Meteor.user().profile.lastname;
    },
    points: function () {
        return Meteor.user().profile.points;
    }
})

Template.navigation.events({
    'click .logout': function (event) {
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    },
    'click .nav-responsive-menu': function(event){
        event.preventDefault();
        if ($('nav').hasClass('collapsed')) {
            $('nav').removeClass('collapsed');
            $('li:not(".nav-responsive-menu")').hide();
        } else {
            $('nav').addClass('collapsed');
            $('li').show();
        }
        
    }
    
    
});