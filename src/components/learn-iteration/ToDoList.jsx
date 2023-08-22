
function ToDoItem({ item }) {
  const { id, name } = item

  //                            necessario sempre que iterar
  //                                                  |
  //                                                  v
  return (
    <ul className="m-2 p-2 bg-gray-100 rounded" key={id}>
      {name}
    </ul>
  )
}

export default function ToDoList({ items }) {
  //            js functional programming
  //                   |
  //                   v
  const todos = items.map((it) => <ToDoItem item={it} />)

  return (
    <li className="p-5 h-96 overflow-y-scroll mb-4">
      {todos}
    </li>
  )
}

