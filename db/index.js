const { Sequelize } = require('sequelize')

// module.exports = new Sequelize(process.env.JAWSDB_URL || process.env.LOCALDB_URL)

// module.exports = new Sequelize(process.env.NODE_ENV !== 'production' ? process.env.JAWSDB_URL : 'mysql://root:rootroot@localhost:3306/learnnearn_db')

const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/learnearn_db')

module.exports = sequelize

