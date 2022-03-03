const db = require('./models')

db.sequelize.authenticate()
  .then(() => {
    console.log('Connection established');
    db.sequelize.sync({ force: true }).then(() => { console.log('Drop and re-sync db.') })

  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });