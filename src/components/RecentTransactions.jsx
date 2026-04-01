import { TRANSACTION_METHODS, TRANSACTION_TYPES } from '../utils/constants';
import RecentTransaction from './RecentTransaction';

const RecentTransactions = ({
  transactions = [
    {
      id: 1,
      title: 'Grocery Store',
      amount: 45.67,
      type: TRANSACTION_TYPES.EXPENSE,
      date: '2024-06-01',
      paymentMethod: TRANSACTION_METHODS.CREDIT_CARD,
    },
    {
      id: 2,
      title: 'Salary',
      amount: 3000,
      type: TRANSACTION_TYPES.INCOME,
      date: '2024-05-30',
      paymentMethod: TRANSACTION_METHODS.PAYPAL,
    },
    {
      id: 3,
      title: 'Electricity Bill',
      amount: 120.5,
      type: TRANSACTION_TYPES.EXPENSE,
      date: '2024-05-28',
      paymentMethod: TRANSACTION_METHODS.BANK_TRANSFER,
    },
  ],
}) => {
  return (
    <div className="flex flex-col items-start space-y-2 whitespace-nowrap overflow-hidden truncate">
      <div className="text-bank-navy text-2xl font-bold">
        Recent Transactions
      </div>

      <div className="flex flex-col items-center space-y-2 bg-white rounded-3xl border-[#718EBF] shadow w-full min-h-40 pt-2">
        {transactions.map((transaction) => (
          <RecentTransaction key={transaction.id} {...transaction} />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
