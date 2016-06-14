Template.video.helpers({
});

Template.video.rendered = function () {
    
};

Template.video.events({
    'submit form': function (event) {
        event.preventDefault();

        
        var contentTitle = $('#video-view--title').val();
        var contentVideo = $('#video-view--video').val();

        if (contentVideo == '' || contentTitle == '') {
            //show error
        } else {
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
            console.log(contentTitle, contentTextarea, Meteor.user().profile.firstname + ' ' + Meteor.user().profile.lastname, today, Meteor.user().profile.id, contentImage, 'video')
            //Meteor.call('addArticle', contentTitle, contentTextarea, Meteor.user().profile.firstname + '' + Meteor.user().profile.lastname, today, Meteor.user().profile.id, contentVideo, 'video');
            
            Router.go('/');
            setTimeout(function () {
                Modal.show('trophy_popup')
            }, 3000)
            //show confirmation
        }

    },
});


