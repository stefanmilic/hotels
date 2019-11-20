import React from 'react';
import Home from './components/Home';
import { block } from 'bem-cn';

const b = block('main-container');

const App: React.FC = () => {
  return (
    <div className={b()}>
      <Home />
    </div>
  );
};

export default App;
