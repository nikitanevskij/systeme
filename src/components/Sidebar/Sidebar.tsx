import React from 'react';
import './sidebar.css';
// @ts-ignore
export const Sidebar = ({ space }) => {
  console.log(space);
  // @ts-ignore
  const dragOverHandler = (e, space, item) => {
    e.preventDefault();
    if (e.target.className === 'component') {
      e.target.style.boxShadow = '0 4px 3px gray';
    }
  };
  // @ts-ignore
  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };
  // @ts-ignore
  const dragStartHandler = (e) => {};
  // @ts-ignore
  const dragEndHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };
  // @ts-ignore
  const dropHandler = (e, space, item) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>{space.title}</h3>
      {/* @ts-ignore */}
      {space.items.map((item) => (
        <div
          key={item.id}
          className="component"
          draggable={true}
          onDragOver={(e) => dragOverHandler(e, space, item)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragStart={(e) => dragStartHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDrop={(e) => dropHandler(e, space, item)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};
