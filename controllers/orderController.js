const Order = require('../models/Order')
const Cocktail = require('../models/Cocktail')

exports.register = function (req, res) {
    let order = new Order(req.body)
    order.register().then(function (result) {
        req.session.order = {name: order.data.name, cocktail: order.data.cocktail}
        req.session.save(function () {
            res.redirect('/')
        })
    }).catch(function (e) {
        req.flash('errors', e)
        req.session.save(function () {
            res.redirect('/')
        })
    })
}

exports.home = function (req, res) {
    let cocktail = new Cocktail()
    let order = new Order()
    cocktail.getCocktails().then((cocktails) => {
        order.getOrders().then((orders) => {
            if (req.session.order) {
                res.render('waiting-page', {data: {order: req.session.order, orders: orders, cocktails: cocktails}})
            } else {
                res.render('order-page', {data: {orders: orders, cocktails: cocktails}})
            }
        })
    })
}
