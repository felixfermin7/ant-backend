'use strict'

const { Pool } = require('pg')

const db = new Pool({
  user: 'express',
  host: 'localhost',
  database: 'ants',
  password: '123',
  port: 5432,
})
db.connect()

class Ants {
  
}


Ants.get = async (_id) => {
  try {
    const ants = await db.query(`SELECT * FROM ants WHERE id = ${_id}`)
    return ants.rowCount > 0 ? ants.rows[0] : []
  } catch(e) {
    return e
  }
}

Ants.list = async () => {
  try {
    const ants = await db.query(`SELECT * FROM ants`)
    return ants.rowCount > 0 ? ants.rows : []
  } catch(e) {
    return e
  }
}

Ants.create = async (ant) => {
  try {
  
    const ants = await db.query(`INSERT INTO ants (name, description, weight) VALUES ('${ant.name}', '${ant.description}', ${ant.weight})`)
    const newAnt = await db.query(`SELECT MAX(id) as id FROM ants`)
    return newAnt.rowCount > 0 ? newAnt.rows[0] : []
  } catch(e) {
    return e
  }
}

Ants.update = async (_id, ant) => {
  try {
    const ants = await db.query(`UPDATE ants SET name='${ant.name}', description='${ant.description}', weight=${ant.weight} WHERE id= ${_id}`)
    return { success: true}
  } catch(e) {
  return e
  }
  
}

Ants.delete = async (_id) => {
  try {
    await db.query(`DELETE FROM ants WHERE id = ${_id}`)
    return { success: true}
  } catch(e) {
    return e
  }
}



module.exports = Ants
