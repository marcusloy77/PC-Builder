const Pc = {
  findByUserId: (id) => {
    console.log(`user requesting pcs list for user: ${id}`)
    console.log(id)
    const sql = `
    SELECT * FROM pc_list WHERE id = $1`

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

  create: (user_id, name) => {
    const sql = `
    INSERT INTO pc_list(user_id, name)
    VALUES($1, $2)
    RETURNING *
    `
    return db
      .query(sql, [user_id, name])
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
