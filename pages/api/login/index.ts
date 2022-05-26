import { Mongo } from "../../../src/utils/Mongo.config"
import Admin from "../../../src/Models/Admins.schema"
import jwt from "jsonwebtoken"
import NextCors from 'nextjs-cors';


const db = Mongo.getInstance()
db.connect()

export default async function getMethod(req, res) {

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

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
