import { Event, deleteEvent } from "@/lib/api/events";
import { getMonth } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { NotebookPen, Trash } from "lucide-react";
import EventForm from "./CreateEvent/EventForm";

const AdminEvent = ({
  event,
  refresh,
}: {
  event: Event;
  refresh: () => Promise<void>;
}) => {
  const date = new Date(event.date);

  return (
    <div className='w-full h-32 border border-foreground/10 rounded-lg p-4 flex gap-4 hover:scale-[102%] hover:bg-muted/30 transition-all duration-300'>
      <div className='h-full aspect-square border rounded-xl flex flex-col items-center justify-center text-3xl'>
        <span>{date.getDate()}</span>
        <span>{getMonth(date)}</span>
      </div>
      <div className='flex flex-col justify-around w-full px-4'>
        <h1 className='text-xl flex justify-between'>
          {event.title}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='outline'>
                <NotebookPen size={16} strokeWidth={1} />
              </Button>
            </DialogTrigger>
            <DialogContent className=''>
              <DialogHeader>
                <DialogTitle>Edit event</DialogTitle>
                <DialogDescription>
                  Make changes to the event here. Click save when you're done.
                </DialogDescription>
                <EventForm event={event} refresh={refresh}>
                  <DialogClose
                    type='submit'
                    className='w-20 rounded-xl px-3 py-1 bg-foreground/10 hover:bg-foreground/20 transition-colors duration-300'>
                    Save
                  </DialogClose>
                </EventForm>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </h1>
        <div>
          <h1 className='text-xl flex justify-between'>
            {event.location}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant='destructive'>
                  <Trash size={16} strokeWidth={1} />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the event and remove it from the database.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className='bg-red-600 hover:bg-red-700 text-white'
                    onClick={async () => {
                      await deleteEvent(event);
                      refresh();
                    }}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdminEvent;
