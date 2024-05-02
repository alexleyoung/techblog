import { Event } from "@/lib/api/events";

const EventCard = ({ event }: { event: Event }) => {
  const date = new Date(event.date);

  return (
    <div className='w-full grid aspect-square place-items-center border shadow-lg hover:scale-105 transition-all duration-300 rounded-sm text-lg sm:text-sm md:text-base'>
      <span>
        <h1 className='font-semibold'>
          {date
            .toLocaleDateString("en-us", {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            })
            .toUpperCase()}
        </h1>
        <h1>{event.location}</h1>
        <h1>{event.title}</h1>
      </span>
    </div>
  );
};

export default EventCard;
