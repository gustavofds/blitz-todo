# Ebytr Todo

Trata-se de uma aplicação de controle de lista de tarefas, onde é possível:

- Inserir uma nova tarefa na lista;
- Remover uma tarefa da lista;
- Atualizar uma tarefa da lista;
- Listar todas as tarefas.

A aplicação pode ser consultada em produção nos seguintes links:
- https://ebytr-todo.herokuapp.com (Front-end)
- https://ebytr-todo-back.herokuapp.com/api/tasks (Back-End)

## Como rodar a aplicação localmente

1. Clone o repositório utilizando `git clone`

2. Entra no diretório do back-end
- `cd blitz-todo/back`

3. Instale as dependências
- `npm install`

4. Crie na raiz da aplicação um arquivo '.env' para definir as variáveis de ambientes necessárias, como porta e url de conexão ao seu MongoDB:
- `PORT=4000`
- `DB_URL=mongodb+srv://url-do-banco`
- `DB_PASSWORD=senha do banco (se houver)`

5. Rode a aplicação
- `npm start`

6. Entre no diretório do front-end
- `cd ../front`

7. Instale as dependências
- `npm install`

8. Rode a aplicação
- `npm start`

## O que foi desenvolvido
Aplicação Node/Express no backend, com os seguintes endpoints:

- GET `/api/tasks`: Lista todas as tarefas, com possibilidade de ordenação utilizando query string. Exemplo: `/api/tasks?sortBy=createdAt&order=asc`;

- POST `/api/tasks`: Cria uma nova task;

- PUT `/api/tasks/:id`: Atualiza uma task;

- DELETE `/api/tasks/:id`: Exclui uma task;

No frontend foi desenvolvida uma aplicação em React, utilizando React Hooks, a qual faz uma requisição para os endpoints acima descritos e renderiza uma lita de tarefas, possibilitando ainda editar, deletar e criar nova tarefa.