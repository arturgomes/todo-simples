import { useState } from "react";
import { Transacao } from "../../App";

interface ListaTransacoesProps {
  transacoes: Transacao[];
}

export function ListaTransacoes({ transacoes }: ListaTransacoesProps) {
  const [filtro, setFiltro] = useState("");

  const transacoesFiltradas = transacoes.filter((transacao) =>
    transacao.descricao.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filtro}
        onChange={(event) => setFiltro(event.target.value)}
        placeholder="Buscar transações"
      />
      <ul>
        {transacoesFiltradas.map((transacao) => (
          <li key={transacao.descricao}>
            {transacao.descricao} - {transacao.tipo} - {transacao.valor}
          </li>
        ))}
      </ul>
    </div>
  );
}