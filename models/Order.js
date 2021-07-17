const ordersCollection = require('../db').db().collection("Orders")

let Order = function (data) {
    this.data = data
    this.errors = []
}

Order.prototype.register = function () {
    return new Promise((resolve, reject) => {
        //this.data.push({status: "false"})
        this.data['status'] = false
        ordersCollection.insertOne(this.data).then(
            resolve("Your drink will be done soon")
        ).catch(() => {
                reject("Something went wrong")
            }
        )
    })
}

Order.prototype.getOrders = () => {
    return new Promise((resolve, reject) => {
        ordersCollection.find().toArray((err, orders) => {
            resolve(orders)
        })
    })
}

module.exports = Order