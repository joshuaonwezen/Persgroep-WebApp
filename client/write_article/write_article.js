//import url('//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');


Template.write_article.helpers({
});

Template.write_article.rendered = function () {
    //Adds the text editor
    mediumEdit = new MediumEditor('#write-view--textarea', {
        relativeContainer: $('#write-view--textarea'),
        placeholder: {
            text: 'Schrijf hier uw artikel*'
        }
    });



};

Template.write_article.events({
    'submit form': function (event) {
        event.preventDefault();


        var contentTextarea = $('div[id*="medium-editor"]').html();
        var contentTitle = $('#write-view--title').val();
        var contentImage = $('#write-view--image').val();
        var contentVideo = $('#write-view--video').val();
        //check URL
        function isValidURL(str) {
           var a  = document.createElement('a');
           a.href = str;
           return (a.host && a.host != window.location.host);
        }
        if (contentTextarea == '' || contentTitle == '' || isValidURL(contentImage) == false) {
            //show error
            $('.error-message').remove();
            $('.write-view--submit-row').append('<label class="error-message">U heeft niet alle velden correct ingevoerd.</label>')
        } else if(contentVideo == '' || isValidURL(contentVideo)){
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

            var userPoints = Meteor.user().profile.points;
            var updatedPoints = userPoints + 50;
            if (updatedPoints > 200 && Meteor.user().profile.trophy.indexOf('trophy3') == -1) {
                setTimeout(function () {
                    Modal.show('trophy_popup');
                }, 3000);
                Meteor.call('updateAccountStatus', Meteor.user().profile.id);
                Meteor.call('addTrophy', Meteor.user().profile.id, 'trophy3');
            }
            Meteor.call('updateUserPoints', Meteor.user().profile.id, updatedPoints);

            Meteor.call('addArticle', contentTitle, contentTextarea, Meteor.user().profile.firstname + ' ' + Meteor.user().profile.lastname, today, Meteor.user().profile.id, contentImage, contentVideo);

            Router.go('/');

            if (Meteor.user().profile.trophy.indexOf('trophy1') == -1) {
                setTimeout(function () {
//                    Modal.show('trophy_popup');
                }, 3000);
                Meteor.call('addTrophy', Meteor.user().profile.id, 'trophy1');
            }
            //show confirmation
        }

    },
});


