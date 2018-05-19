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
    const ants = await db.query(`SELECT * FROM ants where id = ${_id}`)
    return ants.rowCount > 0 ? ants.rows[0] : []
  } catch(e){
    return e
  }
 
  
}

Ants.list = async (_id, user) => {
  console.log('list')
  return { }
  
}

Ants.create = async (_id, user) => {
  console.log('create')
  return { }
  
}

Ants.update = async (_id, user) => {
  console.log('update')
  return { }
  
}

Ants.delete = async (_id, user) => {
  console.log('delete')
  return { }
  
}



module.exports = Ants
