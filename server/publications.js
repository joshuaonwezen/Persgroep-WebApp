Meteor.publish('Article', function () {
    return Article.find();
});

Meteor.publish('Commission', function () {
    if (Commission.find().count() <= 0) {
        Commission.insert({
            _id: "commission2",
            name: "Artikel over IS",
            image: "img/is.jpg",
            reward: "90 euro",
            takenBy: "",
        })
        Commission.insert({
            _id: "commission1",
            name: "Filmpje over Lowlands festival",
            image: "img/lowlands.jpg",
            reward: "300 euro + ticket",
            takenBy: "",
        })
        Commission.insert({
            _id: "commission3",
            name: "Artikel over EK Voetbal 2016",
            image: "img/ekvoetbal.jpg",
            reward: "230 euro",
            takenBy: "",
        })
    }
    return Commission.find();
});

Meteor.publish('Trophy', function () {
    if (Trophy.find().count() <= 0) {
        Trophy.insert({
            _id: "trophy1",
            name: "Artikel schrijven",
            image: "img/trophy1.png",
            awardedTo: [],
        })
        Trophy.insert({
            _id: "trophy2",
            name: "Actieve gebruiker",
            image: "img/trophy2.png",
            awardedTo: [],
        })
        Trophy.insert({
            _id: "trophy3",
            name: "Professional",
            image: "img/trophy3.png",
            awwardedTo: [],
        })
    }
    return Trophy.find();
});
