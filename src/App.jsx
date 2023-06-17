import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/';
import HomePage from 'pages/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/education" element={<HomePage />} />
        <Route path="/work-experience" element={<HomePage />} />
        <Route path="/portfolio" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
