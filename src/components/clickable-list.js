import React from 'react';

// Notice how this clickable list component doesn't know anything about pokemons.
// All it cares about is that it's a list, and to fire the onClickItem function
// passed to it when the user clicks an li.

export const ClickableList = ({ data, onClickItem }) => (
  <ul>
    {data.map((item, index) => (
      <li key={index} onClick={() => onClickItem(item)}>
        {item.title}
      </li>
    ))}
  </ul>
);
