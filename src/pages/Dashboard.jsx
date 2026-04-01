import MyCards from '../components/MyCards';
import RecentTransactions from '../components/RecentTransactions';

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 grid grid-cols-3 space-x-6 p-4">
      <MyCards
        cards={[
          { id: 1, title: 'Card 1', description: 'This is card 1' },
          {
            id: 2,
            title: 'Card 2',
            description: 'This is card 2',
            type: 'visa',
          },
          { id: 3, title: 'Card 3', description: 'This is card 3' },
        ]}
      />
      <RecentTransactions />
      <div className="mt-6 max-w-4xl h-1/3 bg-white rounded-lg shadow p-6"></div>
    </div>
  );
};

export default Dashboard;
