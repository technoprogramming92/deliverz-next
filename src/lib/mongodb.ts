import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env");
}

// ✅ Define a global type for caching Mongoose connections
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// ✅ Declare global cache variable for development mode
declare global {
  var mongooseCache: MongooseCache;
}

global.mongooseCache = global.mongooseCache || { conn: null, promise: null };

export const connectDB = async () => {
  if (global.mongooseCache.conn) {
    console.log("✅ Using existing MongoDB connection");
    return global.mongooseCache.conn;
  }

  if (!global.mongooseCache.promise) {
    global.mongooseCache.promise = mongoose
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

  global.mongooseCache.conn = await global.mongooseCache.promise;
  return global.mongooseCache.conn;
};
