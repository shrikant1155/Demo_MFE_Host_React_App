import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work
import './App.css';
import ReactComponent from './ReactComponent';

// const MfeApp = lazy(() => import('mfeApp/TodoListModule'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <ReactComponent/>
      </Suspense>
      <div className="container">Demo home page</div>
    </div>
  );
}

export default App;