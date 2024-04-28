import { validateRequest } from "@/lib/auth";
import SignupForm from "./SignupForm";
import { redirect } from "next/navigation";

const Signup = async () => {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }

  return (
    <main className='h-screen grid place-items-center p-16'>
      <SignupForm />
    </main>
  );
};
export default Signup;
