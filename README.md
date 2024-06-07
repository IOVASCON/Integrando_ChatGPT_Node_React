# Integrando ChatGPT com Node e React

Este projeto é um exemplo de integração do ChatGPT usando Node.js para o backend e React para o frontend. O objetivo é simular o funcionamento básico de um chatbot utilizando a API da OpenAI.

## Descrição

O projeto consiste em duas partes principais:

- **Backend**: Desenvolvido com Node.js e Express, o backend faz chamadas para a API da OpenAI para gerar respostas baseadas nas entradas do usuário.
- **Frontend**: Desenvolvido com React, o frontend fornece uma interface de usuário simples para interagir com o chatbot.

## Estrutura do Projeto

Integrando_ChatGPT_Node_React/
├── backend/
│ ├── node_modules/
│ ├── src/
│ │ └── index.js
│ ├── .env
│ ├── package.json
│ └── package-lock.json
└── frontend/
├── node_modules/
├── public/
│ └── index.html
├── src/
│ ├── App.js
│ └── index.js
├── .env
├── package.json
└── package-lock.json

## Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

### Backend

1. Navegue até o diretório `backend`:

   cd backend

2. Instale as dependências:

    npm install

3. Crie um arquivo `.env` na raiz do diretório `backend` e adicione sua chave da API OpenAI:

    OPENAI_API_KEY=sk-...sua-chave...

4. Inicie o servidor:

    npm start

### Frontend

1. Navegue até o diretório `frontend`:

    cd frontend

2. Instale as dependências:

    npm install

3. Inicie o servidor de desenvolvimento:

    npm start

## Uso

1. Com o servidor backend em execução, navegue até o diretório `frontend` e inicie o servidor de desenvolvimento.
2. Acesse o aplicativo React no navegador em `http://localhost:3000`.
3. Interaja com o chatbot inserindo perguntas na interface e recebendo respostas geradas pelo ChatGPT.

## Contribuição

1. Fork o projeto.
2. Crie um branch para sua feature (`git checkout -b feature/AmazingFeature`).
3. Faça commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`).
4. Faça push para o branch (`git push origin feature/AmazingFeature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

