import { NextRequest, NextResponse } from "next/server"
import { Mongo } from "../../../src/utils/Mongo.config"

const db = Mongo.getInstance()
db.connect()

export default async function getMethod(req, res) {

}
