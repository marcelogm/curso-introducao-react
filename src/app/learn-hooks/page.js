"use client";
import TextInput from "@/components/learn-hooks/TextInput";
import { useState } from "react";

export default function LearnHooks() {
  const [shown, setShow] = useState(true);

  return (
    <div className="h-screen w-full flex">
      <div className="flex-row">
        <button
          onClick={() => setShow(!shown)}
          className="bg-gray-200 p-2 rounded m-2"
        >
          {shown ? "Esconder componente" : "Mostrar componente"}
        </button>
        {/*  renderizacao condicional */}
        {/*    |                      */}
        {/*    |                      */}
        {/*    v                      */}
        {shown && <TextInput />}
      </div>
    </div>
  );
}
