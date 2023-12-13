const Op = require('sequelize');
const bcrypt = require('bcrypt');
const salt = 10;
const jwt = require('jsonwebtoken');
const client = require('../model/user');

const getUsers = async (req, res)=>{
    const result = await client.findAll();
    return res.status(200).json(result);
}
const registerUser = async (req, res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const plainPassword = req.body.password;
    const conflict = await client.findOne({ where: { email: email } })
    if(conflict) return res.status(400).json("Email already taken")
    const password = await bcrypt.hash(plainPassword, salt);
    if(!username||!email || !password) return res.status(400).json("Username, email and password are required")
    const REFRESH_TOKEN = jwt.sign(
        {
            userInfo:{
                username: username,
                roles:1
            }
        },
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: '24h'}

    )
    const ACCESS_TOKEN = jwt.sign(
        {
            userInfo:{
                username: username,
                roles:1
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '30s'}

    )
    const clientResult = await client.create({
    role_level:1,
    username,
    email,
    password,
    refreshToken: REFRESH_TOKEN
}); 
    console.log(clientResult)
    res.cookie('jwt', REFRESH_TOKEN,{expiresIn: '24h', httpOnly: true})
    return res.json(ACCESS_TOKEN);
}

const updateUser = async (req, res)=>{
    const userFound = await client.findByPk(req.body.id)
    if(!userFound) return res.status(400).json('User not found');
    
    const {username, email} = req.body;
    
    const result = await client.update({email, username},{where:{id: req.body.id}})
    return res.status(200).json(result);
}

const deleteUser = async (req, res)=>{
    const userFound = await client.findByPk(req.body.id) 
    if(!userFound) return res.status(400).json('User not found')
    await client.destroy({where: {id: req.body.id}})
    return res.status(200).json(`User ${userFound.username} Deleted`);
}

const getUser = async (req, res)=>{
    // if req.params._id is favicon.ico then response immediately
    if (req.params.id === "favicon.ico") {
        return res.status(404)
    }
    const userFound = await client.findByPk(req.params.id)
    if(!userFound) return res.status(400).json('User not found')
    return res.status(200).json(userFound)
}
module.exports = {getUsers, registerUser, updateUser, deleteUser, getUser}