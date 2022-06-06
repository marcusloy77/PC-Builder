const pg = require('pg')

const db = new pg.Pool({
  database: 'DATABASE_NAME_HERE'
})

module.exports = db