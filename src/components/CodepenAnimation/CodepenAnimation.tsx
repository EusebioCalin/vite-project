
import './index.scss';
import { useEffect } from 'react';

const HomePage: React.FC = () => {
  useEffect(() => {
    const horizontal = document.querySelector('.horizontal');
    const vertical = document.querySelector('.vertical');

    for (let i = 0; i < 100; i++) {
      const stripe = document.createElement('div');
      stripe.classList.add('stripe');
      if (horizontal != null) {
        horizontal
          .appendChild(stripe);
      }
    }

    for (let i = 0; i < 100; i++) {
      const stripe = document.createElement('div');
      stripe.classList.add('stripe');
      if (vertical != null) {
        vertical
          .appendChild(stripe);
      }
    }
  }, []);

  return (
        <div>
            <div className="frame">
                <div className="horizontal"></div>
                <div className="vertical"></div>
            </div>
        </div>
  );
};

export default HomePage;
