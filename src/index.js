import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("1")
console.time("App Startup Time");
// console.log("Application start:", Date.now());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// console.log("Application rendered:", Date.now());
console.log("2")
console.timeEnd("App Startup Time");