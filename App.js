import React from 'react';
import MinMax from './components/MinMax';

function App() {
  return (
    <div>
      <MinMax min={10} max={20} />
      <MinMax min={5} max={2} />
      <MinMax min={15} max={15} />
    </div>
  );
}

export default App;
