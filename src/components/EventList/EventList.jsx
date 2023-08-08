import { List } from './EventList.styled';
import EventCard from 'components/EventCard/EventCard';

const EventList = items => {
  return (
    <List>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </List>
  );
};

export default EventList;
