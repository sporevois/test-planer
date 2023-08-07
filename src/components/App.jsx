import { Route, Routes } from 'react-router-dom';
import AddEventPage from 'pages/AddEventPage/AddEventPage';
import HomePage from 'pages/HomePage/HomePage';
import EventPage from 'pages/EventPage/EventPage';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/add-event" element={<AddEvent />} /> */}
        {/* <Route path="/" element={<AddEventPage />} /> */}
        {/* <Route path="/event" element={<EventPage />} /> */}
        <Route path="/" element={<EventPage />} />
        <Route path="*" element={<h4>Sorry, page not found</h4>} />
      </Route>
    </Routes>
  );
};
