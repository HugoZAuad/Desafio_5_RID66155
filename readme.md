# Desafio 5 - Sistema de Gerenciamento de Livros

Este projeto é um sistema completo para cadastro, edição, listagem e exclusão de livros, composto por um back-end em Node.js (TypeScript) e um front-end em React.

## Funcionalidades

- Listar livros cadastrados
- Cadastrar novos livros
- Editar informações de livros existentes
- Excluir livros
- Interface web amigável

---

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Banco de dados (ex: PostgreSQL)

---

## Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd Desafio_5_RID66155
```

### 2. Configurar o Back-End

    ## 1. Acesse a pasta do back-end:
    ```
    cd BACK-END
    ```
    ## 2. Instale as dependências:
    ```
    npm install
    ```
    ## 3. Configure o banco de dados:
    ```
    Edite o arquivo src/config/database.ts com as informações do seu banco.
    ```
    ## 4. Rode as migrations (se necessário):
    ```
    npm run typeorm migration:run
    ```
    ## 5. Inicie o servidor:
    ```
    npm run dev
    ```

### O back-end estará rodando em http://localhost:3333 (ou porta configurada).

### 3. Configurar o Front-End:
    ## 1. Acesse a pasta do front-end:
    ```
    cd ../FRONT-END
    ```
    ## 2. Instale as dependências:
    ```
    npm install
    ```
    ## 3. Inicie a aplicação:
    ```
    npm run dev
    ```

### O front-end estará rodando em http://localhost:5173 (ou porta configurada).

### Observações:

- Certifique-se de que o back-end esteja rodando antes de iniciar o front-end.
- O front-end consome a API do back-end para todas as operações de livros.
- Para alterar configurações de conexão, edite os arquivos de configuração em cada projeto.

### Tecnologias Utilizadas:

- Back-End: Node.js, TypeScript, Express, TypeORM, PostgreSQL
- Front-End: React, Vite, SCSS