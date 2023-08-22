
function PersonItem({ id, name }) {
  return (
    <li key={id} className="bg-gray-100 rounded m-2 p-2">
      {name}
    </li>
  )
}

function compare(text, filter) {
  return text.toLowerCase().includes(filter.toLowerCase())
}

export default function PersonList({ items, filterBy }) {
  // cuidado com o estado derivado.
  // não é necessário armazenar o resultado da filtragem
  // em um state, uma vez que o componente ja esta 
  // reagindo a mudancas nos items e nos filtros
  //
  // salvar esse estado geraria um re-render desnecessário
  const components = items
    .filter((it) => compare(it.nome, filterBy))
    .map((it) => (<PersonItem id={it.cpf} name={it.nome} />))

  return (
    <ul>
      {components}
    </ul>
  )
}

