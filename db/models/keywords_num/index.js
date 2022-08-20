const Sequelize = require('sequelize')
const sequelize = require('../../index')
const KeywordsNum = sequelize.define(
  'keywords_num',
  {
    keyword_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    num: {
      type: Sequelize.INTEGER,
    },
  },
  { tableName: 'keywords_num', timestamps:false }
)

// KeywordsNum.sync().then(() => {})

module.exports =KeywordsNum
