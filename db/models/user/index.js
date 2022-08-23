const Sequelize = require('sequelize')
const sequelize = require('../../index')
const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  openId:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
  },
  avatar:{
    type:Sequelize.STRING,
  },
})

// User.sync({alter:true}).then(() => {
// })

module.exports = User