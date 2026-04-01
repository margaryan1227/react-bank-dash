import { TRANSACTION_METHODS, TRANSACTION_TYPES } from '../utils/constants';
import BankTransactionIcon from './icons/BankTransactionIcon';
import CardTransactionIcon from './icons/CardTransactionIcon';
import DefaultTransactionIcon from './icons/DefaultTransactionIcon';
import PayPalTransactionIcon from './icons/PayPalTransactionIcon';
import { formatTransactionAmount } from '../utils/formatTransacionAmount';
import { format } from 'date-fns';

const RecentTransaction = ({ title, amount, date, paymentMethod, type }) => {
  const getTransactionPaymentMethodIcon = (paymentMethod, width, height) => {
    switch (paymentMethod) {
      case TRANSACTION_METHODS.PAYPAL:
        return <PayPalTransactionIcon width={width} height={height} />;
      case TRANSACTION_METHODS.BANK_TRANSFER:
        return <BankTransactionIcon width={width} height={height} />;
      case TRANSACTION_METHODS.CREDIT_CARD:
        return <CardTransactionIcon width={width} height={height} />;
      default:
        return <DefaultTransactionIcon width={width} height={height} />;
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center rounded-lg w-full px-4 hover:bg-gray-100 hover:cursor-pointer px-4">
      <div className="flex items-center gap-4">
        {getTransactionPaymentMethodIcon(paymentMethod, 40, 40)}
        <div className="text-sm">
          <h3 className="text-[#232323]">{title}</h3>
          <p className="text-[#718EBF]">
            {format(new Date(date), 'd MMMM yyyy')}
          </p>
        </div>
      </div>
      <div
        className={`text-sm ${type === TRANSACTION_TYPES.INCOME ? 'text-[#41D4A8]' : 'text-[#FF4B4A]'}`}
      >
        {formatTransactionAmount(amount, type)}
      </div>
    </div>
  );
};

export default RecentTransaction;
