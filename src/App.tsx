import { RouterProvider } from 'react-router-dom';
import './App.scss';
import { router } from './Routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
