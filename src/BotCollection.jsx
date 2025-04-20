import React from "react";
import Bot from "./Bot";

function BotCollection({bots, enlistBot}){
    return(
        <div className="bot-collection"> 
        <h2>Available Bots</h2>
        <div className="bot-list">
            {bots.map((bot) => (
                <Bot key={bot.id} bot={bot} enlistBot={enlistBot} />
            ))}
        </div>
        </div>
    )
}

export default BotCollection;