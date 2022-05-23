import { Mongo } from "../../../src/utils/Mongo.config"
import Projects from "../../../src/Models/Projects.schema"

const db = Mongo.getInstance()
db.connect()


export default async function getProjects(req, res) {
  const projects = await Projects.find()
  res.json(projects)
}