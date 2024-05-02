"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import EventCard from "@/components/landing/Featured/EventCard";
import { Event, getEvents } from "@/lib/api/events";

const Events = ({ className }: { className?: string }) => {
  const [events, setEvents] = useState<Event[]>([]);

  const getRecents = async () => {
    const results = await getEvents();
    setEvents(results.slice(0, 3));
  };

  useEffect(() => {
    getRecents();
  }, []);

  return (
    <div
      className={cn(
        "size-full grid place-items-center grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 lg:grid-cols-1 lg:grid-rows-3 border border-foreground/30 gap-4 rounded-2xl p-4",
        className
      )}>
      {events.map((event) => {
        return <EventCard key={String(event._id)} event={event} />;
      })}
    </div>
  );
};

export default Events;
