"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Event, getEvents } from "@/lib/api/events";
import AdminEvent from "@/components/admin/AdminEvent";

const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const refresh = await getEvents();
    setEvents(refresh);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='grid lg:grid-cols-2 place-items-center gap-8'>
      {loading ? (
        <>
          <Skeleton className='w-full h-32' />
          <Skeleton className='w-full h-32' />
          <Skeleton className='w-full h-32' />
          <Skeleton className='w-full h-32' />
        </>
      ) : (
        events.map((event) => {
          return (
            <AdminEvent
              key={String(event._id)}
              event={event}
              refresh={getData}
            />
          );
        })
      )}
    </div>
  );
};

export default EventList;
