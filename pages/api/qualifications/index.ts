import { Mongo } from "../../../src/utils/Mongo.config"
import Qualifications from "../../../src/Models/Qualifications.schema"
const db = Mongo.getInstance()
db.connect()

export default async function getQualifications(req, res) {
  const qualifications = await Qualifications.find()
  res.json(qualifications)
}