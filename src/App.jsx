import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/';
import HomePage from 'pages/HomePage';
import EducationPage from 'pages/EducationPage';
import WorkExperiencePage from 'pages/WorkExperiencePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/work-experience" element={<WorkExperiencePage />} />
        <Route path="/portfolio" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
