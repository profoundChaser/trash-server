const Sequelize = require('sequelize')
const sequelize = require('../../index')
const User = sequelize.define('user', {
  account_num: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sex: {
    type: Sequelize.ENUM(['男', '女']),
  },
  avatar:{
    type:Sequelize.STRING,
  },
  area: {
    type: Sequelize.STRING,
  },
})

// User.sync().then(() => {
// })

module.exports = User