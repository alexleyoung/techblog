"use server";

import { lucia, validateRequest } from "@/lib/auth";
import { UserCollection } from "@/lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Argon2id } from "oslo/password";

const login = async (formData: loginData): Promise<ActionResult> => {
  const username = formData.username;
  const password = formData.password;

  const existingUser = await UserCollection.findOne({ username });
  if (!existingUser) {
    return {
      error: "Incorrect username or password",
    };
  }

  const validPassword = await new Argon2id().verify(
    existingUser.hashed_password,
    password
  );
  if (!validPassword) {
    return {
      error: "Incorrect username or password",
    };
  }

  const session = await lucia.createSession(existingUser._id, {});
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

interface loginData {
  username: string;
  password: string;
}

export default login;
