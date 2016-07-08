Meteor.publish('Article', function () {
    return Article.find();
});

//Add new commissions if they don't exist
Meteor.publish('Commission', function () {
    if (Commission.find().count() <= 0) {
        Commission.insert({
            _id: "commission2",
            name: "Artikel over IS",
            description: "Schrijf een artikel over IS. Het gaat hier om een serieus artikel over recente gebeurtenissen.",
            image: "img/is.jpg",
            reward: "90 euro",
            takenBy: "",
        })
        Commission.insert({
            _id: "commission1",
            name: "Filmpje over Lowlands festival",
            description: "We sturen je 2 weekend tickets voor Lowlands om een filmrapportage te maken over het festival. Het doel is hier de sfeer vast te leggen en om leuke interviews in de rapportage te stoppen.",
            image: "img/lowlands.jpg",
            reward: "300 euro + ticket",
            takenBy: "",
        })
        Commission.insert({
            _id: "commission3",
            name: "Artikel over EK Voetbal 2016",
            description: "Het gaat hier om alle wedstrijden van de 8e finale. Dus niet specifiek 1 wedstrijd maar een grote samenvatting van alle wedstrijden.",
            image: "img/ekvoetbal.jpg",
            reward: "230 euro",
            takenBy: "",
        })
    }
    return Commission.find();
});

//Add new trophies if they don't exist
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
