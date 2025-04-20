import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
 const [bots, setBots] = useState([]);
 const[ yourArmy, setYourArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
    .then(res => res.json())
    .then(data => setBots(data))
  })

  //add bot to army
  function enlistBot(bot){
    if (!yourArmy.includes(bot)){
      setYourArmy([...yourArmy, bot])
    } else {
      alert("You already enlisted this bot!")
    }
  }

  //remove bot from army
  function releaseBot(bot){
    setYourArmy(yourArmy.filter((b) => b.id !== bot.id))
  }

  function dischargeBot(botId){
    fetch(`http://localhost:8001/bots/${botId}`,
    {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => {
      setYourArmy(yourArmy.filter((b) => b.id !== botId))
      setBots(bots.filter((b) => b.id !== botId))
    })
  }

  return(
    <div>
      <h1>Bot Battlr</h1>

    </div>
  )
}
export default App;