const Sequelize = require('sequelize')
const sequelize = require('../../index')
const User = require('../user')
const Keywords = sequelize.define(
  'keywords',
  {
    keyword_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
  },
  { tableName: 'keywords' }
)

User.hasMany(Keywords, { foreignKey: 'userId', sourceKey: 'id' })
Keywords.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' })

// Keywords.sync({ force: true }).then(() => {})

module.exports = Keywords
