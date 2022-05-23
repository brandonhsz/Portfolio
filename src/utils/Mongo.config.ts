import { connect, connection } from "mongoose"
export class Mongo {
  private static instance: Mongo

  private constructor() {
    this.connections()
  }

  public static getInstance(): Mongo {
    if (!this.instance) {
      this.instance = new Mongo()
    }

    return this.instance
  }

  public async connect() {
    await connect(process.env.MONGO_URL)
  }

  private connections() {
    connection.on('connecting', () => console.log('connecting to MongoDB...'))
    connection.on('error', (error) => console.error('Error in MongoDb connection: '))
    connection.on('connected', () => console.log('connected to MongoDB'))
  }

}