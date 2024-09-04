import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import Submitted from "./components/Submitted";
import Loading from "./components/Loading";
import "./App.css";

function AppContent() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => setLoading(true);

    handleRouteChange();

    // Simulate loading time for demonstration
    const timer = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div>
        {loading && <Loading />}
        <Routes>
          <Route path="/" element={<Form apiUrl={apiUrl} />} />
          <Route path="/submitted" element={<Submitted apiUrl={apiUrl} />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
