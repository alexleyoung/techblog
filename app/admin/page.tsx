import { validateRequest, lucia } from "@/lib/auth";
import { redirect } from "next/navigation";

const Admin = async () => {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/");
  } else if (user.id !== "9rw43q2yy3rwmon1") {
    console.log("User is not an admin: " + user.id);
    return redirect("/");
  }

  return <div>admin</div>;
};

export default Admin;
