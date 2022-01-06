const { Sequelize } = require('sequelize')

<<<<<<< HEAD
module.exports = new Sequelize(process.env.NODE_ENV !== 'production' ? process.env.JAWSDB_URL : 'mysql://root:rootroot@localhost:3306/learnnearn_db')
=======
module.exports = new Sequelize(process.env.JAWSDB_URL || process.env.LOCALDB_URL)

>>>>>>> c627f0772e56b0b5fac28379b9761926e35b4fad

// const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/learnearn_db')

module.exports = sequelize

