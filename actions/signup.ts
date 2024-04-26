"use server";

import { lucia, validateRequest } from "@/lib/auth";
import { UserCollection } from "@/lib/db";
import { generateId } from "lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Argon2id } from "oslo/password";

const signup = async (formData: signupData): Promise<ActionResult> => {
  const { user } = await validateRequest();

  if (user) {
    return redirect("/");
  }

  const username = formData.username;
  const password = formData.password;

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

interface signupData {
  username: string;
  password: string;
  passwordConfirmation: string;
}

export default signup;
