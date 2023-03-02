import React from 'react'

async function fetchGoalFromId(id) {
    const res = await fetch(`http://localhost:3000/data.json`)
    const data = await res.json();
    return data?.find((goal) => goal.id === id);
}

const GoalDetails = async ({ params }) => {
    const goal = await fetchGoalFromId(params.id)

  return (
    <div>
        <div className="p-5 flex gap-[30px] text-blue-500">
            <h2>{ goal.goal }</h2>
        </div>
        <div className="p-5">To Be Completed { goal.target }</div>
        <div className="p-5">Required { goal.requiredItems }</div>
    </div>
  )
}

export default GoalDetails;
