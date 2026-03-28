import SideBar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Accounts from "./pages/Accounts";  
import Investments from "./pages/Investments";
import CreditCards from "./pages/CreditCards";
import Loans from "./pages/Loans";
import Services from "./pages/Services";
import Settings from "./pages/Settings";
import { useState, useEffect } from "react";

const App = () => {
  const [activePage, setActivePage] = useState('dashboard');

  useEffect(() => {
    const path = window.location.pathname.substring(1) || activePage;
    setActivePage(path);
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    window.history.pushState(null, '', `/${page}`);
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.substring(1) || activePage;
      setActivePage(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const getTitle = () => activePage.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (<div className="flex min-h-screen">
    <SideBar currentPath={activePage} handlePageChange={handlePageChange}/>

    <div className="flex-1 flex flex-col">
      <Header title={getTitle()}/>

      <main className="p-8 bg-gray-50 flex-1">
        {/* Simple Switch Logic */}
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'transactions' && <Transactions />}
        {activePage === 'accounts' && <Accounts />}
        {activePage === 'investments' && <Investments />}
        {activePage === 'creditCards' && <CreditCards />}
        {activePage === 'loans' && <Loans />}
        {activePage === 'services' && <Services />}
        {activePage === 'settings' && <Settings />}
      </main>
    </div>
  </div>);
};

export default App;
