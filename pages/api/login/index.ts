import { Mongo } from "../../../src/utils/Mongo.config"

// const db = Mongo.getInstance()
// db.connect()

export default async function getMethod(req, res) {
  const { username, password } = req.body
  res.json({
    username,
    password
  })
}
