import { MongoClient } from "https://deno.land/x/mongo@v0.30.0/mod.ts";
const client = new MongoClient();
const connectDB = async () => {
  try {
    await client.connect(
      "mongodb+srv://alisher2211:alisher2211@cluster0.jrfzjmm.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("MongoDB Connected...");
  } catch (err) {
    throw err;
  }
};
connectDB();

export { connectDB, client };
