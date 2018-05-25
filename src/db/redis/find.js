const connection = require('./connection')

const find = async function find (key) {
  var exists = await connection.exists(key)
  if (typeof exists === 'number' && exists === 0 ) {
    throw new Error('User not registered!')
  }
  return await connection.hgetall(key)
}

module.exports = find