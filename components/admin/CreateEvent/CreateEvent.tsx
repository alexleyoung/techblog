import EventForm from "@/components/admin/CreateEvent/EventForm";
import { Button } from "@/components/ui/button";

const CreateEvent = () => {
  return (
    <EventForm>
      <Button type='submit'>Create Event</Button>
    </EventForm>
  );
};

export default CreateEvent;
