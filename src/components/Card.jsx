import CardChip from '../assets/Chip_Card.png';
import MasterCard from '../assets/MasterCardLogo.png';
import Visa from '../assets/visa.png';

const Card = ({
  cardHolderName = 'Abgar Khachatryan',
  cardNumber = '9997 9997 9997 9997',
  expiryDate = '12/97',
  balance = 10000,
  type = 'mastercard',
  styles,
  applyHidden,
}) => {
  const cardStyles = applyHidden
    ? 'hidden xl:flex flex-col items-center justify-evenly bg-white rounded-3xl border-[#718EBF] shadow w-80 h-40'
    : 'flex flex-col items-center justify-evenly bg-white rounded-3xl border-[#718EBF] shadow w-80 h-40';

  return (
    <div className={cardStyles}>
      <div className="flex justify-between items-center w-full px-6">
        <div>
          <p className="text-xs text-[#718EBF]">Balance</p>
          <p className="text-sm text-[#343C6A]">${balance?.toFixed(2)}</p>
        </div>
        <img src={CardChip} alt="Card Chip" className="w-6 mt-2" />
      </div>
      <div className="flex justify-between items-center w-full px-6">
        <div>
          <p className="text-xs text-[#718EBF]">CARD HOLDER</p>
          <p className="text-sm text-[#343C6A]">{cardHolderName}</p>
        </div>
        <div>
          <p className="text-xs text-[#718EBF]">VALID THRU</p>
          <p className="text-sm text-[#343C6A]">{expiryDate}</p>
        </div>
      </div>

      <hr className="border-[#718EBF] w-full" />

      <div className="flex justify-between items-center w-full px-6">
        <div>
          <p className="text-md text-[#343C6A]">
            {cardNumber
              .split(' ')
              .map((val, index) => (index === 1 || index === 2 ? '****' : val))
              .join(' ')}
          </p>
        </div>
        {type === 'mastercard' ? (
          <img src={MasterCard} alt="MasterCard Logo" className="w-8" />
        ) : (
          <img src={Visa} alt="Visa Logo" className="w-8" />
        )}
      </div>
    </div>
  );
};

export default Card;
