# Projeto Fullstack

## Descrição

Plataforma de login de professor e cadastro de alunos

### Funcionalidades

- Login de Usuário:
  - Autenticação via email e senha.
- Registro de alunos:
  - Cria registro de aluno com Nome, Idade e Turma
  - Lista os alunos registrados
  - Deleta um aluno existente
- Armazena informações no banco de dados

### Tecnologias

- Front-end:
  - Typescript + React Js
  - Tailwind CSS
  - Axios
  - React Hook Form
  - React Router Dom
- Back-end:
  - Node Js + Express
  - Session
  - Mongoose

### Instalação

    	git clone <https://github.com/AnaLara714/teacher-platform.git>
    	cd nome-do-projeto

    em um terminal faça:
    	cd back-end
    	npm install
    	npm run dev

    em outro terminal execute:
    	cd front-end
    	npm install
    	npm run dev

### Rotas

- Front-end:
  - http://localhost:5173/ => tela de login
  - http://localhost:5173/students => tela pós login
  - http://localhost:5173/create-student => tela de criar o aluno
- Back-end:
  - http://localhost:3000/auth/register => criar o usuário (post - email e senha no body)
  - http://localhost:3000/auth/login => loga o usuário (post - email e senha no body)
  - http://localhost:3000/students/ => lista os alunos (get)
  - http://localhost:3000/students/ => cria o aluno (post)
  - http://localhost:3000/students/delete/:id => deleta o aluno (delete)
