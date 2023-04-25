import { Transacao } from "../../App";

interface SomatorioTransacoesProps {
  transacoes: Transacao[];
}

export function SomatorioTransacoes({ transacoes }: SomatorioTransacoesProps) {
  const somatorioReceitas = transacoes
    .filter((transacao) => transacao.tipo === "receita")
    .reduce((total, transacao) => total + transacao.valor, 0);

  const somatorioDespesas = transacoes
    .filter((transacao) => transacao.tipo === "despesa")
    .reduce((total, transacao) => total + transacao.valor, 0);

  const diferenca = somatorioReceitas - somatorioDespesas;

  return (
    <div>
      <div>Receitas: {somatorioReceitas}</div>
      <div>Despesas: {somatorioDespesas}</div>
      <div>Diferença: {diferenca}</div>
    </div>
  );
}
