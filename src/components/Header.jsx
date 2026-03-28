import avatar from '../assets/avatar.png';
import SettingIcon from './SettingIcon';
import NotificationsIcon from './NotificationsIcon';
import SearchBar from './SearchBar';

const Header = ({title}) => {
  return (
    <div className="flex items-center gap-10 w-full p-6 bg-white border-b border-gray-200">
      <div className="ml-4">
        <h1 className="text-xl font-bold text-bank-navy">{title}</h1>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <SearchBar/>

        <SettingIcon/>
        <NotificationsIcon/>

        <img src={avatar} alt="User Avatar" className='rounded-full h-12'/>
      </div>
    </div>
  );
};

export default Header;
