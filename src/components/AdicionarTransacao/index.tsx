import { useState } from "react";
import { Transacao } from "../../App";

interface AdicionarTransacaoProps {
  onAddTransacao: (transacao: Transacao) => void;
}

export function AdicionarTransacao({ onAddTransacao }: AdicionarTransacaoProps) {
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState<"receita" | "despesa">("receita");
  const [data, setData] = useState(new Date());
  const [valor, setValor] = useState(0);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const transacao: Transacao = { descricao, tipo, data, valor };
    onAddTransacao(transacao);
    setDescricao("");
    setTipo("receita");
    setData(new Date());
    setValor(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Descrição:
        <input
          type="text"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />
      </label>
      <label>
        Tipo:
        <select value={tipo} onChange={(event) => setTipo(event.target.value as "receita" | "despesa")}>
          <option value="receita">Receita</option>
          <option value="despesa">Despesa</option>
        </select>
      </label>
      <label>
        Data:
        <input
          type="datetime-local"
          value={data.toISOString().slice(0, -8)}
          onChange={(event) => setData(new Date(event.target.value))}
        />
      </label>
      <label>
        Valor:
        <input
          type="number"
          value={valor}
          onChange={(event) => setValor(Number(event.target.value))}
        />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
}
