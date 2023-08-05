import { Route, Routes } from 'react-router-dom';
import AddEvent from 'pages/AddEventPage/AddEventPage';
import Home from 'pages/HomePage/HomePage';
import Event from 'pages/EventPage/EventPage';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/event" element={<Event />} />
        <Route path="*" element={<h4>Sorry, page not found</h4>} />
      </Route>
    </Routes>
  );
};
