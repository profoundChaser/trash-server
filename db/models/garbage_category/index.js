const Sequelize = require('sequelize')
const sequelize = require('../../index')
const GarbageCategory = sequelize.define(
  'garbage_category',
  {
    category_name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    nameInEn: {
      type: Sequelize.STRING,
      unique: true,
    },
  },
  { timestamps: false,
    tableName: 'garbage_categories' }
)

// GarbageCategory.sync().then(() => {
// })

module.exports = GarbageCategory
