import { useRouteError } from 'react-router-dom';
import './style.scss';

const Fallback: React.FC = () => {
  const error = useRouteError() as Error;
  console.log('error');
  const message = error.message || JSON.stringify(error);
  return (
    <div className="center-screen" >
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{message}</pre>
      <button onClick={() => (window.location.href = '/')}>
        Click here to reload the app
      </button>
    </div>
  );
};

export default Fallback;
