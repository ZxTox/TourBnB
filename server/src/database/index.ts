import { MongoClient } from 'mongodb'
import { Database, User, Listing, Booking } from '../lib/types'

const { DB_USER, DB_USER_PASSWORD, DB_CLUSTER } = process.env

const uri = `mongodb+srv://${DB_USER}:${DB_USER_PASSWORD}@${DB_CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = client.db('main')

  return {
    bookings: db.collection<Booking>('bookings'),
    listings: db.collection<Listing>('listings'),
    users: db.collection<User>('users')
  }
}
