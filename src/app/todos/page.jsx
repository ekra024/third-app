
export default async function Todos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5',{
    next: {
      revalidate: 5000,
    }
  });
  const todos = await res.json();
  console.log(todos);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold">All Todos are here</h1>
      {todos.map(({id, title, completed}) => (
        <div className="mt-5 text-left mx-10" key={id} >
          <input type="checkbox" checked={completed} readOnly />
          <span className="ml-2">{title}</span>
        </div>
      ))}
    </div>
  );
}
