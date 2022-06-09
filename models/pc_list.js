const db = require('../db/db')

const Pc = {
  findByUserId: (id) => {
    console.log(`user requesting pcs list for user: ${id}`)
    console.log(id)
    const sql = `
    SELECT * FROM pc_list WHERE user_id = $1`

    return db
      .query(sql, [id])
      .then(dbRes => dbRes.rows)
  },
  findAllPcs: () => {
    const sql = `
    SELECT * FROM pc_list`
    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  create: (id, name, cpu, gpu, ram, motherboard, ssd, psu, pcCase ) => {
    const sql = `
    INSERT INTO pc_list(user_id, name, cpu, graphics_card, ram, motherboard, ssd, psu, pc_case)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *
    `
    return db
      .query(sql, [id, name, cpu, gpu, ram, motherboard, ssd, psu, pcCase])
      .then(dbRes => dbRes.rows[0])
  },

  delete: (id) => {
    const sql = `
    DELETE FROM pc_list WHERE id = $1
    `
    return db.query(sql, [id])
  },

  edit: (id, name) => {
    const sql = `
    UPDATE pc_list SET name = $2 WHERE id = $1
    `
    return db
      .query(sql, [id, name])
      .then(dbRes => dbRes.rows[0]) //could potentially be issue
  }
}

module.exports = Pc
