import { TRANSACTION_TYPES } from './constants';

export const formatTransactionAmount = (amount, type) =>
  type === TRANSACTION_TYPES.INCOME
    ? `+$${amount.toFixed(2)}`
    : `-$${amount.toFixed(2)}`;
