const pg = require('pg')

// const db = new pg.Pool({
//   database: 'DATABASE_NAME_HERE'
// })

let db;
if (process.env.NODE_ENV === 'production') {
  db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
} else {
  db = new pg.Pool({
    database: 'pc_db'
  })
}

module.exports = db