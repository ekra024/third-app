import React from 'react'

export default async function Todo() {

  const [todoResponse, slowResonse2s, slowResponse3s] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5'),
    fetch('https:procodrr.vercel.app/?sleep=2000'),
    fetch('https:procodrr.vercel.app/?sleep=3000'),
  ]);

  const [todos, data2s, data3s] = await Promise.all([
    todoResponse.json(),
    slowResonse2s.json(),
    slowResponse3s.json()
  ])

  return (
    <div className='text-center'>
      <h1 className='font-semibold text-xl'>Todos</h1>
      {todos.map(({id, title, completed}) => (
        <div className="mt-5 text-left mx-10" key={id} >
          <input type="checkbox" checked={completed} readOnly />
          <span className="ml-2">{title}</span>
        </div>
      ))}
      
    </div>
  )
}
