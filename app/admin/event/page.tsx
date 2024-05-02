import CreateEvent from "@/components/admin/CreateEvent/CreateEvent";

const Create = async () => {
  return (
    <main className='p-8'>
      <h1 className='text-2xl tracking-wide mb-8'>Event</h1>
      <CreateEvent />
    </main>
  );
};

export default Create;
