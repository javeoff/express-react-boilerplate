import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './pages/index/IndexPage';
import { AdminPage } from './pages/admin/AdminPage';

export const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="admin" element={<AdminPage />} />
    </Routes>
  </div>
)
