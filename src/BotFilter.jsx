import React from "react";

function BotFilter({classes, selectedClass, onClassChange}){
    return(
        <div>
            <label htmlFor="class-select">Filter By Class  </label>
            <select  id={selectedClass}
            onChange={(e) => onClassChange(e.target.value)}>
                <option value="">All</option>
                {classes.map((botClass) => (
                    <option key={botClass} value={botClass}>
                        {botClass}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default BotFilter;