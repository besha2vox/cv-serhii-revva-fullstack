import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'shared/components/SharedLayout/';
import HomePage from 'pages/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
