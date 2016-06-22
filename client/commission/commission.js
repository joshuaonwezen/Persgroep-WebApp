Template.commission.helpers({
    Commission: function () {
        return Commission.find({_id: id});
    },
})

Template.commission.events({
    'click .commission-accept': function(){
        Meteor.call('acceptCommission', commissionObj._id, Meteor.user().profile.id);
        console.log(commissionObj._id, Meteor.user().profile.id);
        Router.go('/');
    }
    
})