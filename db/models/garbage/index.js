const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const sequelize = require('../../index')
const GarbageCategory = require('../garbage_category')
const Garbage = sequelize.define(
  'garbage',
  {
    garbage_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    categoryId: {
      type: INTEGER,
      allowNull:false
    },
  },
  { timestamps: false }
)

GarbageCategory.hasMany(Garbage, { foreignKey: 'categoryId', sourceKey: 'id' })
Garbage.belongsTo(GarbageCategory, { foreignKey: 'categoryId', targetKey: 'id' })

Garbage.sync().then(() => {})

module.exports = Garbage
