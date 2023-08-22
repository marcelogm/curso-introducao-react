"use client";
import InputFilter from "@/components/learn-fetch/InputFilter";
import PersonList from "@/components/learn-fetch/PersonList";
import { useEffect, useState } from "react";

export default function LearnDataFetch() {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  //        estados uteis para controlar o fluxo da aplicacao
  //          |
  //          |
  //          v
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //      tudo na pasta public
        //      fica acessivel atraves de http requests
        //                               |
        //           aguarda requisicao  |
        //                 |             |
        //                 v             v
        const response = await fetch("/data.json");
        //    necessario para extrair
        //    o objeto da response
        //       |
        //       |
        // atualiza o
        // estado e solicita rerender
        //  |    |
        //  v    v
        setData(await response.json());
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    // dispara funcao assincrona SEM esperar por ela
    fetchData();

    // executa no mount do componente
    // |
    // v
  }, []);

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
