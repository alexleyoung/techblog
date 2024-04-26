import Aside from "@/components/admin/Aside";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Aside />
      <div className='pl-48'>{children}</div>
    </>
  );
};

export default layout;
