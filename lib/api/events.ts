import { ObjectId } from "mongodb";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// get all events
export const getEvents = async () => {
  const result = await fetch(`${baseUrl}/events/`);
  const events = await result.json();
  return events as Event[];
};

// get a single event by title slug
export const getEvent = async (title_slug: string) => {
  try {
    const result = await fetch(`${baseUrl}/events/${title_slug}`);
    if (!result.ok) {
      return { data: null, error: { message: String(result.status) } as Error };
    }
    const data = await result.json();
    return { data: data as Event, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
};

// create a new event
export const createEvent = async (event: {
  title: String;
  date: Date;
  description: String;
  location: String;
}) => {
  try {
    const response = await fetch(`${baseUrl}/events/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
    if (!response.ok) {
      return { error: { message: String(response.status) } as Error };
    }
  } catch (error) {
    return error;
  }
};

// update an event
export const updateEvent = async (event: Event) => {
  try {
    const response = await fetch(`${baseUrl}/posts/${event.title_slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
    if (!response.ok) {
      return { error: { message: String(response.status) } as Error };
    }
  } catch (error) {
    return error;
  }
};

// delete an event
export const deleteEvent = async (event: Event) => {
  try {
    const response = await fetch(`${baseUrl}/posts/${event.title_slug}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      return { error: { message: String(response.status) } as Error };
    }
  } catch (error) {
    return error;
  }
};

export type Event = {
  _id: ObjectId;
  title: string;
  description: string;
  date: Date;
  location: string;
  title_slug: string;
  lastUpdated?: Date;
};
