import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="react-component">
      <h2>Это React-компонент!</h2>
      <button onClick={() => alert('Привет!')}>Кликни</button>
    </div>
  );
}

// Рендерим React в DOM-элемент из HTML
ReactDOM.createRoot(document.getElementById('react-root')).render(<App />);
