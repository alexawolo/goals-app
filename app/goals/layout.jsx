import React from 'react'
import GoalsList from './GoalsList';
async function fetchGoals() {
    const res = await fetch("http://localhost:3000/data.json")
    const data = await res.json();
    return data;
}

const GoalsLayout = async ({children}) => {

    const goals = await fetchGoals();

  return (
    <div className="flex flex-1">
        <aside className="flex flex-[0.3] border-r border-solid border-black h-[90vh]">
            <GoalsList goals={goals}/>
        </aside>
        <div className="flex flex-[0.7]">{children}</div>
    </div>
  )
}

export default GoalsLayout;
