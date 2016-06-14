Template.article.helpers({
    Article: function () {
        return Article.find({}, {sort: {likes:-1}});
    },
    Commission: function () {
        return Commission.find({});
    }
})

Template.article.rendered = function () {

    $('.article-image').each(function(){
    if($(this).src == undefined){
        $(this).attr("src", 'img/previewimg1.jpg');
    }
        
    });
    
}

Template.article.events({
        
    'click .aside-list a': function(){
        Modal.show('trophy_popup');
    }
    
})