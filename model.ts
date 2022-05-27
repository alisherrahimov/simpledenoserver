import { ObjectId } from "https://deno.land/x/mongo@v0.30.0/mod.ts";
import { client } from "./db.ts";
interface user {
  _id: ObjectId;
  name: string;
  date: Date;
  group: string;
}
const db = client.database("test");
export const users = db.collection<user>("user");
