import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import SampleText from './SampleText';

const container = document.getElementById('app');
const root = createRoot(container!);

function App() {
  return (
    <>
      <div className='text-cyan-600'>Hello World!</div>
      <SampleText />
    </>
  )
}

root.render(<App />);
