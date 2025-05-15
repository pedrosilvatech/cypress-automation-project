# Cypress Automation Project

Este repositório contém um conjunto de testes automatizados utilizando o Cypress, com foco em simular a funcionalidade de login e cadastro em um sistema de exemplo. O projeto inclui testes de upload de arquivos e validações de interação do usuário.

## 🚀 Funcionalidades

- **Testes de Login e Cadastro:**
  - Testes para validar o login com credenciais válidas e inválidas.
  - Testes para validar o cadastro de um novo usuário com dados válidos e inválidos.
- **Upload de Arquivos:**
  - Teste de envio de arquivos usando o campo de upload de arquivos de um site de exemplo (https://the-internet.herokuapp.com/upload).

## 📦 Tecnologias Utilizadas

- **Cypress:** Framework de automação para testes end-to-end.
- **JavaScript:** Linguagem de programação utilizada para escrever os testes.
- **Node.js:** Ambiente de execução JavaScript.

## 🛠 Como rodar os testes

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/cypress-automation-project.git
   cd cypress-automation-project

   ```

2. Instale as dependências:
   ```bash
   npm install

   ```
3. Execute os testes de forma interativa:

```bash
   npx cypress open
```

## 📸 Exemplo de Upload de Arquivo

Um dos testes executados envolve o envio de um arquivo de imagem. Ao realizar o upload, o teste valida se a mensagem "File Uploaded!" é exibida, indicando que o arquivo foi carregado com sucesso.
