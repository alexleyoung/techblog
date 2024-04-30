import PostList from "@/components/admin/PostList";

const Admin = async () => {
  return (
    <main className='p-8'>
      <h1 className='text-2xl tracking-wide mb-8'>Overview</h1>
      <PostList />
    </main>
  );
};

export default Admin;
