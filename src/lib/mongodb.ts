import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

// ✅ Define a global type for caching Mongoose connections
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// ✅ Explicitly define global object with mongooseCache
const globalWithMongoose = global as typeof globalThis & {
  mongooseCache: MongooseCache;
};

// ✅ Initialize global cache if not already defined
if (!globalWithMongoose.mongooseCache) {
  globalWithMongoose.mongooseCache = { conn: null, promise: null };
}

export const connectDB = async () => {
  if (globalWithMongoose.mongooseCache.conn) {
    console.log("✅ Using existing MongoDB connection");
    return globalWithMongoose.mongooseCache.conn;
  }

  if (!globalWithMongoose.mongooseCache.promise) {
    globalWithMongoose.mongooseCache.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "test",
      })
      .then((mongooseInstance) => {
        console.log("✅ Connected to MongoDB");
        return mongooseInstance;
      })
      .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err);
        throw err;
      });
  }

  globalWithMongoose.mongooseCache.conn = await globalWithMongoose.mongooseCache
    .promise;
  return globalWithMongoose.mongooseCache.conn;
};
