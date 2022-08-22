const quotes = require('./db.json')
let id = 4

module.exports = {

    getCompliment: (req, res) => {
        const compliments = [
            "Gee, you're a smart cookie!",
            "Cool shirt!", 
            "Your Javascript skills are stellar."
            ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
            "A faithful friend is a strong defense.",
            "A fresh start will put you on your way.",
            "Adventure can be real happiness.",
            "Advice is like kissing. It cost nothing and is a pleasant thing to do.",
            "All the effort you are making will ultimately pay off."
            ];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },





// grab quotes from data base -db.json


    getQuotes: (req, res) => {
        res.status(200).send(quotes);
    },

    deleteQuote: (req, res) => {
        const { id } = req.params;
        const index = quotes.findIndex((element) => element.id === +req.params.id);
        quotes.splice(index, 1);
        res.status(200).send(quotes);
    }, 

    createQuote: (req, res) => {
        let { quote } = req.body;
        req.body.id = id;
        req.body.quote = quote
        quotes.push(req.body)
        res.status(200).send(quotes);
        id++;
    }, 

}