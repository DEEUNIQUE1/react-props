// src/PlayersList.jsx
import React from 'react';
import Player from './Player';
import playersData from './players'; // Import players data

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
