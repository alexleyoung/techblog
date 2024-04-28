"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import EventCard from "@/components/landing/Featured/EventCard";

const Events = ({ className }: { className?: string }) => {
  const [events, setEvents] = useState([1, 2, 3]);
  return (
    <>
      <div
        className={cn(
          "grid grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 lg:grid-cols-1 lg:grid-rows-3 border border-foreground/30 gap-4 rounded-2xl p-4",
          className
        )}>
        {events.map((Event, i) => {
          return <EventCard key={i} />;
        })}
      </div>
    </>
  );
};

export default Events;
