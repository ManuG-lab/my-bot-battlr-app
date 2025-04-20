import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';


const App = () => {
  const [bots, setBots] = useState([]); 
  const [yourArmy, setYourArmy] = useState([]); 

  // Fetch bots from the JSON 
  useEffect(() => {
    fetch('http://localhost:8001/bots') 
      .then(response => response.json())
      .then(data => setBots(data))
  }, []);

  // enlist  bot into army
  function enlistBot(bot){
    if (!yourArmy.includes(bot)) {
      setYourArmy([...yourArmy, bot]);
    }
  };

  //release  bot from  army
  function releaseBot(bot){
    setYourArmy(yourArmy.filter(b => b.id !== bot.id));
  };

  //delete bot from  server
  function dischargeBot(botId){
    fetch(`http://localhost:8001/bots/${botId}`, { method: 'DELETE' })
      .then(() => {
        setYourArmy(yourArmy.filter(b => b.id !== botId));
        setBots(bots.filter(b => b.id !== botId));
      })
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy yourArmy={yourArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;