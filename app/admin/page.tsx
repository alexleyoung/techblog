import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/auth";
import PostList from "@/components/admin/PostList";

const Admin = async () => {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/");
  } else if (user.id !== process.env.ADMIN) {
    return redirect("/");
  }

  return (
    <main className='p-8'>
      <h1 className='text-2xl tracking-wide mb-8'>Overview</h1>
      <PostList />
    </main>
  );
};

export default Admin;
