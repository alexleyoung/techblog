"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import EventCard from "@/components/landing/Featured/EventCard";

const Events = ({ className }: { className?: string }) => {
  const [events, setEvents] = useState([1, 2, 3]);
  return (
    <div
      className={cn(
        "grid grid-rows-3 border border-foreground/30 gap-4 rounded-2xl p-4",
        className
      )}>
      {events.map((Event) => {
        return <EventCard />;
      })}
    </div>
  );
};

export default Events;
