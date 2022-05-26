import Cors from "cors"
import initMiddleware from "libs/init.middleware"
import { Mongo } from "../../../src/utils/Mongo.config"
import Admin from "../../../src/Models/Admins.schema"
import jwt from "jsonwebtoken"

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: "*",
  })
)

const db = Mongo.getInstance()
db.connect()

export default async function getMethod(req, res) {

  await cors(req, res)

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
