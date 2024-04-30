import EventForm from "@/components/admin/CreateEvent/CreateEvent";
import { Button } from "@/components/ui/button";

const Create = async () => {
  return (
    <main className='p-8'>
      <h1 className='text-2xl tracking-wide mb-8'>Event</h1>
      <EventForm />
    </main>
  );
};

export default Create;
