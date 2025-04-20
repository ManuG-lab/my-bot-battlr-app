import React from 'react';

const Bot = ({ bot, enlistBot }) => {
  return (
    <div className="bot-card" onClick={() => enlistBot(bot)}>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      
    </div>
  );
};

export default Bot;