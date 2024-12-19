import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Home from './Pages/Home';
import AuthPage from './Pages/AuthPage';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
      return (
          <div className="flex items-center justify-center h-screen">
              <p className="text-lg font-bold">Loading...</p>
          </div>
      );
  }

  return (
      <Routes>
        <Route
            path='/home'
            element={user ? <Home /> : <Navigate to="/" replace />}
        />
        <Route 
            path='/'
            element={!user ? <AuthPage /> : <Navigate to="/home" replace />}
        />
      </Routes>
  );
}

export default App;
