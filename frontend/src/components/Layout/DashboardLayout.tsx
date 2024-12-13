import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Menu,
  X,
  LogOut,
  LayoutDashboard,
  Users,
  FileText,
} from "lucide-react";
import { logout } from "../../store/slices/authSlice";
import type { RootState } from "../../store";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // بناء قائمة العناصر التي ستظهر في القائمة الجانبية (Sidebar)
  const menuItems = [
    ...(user?.role === "Admin"
      ? [
          { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" }, // يظهر فقط إذا كان المستخدم admin
        ]
      : []),
    { icon: FileText, label: "Transactions", path: "/transactions" }, // الـ Transactions يظهر دائمًا
    ...(user?.role === "Admin"
      ? [
          { icon: Users, label: "Users", path: "/users" }, // يظهر فقط إذا كان المستخدم admin
        ]
      : []),
  ];

  useEffect(() => {
    console.log("User data updated:", user);
  }, [user]);

  console.log(menuItems);
  console.log(user?.role); // تحقق من الدور

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md text-gray-500 hover:text-gray-600 focus:outline-none"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-4 bg-red-600">
            <h1 className="text-xl font-bold text-white">
              Vodafone Cash Admin
            </h1>
          </div>

          <nav className="flex-1 px-4 py-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="flex items-center w-full px-4 py-2 text-gray-600 rounded-md hover:bg-gray-100"
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-gray-600 rounded-md hover:bg-gray-100"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
