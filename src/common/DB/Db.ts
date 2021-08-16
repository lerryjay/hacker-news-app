import * as SQLite from 'expo-sqlite'
import { DBResponse } from '../Models/Auth'
const database_name = 'QuickCheckDemo.db'

export function initDB(): Promise<any> {
  return new Promise((resolve, reject) => {
    const db = SQLite.openDatabase(database_name)
    db.transaction(
      (tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS Auth (authId, username, email, telephone, password)',
          [],
          (tx, res) => {
            resolve(db)
            tx.executeSql(
              'CREATE TABLE IF NOT EXISTS feeds (type, stories)',
              [],
              (tx, res) => {
                tx.executeSql(
                  'INSERT INTO feeds (stories, type) VALUES(?,?)',
                  [JSON.stringify([]), 'main'],
                  (tx, res) => resolve(db),
                  (tx, error) => {
                    console.log(error)
                    return false
                  },
                )
              },
              (tx, error) => {
                console.log(error)
                return false
              },
            )
          },
          (tx, error) => {
            console.log(error)
            reject(error)
            return false
          },
        )
      },
      (error) => console.log(error),
    )
  })
}

export function doQuery(query: string, params: Array<any>): Promise<any> {
  return new Promise((resolve, reject) => {
    initDB().then((db: any) => {
      db.transaction((tx) => {
        tx.executeSql(
          query,
          [...params],
          (tx, results) => {
            resolve(results)
          },
          (tx, err) => {
            reject(err)
          },
        )
      })
    })
  })
}

export function registerAuth(
  username,
  email,
  telephone,
  password,
): Promise<DBResponse> {
  const authId = +new Date()
  return doQuery(
    'INSERT INTO Auth (authId, username, email, telephone, password) VALUES (?,?, ?, ?, ?)',
    [authId, username, email, telephone, password],
  )
    .then((results) => {
      if (results.rowsAffected === 1) {
        return { status: true, data: { authId }, message: 'Insert success' }
      } else return { status: false, data: {} }
    })
    .catch((err) => ({
      status: false,
      message: 'Insert failed',
      data: { error: err },
    }))
}

export function getUserByLoginId(username): Promise<DBResponse> {
  return doQuery('SELECT * FROM Auth WHERE username = ?', [username])
    .then((results) => {
      if (results.rows.length > 0) {
        let row = results.rows.item(0)
        return { status: true, data: row }
      } else return { status: false, data: {} }
    })
    .catch((err) => ({
      status: false,
      message: 'Insert failed',
      data: { error: err },
    }))
}

export function getUserByTelephoneEmail(telephone, email): Promise<DBResponse> {
  return doQuery('SELECT * FROM Auth WHERE email = ? AND telephone = ?', [
    email,
    telephone,
  ])
    .then((results) => {
      if (results.rows.length > 0) {
        let row = results.rows.item(0)
        return { status: true, data: row }
      } else return { status: false, data: {} }
    })
    .catch((err) => ({
      status: false,
      message: 'Error occured',
      data: { error: err },
    }))
}

export function updateUserPassword(username, password): Promise<DBResponse> {
  return doQuery('UPDATE Auth SET password = ? WHERE username = ? ', [
    password,
    username,
  ]).then((results) => {
    if (results.rowsAffected > 0) {
      return { status: true, data: {}, message: 'Update Success' }
    } else return { status: false, data: {}, message: 'Update Failed' }
  })
}

export function getLatestFeeds() {
  return doQuery('SELECT * FROM feeds WHERE type = ?', ['main']).then(
    (results) => {
      if (results.rows.length > 0) {
        let row = results.rows.item(0)
        return { status: true, data: JSON.parse(row.stories) }
      } else {
        doQuery('INSERT INTO feeds (stories, type) VALUES(?,?)', [
          JSON.stringify([]),
          'main',
        ])
        return { status: true, data: [] }
      }
    },
  )
}

export function insertFeeds(stories) {
  return doQuery('UPDATE feeds SET stories = ? WHERE type = ?', [
    JSON.stringify(stories),
    'main',
  ]).then((results) => {
    if (results.rowsAffected > 0) {
      return { status: true, data: {}, message: 'Insert success' }
    } else return { status: false, data: {} }
  })
}
