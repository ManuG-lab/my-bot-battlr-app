// src/YourBotArmy.jsx
import React from 'react';

const YourBotArmy = ({ yourArmy, releaseBot, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army-list">
        {yourArmy.map(bot => (
          <div key={bot.id} className="bot-army-card">
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={bot.name} />
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <button onClick={() => releaseBot(bot)} className='btn-release'>Release</button>
            <button onClick={() => dischargeBot(bot.id)} className='btn-discharge'>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;