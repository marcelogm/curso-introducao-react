"use client";
import InputFilter from "@/components/learn-fetch/InputFilter";
import PersonList from "@/components/learn-fetch/PersonList";
import { useRequest } from "@/hooks/learn-custom-hooks/request";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("");

  //                                 hooks customizados
  //                                 ajudam a reaproveitar logica
  //                                 e facilitam a leitura do codigo
  //                                       |
  //                                       v
  const { data, isLoading, isError } = useRequest("/data.json");

  return (
    <div>
      <div className="h-96 m-2 overflow-scroll">
        {isLoading && <div>Carregando...</div>}
        {isError && <div>Erro</div>}
        <PersonList items={data} filterBy={filter} />
      </div>
      <InputFilter setFilter={setFilter} filter={filter} />
    </div>
  );
}
