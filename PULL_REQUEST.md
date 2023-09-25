# Corelab Challange - Breno Perricone Fischer - API/Backend

PT: O projeto foi realizado de acordo com as regras do desafio. Para fins de teste prático de diferentes conceitos do dia-dia, foi proposto a criação de uma aplicação web, tanto da API como do front-end. A seleção em questão faz parte do processo seletivo para vaga de <b>desenvolvedor full-stack junior</b>, na empresa <b>Corelab</b>.

----

EN: The project was carried out according to the challenge rules. For practical testing purposes of different day-to-day concepts, the creation of a web application, both the API and the front-end, was proposed. The selection in question is part of the hiring process for the <b>junior full-stack developer</b> position at <b>Corelab</b>.

## O projeto/The project

PT: O projeto consiste em um organizador de tarefas. O usuário deverá ser capaz de criar e gerenciar suas listas de tarefas. 

Esse repositório é apenas referente ao <b>back-end</b> da aplicação. O código que irá consumir a API e renderizar a interface, estará contido em outro repositório.

----

EN: The project consists of a task organizer. The user should be able to create and manage their task lists.

This repository is only related to the <b>back-end</b> of the application. The code that will consume the API and render the interface will be contained in another repository.

### Requisitos Funcionais / Functional Requirements

PT:
- Os usuários devem ser capazes de criar, ler, atualizar e excluir tarefas usando a API.
- Os usuários devem ser capazes de marcar um item como favorito.
- Os usuários devem ser capazes de definir uma cor para cada item de tarefa.
- O frontend React deve exibir a lista de tarefas do usuário de maneira responsiva e visualmente atrativa, com a capacidade de filtrar por itens favoritos e cor.
- Os itens favoritos devem ser exibidos no topo da lista.

EN:
- Users should be able to create, read, update, and delete to-do items using the API.
- Users should be able to mark an item as a favorite.
- Users should be able to set a color for each to-do item.
- The React frontend should display the user's to-do list in a responsive and visually appealing manner, with the ability to filter by favorite items and color.
- The favorited items should be displayed at the top of the list.

### Requisitos Não Funcionais / Non-functional 

PT: 
- A API do backend deve ser construída no framework Node.js e usar um banco de dados de sua escolha (por exemplo, MongoDB, PostgreSQL, etc.).
- O frontend deve ser construído em React e utilizar ferramentas modernas de desenvolvimento web e as melhores práticas.
- A aplicação deve ser responsiva e visualmente atraente.

EN: 
- The backend API should be built in Node.js framework and use a database of your choice (e.g., MongoDB, PostgreSQL, etc.).
- The frontend should be built in React and use modern web development tools and best practices.
- The application should be responsive and visually appealing.

### Ferramentas utilizadas / Libs

PT: 
- <b>Node.js ^16.15.0</b> (ferramenta obrigatória)
    - <b>tsx</b>: apenas para desenvolvimento, auxilia na conversão de TS para JS, pois Node não suporta TS nativamente .
    - <b>Fastify</b>: como micro-framework, para auxilizar na criação de rotas.

- <b>NPM ^8.5.5</b>: como gerenciador de pacotes.

- <b>eslint</b>: apenas para desenvolvimento, auxilia na padronização do código, a partir de regras pré-configuradas.
    - <b>@rocketseat/eslint-config</b>: conjunto de regras para o eslint - detalhe que a regra "end of line" foi modificada. 

- <b>dotenv</b>: lib para permitir ler o arquivo .env e usar diretamente as variáveis com process.env

- Database:
    - <b>sqlite3</b>: para desenvolvimento, driver do banco de dados relacional, de simples implementação
    - <b>knex</b>: query builder, para auxiliar na criação de queries SQL e abstração do código, para ficar independente de um banco de dados específico.
    - 

- <b>zod</b>: Ajuda na validação de formulários e formatação de dados.

- <b>vitest</b>: apenas em desenvolvimento, framework para auxiliar na criação de testes

- <b>supertest</b>: apenas em desenvolvimento, possibilita realizar requisições sem colocar o servidor rodando, para fins de testes.

- <b>tsup</b>: apenas em desenvolvimento, auxilia na conversão do código TS para JS, visando criar a build do projeto

## Database

### Schema

PT:
O banco de dados possui o seguinte schema:
- Tabela "Notes"
    - id: uuid
    - title: string
    - body: (optional) string
    - favourite: boolean

## Rotas

PT:
- <b>/notes</b>
    - POST: inserir no banco de dados nova note com um title, favourite, body (optional)
    - GET: retorna todas as notes do banco de dados
    
- <b>/notes/:id</b>
        - GET: retorna uma note caso o id esteja presente no banco de dados


## Testes / Tests

PT: Os testes foram criados com auxílio do framework Vitest, dentro da pasta /test.

### Ponta a ponta / End to end

PT:
- Cenários de teste:
    - adicionar note no banco de dados
    - listar todas as notes
    - listar uma note específica 
    

