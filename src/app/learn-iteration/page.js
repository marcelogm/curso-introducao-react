"use client";
import ToDoList from "@/components/learn-iteration/ToDoList";
import { useId, useState } from "react";

const defaultItems = [
  { id: 1, name: "Maça" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Abacaxi" },
  { id: 4, name: "Limão" },
  { id: 5, name: "Morango" },
];

export default function LearnIteration() {
  const [items, setItems] = useState(defaultItems);
  const [input, setInput] = useState("");

  //       helper que cria ids automaticamente
  //           |
  //           |
  //           v
  const id = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id, name: input };

    //     desconstrucao para manipular a lista
    //     nao eh possivel dar push na lista, deve-se criar
    //     uma lista nova
    //             |
    //             v
    setItems([...items, newItem]);
    setInput("");
  };

  return (
    <div>
      <ToDoList items={items} />
      <form
        onSubmit={handleSubmit}
        className="m-2 mr-6 ml-6 flex justify-center"
      >
        <input
          id="text-input"
          className="w-9/12 p-2 h-10 rounded bg-gray-200"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="ml-4 pl-2 pr-2 h-10 w-2/12 rounded bg-gray-100"
          type="submit"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
