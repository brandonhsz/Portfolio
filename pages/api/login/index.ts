import { Mongo } from "../../../src/utils/Mongo.config"
import Admin from "../../../src/Models/Admins.schema"
import jwt from "jsonwebtoken"



const db = Mongo.getInstance()
db.connect()

export default async function getMethod(req, res) {

  const { name, password } = JSON.parse(req.body)

  const isAdmin = await Admin.findOne({ name: name })

  if (!isAdmin) return res.status(401).json({ message: "Invalid username" })

  if (isAdmin.password !== password) return res.status(401).json({ message: "Invalid password" })

  const token = jwt.sign({ id: isAdmin._id }, process.env.JWT_SECRET, { expiresIn: "1h" })

  res.json({
    message: "Login success",
    token
  })
}
