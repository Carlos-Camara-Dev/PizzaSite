const client = require('../model/user');

const logoutHandler = async (req, res)=>{
    if(!req.cookies?.jwt) return res.sendStatus(400)
    const cookie = req.cookies.jwt
    const foundUser = await client.findOne({where: {refreshToken: cookie}})
    if(!foundUser) {
        res.clearCookie('jwt', {httpOnly:true})
        return res.sendStatus(204)
    }
    await client.update({refreshToken: ''}, {where:{refreshToken: cookie}})
    res.clearCookie('jwt', {httpOnly:true})
    return res.status(204).json(result);
}

module.exports = logoutHandler;