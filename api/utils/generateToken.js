exports.checkPassword = (text, psypherText) => {
    console.log("checkPassword executed")
    console.log(text, psypherText)
    return bcrypt.compareSync(text, psypherText)
}
exports.generateToken = (userEmail) => {
    return jwt.sign({ unique: userEmail, timeStamp: Date.now }, config.keys.jsonwebtoken)
}