// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
// ... other imports if necessary

function App() {
  return (
    <Router>
      <div className="header-container">
        <Header />
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          {/* other routes */}
        </Routes>
      </main>
      {/* Footer if you have one */}
    </Router>
  );
}

export default App;
