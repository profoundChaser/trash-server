const Sequelize = require("sequelize");

const sequelize = new Sequelize("trashdb", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  timezone: '+08:00',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("--------------Connected--------------");
  })
  .catch((err) => {
    console.log("--------------Connect failed--------------");
  });

module.exports =sequelize