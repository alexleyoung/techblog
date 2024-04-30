import { Collection, MongoClient } from "mongodb";

// initialize db connection
const client = new MongoClient(process.env.DB_URI!);
const connect = async () => {
  await client.connect();
  console.log("Connected to database");
};

// export user and session collctions
const db = client.db(process.env.DB_NAME!);
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

connect();
