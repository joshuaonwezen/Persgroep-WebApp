Template.register.events({
    'submit form': function (event) {
        event.preventDefault();
        var email = $('[name=email]').val();
        var firstname = $('[name=firstname]').val();
        var lastname = $('[name=lastname]').val();
        var password = $('[name=password]').val();
        var points = 0;
        var id = new Date().getTime().toString();
        Accounts.createUser({
            email: email,
            password: password,
            profile: {
                points: points,
                id: id,
                firstname: firstname,
                lastname: lastname,
                professional: false,
                trophy:[],
            },
        });
        Router.go('/');
    }
});

Template.login.events({
    'submit form': function (event) {
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password);
        Router.go('/');
    }
});