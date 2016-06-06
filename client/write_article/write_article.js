Template.write_article.helpers({
});

Template.write_article.rendered = function () {
    tinymce.init({
        selector: 'textarea',
        skin_url: '/packages/teamon_tinymce/skins/lightgray',
        height: 400,
    });
};

Template.write_article.events({
    'submit form': function (event) {
        event.preventDefault();
        
        var contentTextarea = tinyMCE.activeEditor.getContent();
        var contentTitle = $('#write-view--title').val();
        var contentSent = true;
        if(contentTextarea == '' || contentTitle == ''){
            //show error
        }else{
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
            
            Meteor.call('addArticle', contentTitle, contentTextarea, Meteor.user().firstname + Meteor.user().lastname, today, Meteor.user().id);
            Router.go('/');

            //show confirmation
        }
        
    },
});


