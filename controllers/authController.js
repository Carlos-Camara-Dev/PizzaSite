const bcrypt = require('bcrypt');
const salt = 10;
const jwt = require('jsonwebtoken');
const client = require('../model/user');

const handleLogin = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.sendStatus(400)
    const userFound = await client.findOne({ where: {email: email} })
    if(!userFound) return res.sendStatus(400)
    const match = await bcrypt.compare(password, userFound.password)
    if(match){
        const userInfo = {
            username: userFound.username,
            adress: userFound.adress
        }
        return res.status(200).json(userInfo)
    }
    else return res.sendStatus(403)
}

module.exports = handleLogin;