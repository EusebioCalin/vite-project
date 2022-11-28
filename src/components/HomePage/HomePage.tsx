import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

import './style.scss';

const HomePageHeader: React.FC = () => {
  return (
    <div className={'header-component'} >
      <div className="glitch-container">
        <div className="glitch" data-text="Eusebio">Eusebio</div>
      </div>
      <div>
        <Link to={'/about'} > About </Link>
        <Link to={'/model'} > Work </Link>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
      <div className={'homepage-container'}>
      <HomePageHeader />
      <div style={
        {
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%'
        }
      }>
      WIP
      <PacmanLoader color="rgba(0, 150, 0, 0.75)"/>
      </div>
      <Outlet />
      </div>
  );
};

export default HomePage;
