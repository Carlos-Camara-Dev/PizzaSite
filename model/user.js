const { DataTypes, Model} = require('sequelize')

class client extends Model {
    static init(sequelize) {
        super.init({
            username: DataTypes.STRING(1234),
            email: DataTypes.STRING(1234),
            password: DataTypes.STRING(1234),
            adress: DataTypes.STRING(1234),
            role_level: DataTypes.INTEGER
        }, {
            sequelize, modelName: 'client'
        })
    }
}
module.exports = client