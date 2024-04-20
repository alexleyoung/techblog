"use server";

import { lucia } from "@/lib/auth";
import { UserCollection } from "@/lib/db";
import { generateId } from "lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Argon2id } from "oslo/password";

const signup = async (formData: FormData): Promise<ActionResult> => {
  const username = formData.get("username");
  if (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-z0-9_-]+$/.test(username)
  ) {
    return {
      error: "Invalid username",
    };
  }

  const password = formData.get("password");
  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    return {
      error: "Invalid password",
    };
  }

  const hashedPassword = await new Argon2id().hash(password);
  const userId = generateId(16);

  // check if username in use
  const existingUser = await UserCollection.findOne({ username });
  if (existingUser) {
    return {
      error: "Username already in use",
    };
  }

  await UserCollection.insertOne({
    _id: userId,
    username: username,
    hashed_password: hashedPassword,
  });

  const session = await lucia.createSession(userId, {});
  const sessionCookie = await lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/");
};

interface ActionResult {
  error: string;
}

export default signup;
