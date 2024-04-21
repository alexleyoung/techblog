import { validateRequest } from "@/lib/auth";
import LoginForm from "./LoginForm";
import { redirect } from "next/navigation";

const Login = async () => {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }

  return (
    <main className='h-screen grid place-items-center'>
      <LoginForm />
    </main>
  );
};
export default Login;
