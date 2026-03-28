import Dashboard from '../assets/sidebar-icons/Dashboard.svg?react';
import Transactions from '../assets/sidebar-icons/Transactions.svg?react';
import Accounts from '../assets/sidebar-icons/Accounts.svg?react';
import Investments from '../assets/sidebar-icons/Investments.svg?react';
import CreditCards from '../assets/sidebar-icons/CreditCards.svg?react';
import Loans from '../assets/sidebar-icons/Loans.svg?react';
import Services from '../assets/sidebar-icons/Services.svg?react';
import Privileges from '../assets/sidebar-icons/Privileges.svg?react';
import Settings from '../assets/sidebar-icons/Settings.svg?react';
import { formatSidebarLabel } from '../utils/formatSidebarLabal';

const ICON_MAP = {
  dashboard: Dashboard,
  transactions: Transactions,
  accounts: Accounts,
  investments: Investments,
  creditCards: CreditCards,
  loans: Loans,
  services: Services,
  privileges: Privileges,
  settings: Settings,
};

const SidebarItem = ({ item, isActive, handlePageChange }) => {
  const IconComponent = ICON_MAP[item.icon];

  if (!IconComponent) return null;

  return (
    <div
      key={item.id}
      onClick={() => handlePageChange(formatSidebarLabel(item.label))}
      className={`flex items-center gap-4 px-8 py-4 cursor-pointer relative transition-all
      ${
        isActive
          ? 'text-bank-blue font-semibold'
          : 'text-[#B1B1B1] hover:text-bank-blue'
      }`}
    >
      {/* The Blue Indicator Bar for Active State */}
      {isActive && (
        <div className="absolute left-0 w-1.5 h-full bg-bank-blue rounded-r-lg" />
      )}

      <IconComponent
        className={`w-6 h-6 transition-colors ${
          isActive ? 'text-bank-blue' : 'text-[#B1B1B1]'
        }`}
      />
      <span className="font-montserrat">{item.label}</span>
    </div>
  );
};

export default SidebarItem;
