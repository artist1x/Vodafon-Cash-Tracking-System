import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import AuthGuard from './components/Layout/AuthGuard';
import DashboardLayout from './components/Layout/DashboardLayout';
import Users from './pages/Users';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/transactions"
            element={
              <AuthGuard>
                <DashboardLayout>
                  <Transactions />
                </DashboardLayout>
              </AuthGuard>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AuthGuard allowedRoles={["Admin"]}>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </AuthGuard>
            }
          />
          <Route
            path="/users"
            element={
              <AuthGuard allowedRoles={["Admin"]}>
                <DashboardLayout>
                  <Users />
                </DashboardLayout>
              </AuthGuard>
            }
          />
          <Route
            path="/statistics"
            element={
              <AuthGuard allowedRoles={["Admin"]}>
                <DashboardLayout>
                  <h1>Statistics</h1>
                </DashboardLayout>
              </AuthGuard>
            }
          />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;