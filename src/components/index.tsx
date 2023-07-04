import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';

const container = document.getElementById('app');
const root = createRoot(container!);

function App() {
  return <div className='text-cyan-600'>Hello World!</div>
}

root.render(<App />);
