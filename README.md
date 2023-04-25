# Tarefa de programação para web com React - Guia do Aluno

## Descrição Geral

Nesta tarefa, você irá construir um aplicativo de __lista de tarefas__ simples usando React. O objetivo é praticar conceitos básicos do React, como componentes, hooks e estado. Você também irá aprender a criar interfaces e formulários em React, além de implementar funcionalidades para editar e excluir tarefas.

## Requisitos

A tarefa requer que você tenha conhecimentos prévios em programação web, HTML, CSS e JavaScript. Além disso, é necessário ter conhecimentos básicos em React, incluindo a criação de componentes funcionais, o uso de hooks useState e useEffect e a manipulação de estado em React.

## Funcionalidades

O aplicativo deve ser capaz de:

- Exibir uma lista de tarefas
- Adicionar novas tarefas à lista
- Editar tarefas existentes
- Excluir tarefas da lista
- Estrutura do Código

O código está dividido em vários arquivos, cada um responsável por uma parte diferente do aplicativo. Aqui está uma descrição geral dos arquivos e suas funcionalidades:

- `TodoInterface.tsx`: define a interface `TodoInterface`, que descreve os dados que compõem um item de lista de tarefas
- `TodoList.tsx`: define o componente `TodoList`, que exibe uma lista de tarefas e permite a edição e exclusão de tarefas
- `TodoItem.tsx`: define o componente `TodoItem`, que exibe uma tarefa individual e permite a edição e exclusão dessa tarefa
- `TodoForm.tsx`: define o componente `TodoForm`, que exibe um formulário para adicionar novas tarefas à lista
- `App.tsx`: define o componente App, que é o componente principal do aplicativo e gerencia o estado global do aplicativo

## Tarefas

Aqui estão as tarefas que você precisa completar para finalizar o aplicativo:

1. Criar o componente `TodoList`
2. Criar o componente `TodoItem`
3. Criar o componente `TodoForm`
4. Adicionar funcionalidade para adicionar novas tarefas à lista
5. Adicionar funcionalidade para editar tarefas existentes
6. Adicionar funcionalidade para excluir tarefas da lista

## Instruções
1. Faça um fork deste repositório para sua conta no GitHub
2. Clone o repositório para o seu computador
3. Instale as dependências do projeto usando o comando `yarn`
4. Abra o código no seu editor de código preferido
5. Complete as tarefas conforme descrito acima
6. Verifique se o aplicativo funciona corretamente
7. Faça um commit das suas mudanças e envie para o seu repositório no GitHub
8. Compartilhe o link do seu repositório com o professor para avaliação

## Dicas

- Use os hooks useState e useEffect para gerenciar o estado do aplicativo
- Use a interface `TodoInterface` para garantir que os dados do item da lista de tarefas estejam no formato correto
- Use o componente `TodoForm` para adicionar novas tarefas à lista, e use a propriedade onSubmit do formulário para chamar uma função que adiciona a nova tarefa à lista de tarefas
- Use o componente `TodoItem` para exibir uma tarefa individual e permitir que o usuário edite ou exclua a tarefa
- Use o componente `TodoList` para exibir uma lista de tarefas e gerenciar as tarefas que devem ser exibidas
- Para editar uma tarefa existente, você pode usar uma caixa de diálogo modal para exibir um formulário que permita ao usuário editar a tarefa. Use a propriedade `onClick` do botão de edição em `TodoItem` para chamar uma função que exibe a caixa de diálogo modal
- Para excluir uma tarefa, use a propriedade `onClick` do botão de exclusão em `TodoItem` para chamar uma função que remove a tarefa da lista de tarefas
- Lembre-se de seguir as boas práticas de codificação, como nomear variáveis e funções de forma clara e consistente, manter o código bem formatado e usar comentários quando necessário