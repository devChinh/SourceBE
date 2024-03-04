const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://devChinh:eDr8QKtjCCoEIr0s@cluster0.1va7807.mongodb.net", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('============= success')

    } catch (error) {
        console.log('============= error', error)
    }
}

module.exports = { connect }