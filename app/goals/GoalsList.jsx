import React from 'react'
import Link from 'next/link'

export default function GoalsList({ goals }) {
  return (
    <div className="flex flex-col h-full">
        { goals.map((goal) => 
            <Link className="bg-blue-500 m-[10px] rounded-[20px] p-[5px]" href={`/goals/${goal.id}`}>
                <div className="p-[10px] m-[10px] rounded-[10px] bg-white">
                    { goal.goal }
                </div>
            </Link>
        ) }
    </div>
  )
}
