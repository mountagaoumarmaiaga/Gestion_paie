import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; // N'oubliez pas d'importer Provider
import store from './redux/store'; // Assurez-vous que le store est correctement défini

// Utilisation de createRoot pour le rendu avec Redux Provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Ajoutez le Provider autour de l'application */}
      <App />
    </Provider>
  </React.StrictMode>
);
