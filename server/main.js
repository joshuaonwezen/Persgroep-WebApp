Meteor.startup(function () {
  //Server upload
  UploadServer.init({
    tmpDir: __meteor_bootstrap__.serverDir + '/uploads/tmp',
    uploadDir: __meteor_bootstrap__.serverDir +  '/uploads/',
    checkCreateDirectories: true,
    getDirectory: function(fileInfo, formData) {
      // create a sub-directory in the uploadDir based on the content type (e.g. 'images')
      return formData.contentType;
    },
    finished: function(fileInfo, formFields) {
      // perform a disk operation
    },
    cacheTime: 100,
    mimeTypes: {
        "xml": "application/xml",
        "vcf": "text/x-vcard"
    }
  });
  
  Meteor.setInterval(function(){
      
  }, 500)
});


//Update account based on current data
//Meteor.users.after.update(function (userId, doc, fieldNames, modifier) {
//  if (doc.points > 200) {
////        Meteor.users.update({"profile.id" : doc.id}, {$set: {"profile.professional" : true}});
//  }
//});