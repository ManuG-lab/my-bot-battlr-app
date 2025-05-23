import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotFilter from './BotFilter';


const App = () => {
  const [bots, setBots] = useState([]) 
  const [yourArmy, setYourArmy] = useState([]) 
  const [isArmyVisible, setIsArmyVisible] = useState(false)
  const [selectedClass, setSelectedClass] = useState('')

  // Fetch bots from the JSON 
  useEffect(() => {
    fetch('http://localhost:8001/bots') 
      .then(response => response.json())
      .then(data => setBots(data))
  }, []);

  const classes = [];
for (const bot of bots) {
    if (!classes.includes(bot.bot_class)) {
        classes.push(bot.bot_class);
    }
}
  // enlist  bot into army
  function enlistBot(bot){
    if (!yourArmy.some(b => b.id === bot.id)) { 
      setYourArmy([...yourArmy, bot]);
      setIsArmyVisible(true); 
      alert(`Enlisting ${bot.name}!`);
    }
  };

  //release  bot from  army
  function releaseBot(bot){
    setYourArmy(yourArmy.filter(b => b.id !== bot.id));
    alert(`Releasing ${bot.name}!`);
  };

  //delete bot from  server
  function dischargeBot(botId, bot){
    fetch(`http://localhost:8001/bots/${botId}`, { method: 'DELETE' })
      .then(() => {
        setYourArmy(yourArmy.filter(b => b.id !== botId));
        setBots(bots.filter(b => b.id !== botId));
        alert(`Discharging ${bot.name}!`);
      })
  };

  function handleToggle(){
    setIsArmyVisible(!isArmyVisible);
  }

  const filteredBots = selectedClass ? bots.filter(bot => bot.bot_class === selectedClass) : bots;

  return (
    <div>
      <h1>Bot Battlr</h1>
      <button onClick={handleToggle} className='btn-army'>{isArmyVisible ? "Hide My Bots" : "Show My Bots"}</button>
      <BotFilter classes={classes} selectedClass={selectedClass} onClassChange={setSelectedClass} />
      <BotCollection bots={filteredBots} enlistBot={enlistBot} />
      <div className={`your-bot-army ${isArmyVisible ? 'active': ''}`}>
         <YourBotArmy yourArmy={yourArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      </div>
     
    </div>
  );
};

export default App;