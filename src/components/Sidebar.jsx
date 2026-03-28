import logo from '../assets/logo.png';
import { formatSidebarLabel } from '../utils/formatSidebarLabal.js';
import SidebarItem from "./SideBarItem.jsx";

const SideBar = ({
  currentPath: page,
  handlePageChange
}) => {
  const menuItems = [
    {icon: 'dashboard', label: 'Dashboard', id: '1'},
    {icon: 'transactions', label: 'Transactions', id: '2'},
    {icon: 'accounts', label: 'Accounts', id: '3'},
    {icon: 'investments', label: 'Investments', id: '4'},
    {icon: 'creditCards', label: 'Credit Cards', id: '5'},
    {icon: 'loans', label: 'Loans', id: '6'},
    {icon: 'services', label: 'Services', id: '7'},
    {icon: 'settings', label: 'Settings', id: '8'},
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col">
      {/* Logo Section */}
      <div className="p-8 flex items-center gap-3" onClick={() => { handlePageChange('dashboard') }}>
        <img src={logo} alt="Logo" className="w-9 h-9 hover:cursor-pointer" />
        <h1 className="font-bold text-2xl text-bank-navy font-montserrat hover:cursor-pointer">BankDash.</h1>
      </div>

      {/* Nav Links */}
      <nav className="flex-1">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            isActive={page === formatSidebarLabel(item.label)}
            handlePageChange={handlePageChange}
          />
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;