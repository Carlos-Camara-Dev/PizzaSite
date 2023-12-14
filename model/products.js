const { DataTypes, Model} = require('sequelize')

class products extends Model {
    static init(sequelize) {
        super.init({
            product_image:DataTypes.STRING(1234),
            product_owner:DataTypes.STRING(1234),
            product_name: DataTypes.STRING(1234),
            product_price: DataTypes.INTEGER,
            product_description: DataTypes.STRING(1234)
        }, {
            sequelize, modelName: 'products'
        })
    }
}
module.exports = products