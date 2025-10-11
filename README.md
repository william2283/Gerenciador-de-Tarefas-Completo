🧩 Projeto Backend - Gerenciador de Tarefas (Spring Boot + MySQL)
📘 Descrição do Projeto

Este projeto é um CRUD completo (Create, Read, Update e Delete) desenvolvido em Java com Spring Boot.
O objetivo é gerenciar tarefas (criar, listar, atualizar e excluir), com integração total ao banco de dados MySQL.
Foi criado de forma didática, com separação de camadas e boas práticas de desenvolvimento backend.

Tecnologias

Java 17+
Spring Boot
Spring Data JPA
MySQL
Maven
IntelliJ IDEA

Estrutura do Projeto:

controller/   -> Endpoints da API
model/        -> Representa a tabela do banco (Tarefa)
repository/   -> Acesso ao banco de dados
ProjetoGrandeApplication.java -> Classe principal

Endpoints:

| Método | Endpoint      | Descrição                 |
| ------ | ------------- | ------------------------- |
| GET    | /tarefas      | Lista todas as tarefas    |
| POST   | /tarefas      | Cria nova tarefa          |
| PUT    | /tarefas/{id} | Atualiza tarefa existente |
| DELETE | /tarefas/{id} | Deleta tarefa             |


Exemplo JSON:

{
  "titulo": "Estudar Spring Boot",
  "descricao": "Fazer CRUD completo",
  "concluida": false
}

Como Executar:

1-Clone o repositório:
2-git clone https://github.com/william2283/Projeto-Backend---Gerenciador-de-Tarefas.git
3-Configure o banco MySQL no application.properties
4-Rode a classe ProjetoGrandeApplication.java
5-Teste os endpoints com Postman ou Insomnia

Observações:

Projeto simples, com controller acessando o repository diretamente.
Ideal para aprendizado e projetos iniciais.
