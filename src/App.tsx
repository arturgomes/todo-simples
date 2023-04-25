import { useState } from 'react'

import './App.css'
import { AdicionarTransacao } from './components/AdicionarTransacao';
import { ListaTransacoes } from './components/ListaTransacoes';
import { SomatorioTransacoes } from './components/SomatorioTransacoes';

export interface Transacao {
  descricao: string
  tipo: 'receita' | 'despesa'
  data: Date
  valor: number
}

function App() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);

  function adicionarTransacao(transacao: Transacao) {
    setTransacoes([...transacoes, transacao]);
  }

  return (
    <div>
      <AdicionarTransacao onAddTransacao={adicionarTransacao} />
      <ListaTransacoes transacoes={transacoes} />
      <SomatorioTransacoes transacoes={transacoes} />
    </div>
  );
}

export default App
