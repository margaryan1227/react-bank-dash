import Card from './Card';

const MyCards = ({ cards }) => {
  return (
    <div className="col-span-2 max-w-4xl space-y-2">
      <div className="flex items-end justify-between text-bank-navy px-5">
        <h2 className="text-2xl font-bold">My Cards</h2>
        <h2 className="text-1xl hover:underline hover:cursor-pointer">
          See All
        </h2>
      </div>
      <div className="flex justify-around space-x-4">
        {cards.map((cardInfo, index) => (
          <Card key={cardInfo.id} {...cardInfo} applyHidden={index > 1} />
        ))}
      </div>
    </div>
  );
};

export default MyCards;
