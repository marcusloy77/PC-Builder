const db = require("../db/db")

const Cases = {
  findAll: () => {
    const sql = 'SELECT * FROM cases ORDER BY name'

    return db 
    .query(sql)
    .then(dbRes => dbRes.rows)
  }
}

const CPUs = {
  findAll: () => {
    const sql = 'SELECT * FROM cpus ORDER BY name'

    return db 
    .query(sql)
    .then(dbRes => dbRes.rows)
  }
}

const Graphics_cards = {
  findAll: () => {
    const sql = 'SELECT * FROM graphics_cards ORDER BY name'

    return db 
    .query(sql)
    .then(dbRes => dbRes.rows)
  }
}
const Motherboards = {
  findAll: () => {
    const sql = 'SELECT * FROM motherboards ORDER BY name'

    return db 
    .query(sql)
    .then(dbRes => dbRes.rows)
  }
}

const PSUs = {
  findAll: () => {
    const sql = 'SELECT * FROM psus ORDER BY name'

    return db 
    .query(sql)
    .then(dbRes => dbRes.rows)
  }
}

const Ram = {
  findAll: () => {
    const sql = 'SELECT * FROM ram ORDER BY name'

    return db 
    .query(sql)
    .then(dbRes => dbRes.rows)
  }
}
const SSDs = {
  findAll: () => {
    const sql = 'SELECT * FROM ssds ORDER BY name'

    return db 
    .query(sql)
    .then(dbRes => dbRes.rows)
  }
}


module.exports = {Cases, CPUs, Graphics_cards, Motherboards, PSUs, Ram, SSDs}
