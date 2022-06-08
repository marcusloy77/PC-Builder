const db = require("../db/db")

const Cases = {
  findAll: () => {
    const sql = 'SELECT * FROM cases'

    return db 
    .query(sql)
    .then(dbRes => dbRes.rows)
  }
}

const CPUs = {
  findAll: () => {
    const sql = 'SELECT * FROM cpus'

    return db 
    .query(sql)
    .then(dbRes => dbRes.rows)
  }
}

const Graphics_cards = {
  findAll: () => {
    const sql = 'SELECT * FROM graphics_cards'

    return db 
    .query(sql)
    .then(dbRes => dbRes.rows)
  }
}
const Motherboards = {
  findAll: () => {
    const sql = 'SELECT * FROM cpus'

    return db 
    .query(sql)
    .then(dbRes => dbRes.rows)
  }
}

const PSUs = {
  findAll: () => {
    const sql = 'SELECT * FROM psus'

    return db 
    .query(sql)
    .then(dbRes => dbRes.rows)
  }
}

const Ram = {
  findAll: () => {
    const sql = 'SELECT * FROM ram'

    return db 
    .query(sql)
    .then(dbRes => dbRes.rows)
  }
}
const SSDs = {
  findAll: () => {
    const sql = 'SELECT * FROM ssds'

    return db 
    .query(sql)
    .then(dbRes => dbRes.rows)
  }
}


module.exports = {Cases, CPUs, Graphics_cards, Motherboards, PSUs, Ram, SSDs}
