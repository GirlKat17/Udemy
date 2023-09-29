import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://ramoroakatlego:JaF171Kytvk4mAz3@cluster0.154yfiz.mongodb.net/?retryWrites=true&w=majority'
  );

  return client;
}
