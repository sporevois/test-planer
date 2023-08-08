import { List } from './EventList.styled';
import EventCard from 'components/EventCard/EventCard';
import { getEvents } from 'sevices/api';
import { useState, useEffect } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const getEventsData = async () => {
      try {
        const eventsData = await getEvents();
        setEvents([...eventsData]);
      } catch (error) {
        return error.message;
      } finally {
        return;
      }
    };
    getEventsData();
  }, []);
  return (
    <List>
      {events.map(event => (
        <EventCard key={event.id} data={event} />
      ))}
    </List>
  );
};

export default EventList;
