import React from 'react';
import './app.css';

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app-title">
        <h1>Simple Editor</h1>
      </div>

      <div className="app-wrapper">
        <div className="sidebar"></div>
        <div className="content"></div>
      </div>
    </div>
  );
};
