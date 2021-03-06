const db = require('../db/db')

const Pc = {
  findByUserId: (id) => {
    console.log(`user requesting pcs list for user: ${id}`)
    const sql = `
    SELECT * FROM pc_list WHERE user_id = $1 ORDER BY id DESC`

    return db
      .query(sql, [id])
      .then(dbRes => dbRes.rows)
  },
  findAllPcs: () => {
    const sql = `
    SELECT * FROM pc_list ORDER BY id DESC`
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

  delete: (pcId) => {
    const sql = `
    DELETE FROM pc_list WHERE id = $1
    `
    return db.query(sql, [pcId])
  },

  edit: (id, name, cpu, graphics_card, ram, motherboard, ssd, psu, pc_case) => {
    const sql = `
    UPDATE pc_list SET name = $2, cpu = $3, graphics_card = $4, ram = $5, motherboard = $6, ssd = $7, psu = $8, pc_case = $9 WHERE id = $1
    RETURNING *
    `
    return db
      .query(sql, [id, name, cpu, graphics_card, ram, motherboard, ssd, psu, pc_case])
      .then(dbRes => dbRes.rows[0]) //could potentially be issue
  }
}

module.exports = Pc
