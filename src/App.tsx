import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/Layout";
import { RehabForm } from "./components/RehabForm";
import { Home } from './pages/Home';
import { Calendar } from './pages/Calendar';
import { Jobs } from './pages/Jobs';
import { Support } from './pages/Support';
import { Profile } from './pages/Profile';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Routes>
          <Route path="/" element={<RehabForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;