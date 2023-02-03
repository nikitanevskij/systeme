import React from 'react';
import './app.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Workarea } from './components/Workarea/Workarea';

export const App: React.FC = () => {
  const [space, setSpace] = React.useState([
    {
      id: 1,
      title: 'Sidebar',
      items: [
        { id: 1, title: 'Текст' },
        { id: 2, title: 'Кнопка' },
        { id: 3, title: 'Изоображение' },
      ],
    },
    { id: 2, title: 'Workarea', items: [] },
  ]);
  return (
    <div className="app">
      <div className="app-title">
        <h1>Simple Editor</h1>
      </div>
      <div className="app-title">
        <h1>Simple Editor</h1>
      </div>

      <div className="app-wrapper">
        <div className="sidebar">
          {/* @ts-ignore */}
          <Sidebar space={space[0]} />
        </div>
        <div className="workarea">
          {/* @ts-ignore */}
          <Workarea space={space[1]} />
        </div>
      </div>
    </div>
  );
};
