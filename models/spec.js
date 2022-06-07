const db = require("../db/db")

const Spec = {
  findByPcId: (pc_id) => {
    const sql = 'SELECT * FROM specs WHERE pc_id = $1'
    return db
      .query(sql, [pc_id])
      .then(dbRes => dbRes.rows)
  },

  create: (pc_id, part_type, part_name, link) => {
    const sql = `
    INSERT INTO specs(pc_id, part_type, part_name, link)
    VALUES($1, $2, $3, $4)
    RETURNING *
    `
    return db
      .query(sql, [pc_id, part_type, part_name, link])
      .then(dbRes => dbRes.rows[0])
  },

  delete: (id) => {
    const sql = `
    DELETE FROM specs WHERE id = $1
    `
    return db.query(sql, [id])
  },

  edit: (id, part_name, part_type, link) => {
    const sql = `
    UPDATE specs SET part_name = $2, part_type = $3, link = $4 WHERE id = $1
    `
    return db
      .query(sql, [id, part_name, part_type, link])
      .then(dbRes => dbRes.rows[0]) //could potentially be issue
  }
}



module.exports = Spec
