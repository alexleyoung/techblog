import { Collection, MongoClient } from "mongodb";
import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { StringToBoolean } from "class-variance-authority/types";

// initialize db connection
const client = new MongoClient(process.env.DB_URI!);
async () => {
  await client.connect();
};

// export user and session collctions
const db = client.db();
export const UserCollection = db.collection("users") as Collection<UserDoc>;
export const SessionCollection = db.collection(
  "sessions"
) as Collection<SessionDoc>;

// types
interface UserDoc {
  _id: string;
  username: string;
  hashed_password: string;
}

interface SessionDoc {
  _id: string;
  expires_at: Date;
  user_id: string;
}
