import Aside from "@/components/admin/Aside";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  // const { user } = await validateRequest();
  // if (!user) {
  //   return redirect("/");
  // } else if (user.id !== process.env.ADMIN) {
  //   return redirect("/");
  // }

  return (
    <>
      <Aside />
      <div className='md:pl-48'>{children}</div>
    </>
  );
};

export default layout;
