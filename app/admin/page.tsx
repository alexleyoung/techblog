import EventList from "@/components/admin/EventList";
import PostList from "@/components/admin/PostList";

const Admin = async () => {
  return (
    <main className='p-8 flex flex-col gap-8'>
      <h1 className='text-2xl tracking-wide mb-8'>Overview</h1>
      <div className='flex flex-col gap-2'>
        <h2>Posts</h2>
        <PostList />
      </div>
      <div className='flex flex-col gap-2'>
        <h2>Events</h2>
        <EventList />
      </div>
    </main>
  );
};

export default Admin;
