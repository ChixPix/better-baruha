const cocktailsCollection = require('../db').db().collection("Cocktails")

let Cocktail = function () {
    this.data = {}
    this.errors = []
}

Cocktail.prototype.getCocktails = () => {
    return new Promise((resolve, reject) => {
        cocktailsCollection.find().toArray((err, cocktails) => {
            resolve(cocktails)
        })
    })
}

module.exports = Cocktail