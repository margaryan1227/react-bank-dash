import CardChip from '../assets/Chip_Card.png';

const Card = ({
  cardHolderName,
  cardNumber,
  expiryDate,
  balance = 1000,
  type,
  styles,
}) => {
  return (
    <div className="flex flex-col items-center justify-evenly bg-white rounded-3xl border-[#718EBF] shadow w-64 h-40">
      <div className="flex justify-between items-center w-full px-6">
        <div>
          <p className="text-xs text-[#718EBF]">Balance</p>
          <p className="text-sm text-[#343C6A]">${balance?.toFixed(2)}</p>
        </div>
        <img src={CardChip} alt="Card Chip" className="w-6 mt-2" />
      </div>

      <div>2</div>

      <hr className="border-[#718EBF] w-full" />

      <div>3</div>
    </div>
  );
};

export default Card;
