# Job Application

## Descrição

Este repositorio foi desenvolvido para a aplicação da vaga de fron-end dev na [Desbravador](https://www.desbravador.com.br/), os requisitos para este exame são de acordo com o exemplo fornecido pela empresa: [Aqui!](https://github.com/DesbravadorSoftware/desafioFront2/)

## Sobre o desenvolvimento

Alguns pontos são interessantes de se resaltar

- O versionamento do repositorio esta sendo feito como se fosse um projeto em produção, usando branches e commits para manter o codigo versionado corretamente, alem de demonstrar o conhecimento basico de Git.

- Os commits são feitos em ingles por ser boa pratica para manter um padrão comum entre a comunidade de desenvolvedores

- O README esta sendo escrito em ingles devido ao tempo limite

- A pasta `components` possui um arquivo index.js e um arquivo .jsx, isso serva para poder isolar arquivos que não são necessarios na utilização do component, por exemplo testes, para o desenvolvedor, na hora de montar a UI é importante que os arquivos disponibilizados sejam referentes a UI em si, e não necessariamente a logica por tras

- Como a quantidade de requisições a API é limitada, decidi realizar uma requição pelo insmonia e salvar o JSON para poder montar a aplicação sem a necessidade de refazer o fetch

- Para gerenciar as rotas foi utilizado o react-router-dom

- Para gerenciar as requisições foi utilizado o react-query

## Frameworks

Foi utilizado o MaterialUI para agilizar a montagem da aplicação, porem os estilos padrões do MaterialUI foram alterados para demonstar a possibilidade de montar uma UI unica mesmo com uma framework

## Considerações finais

Infelizmente não fui capaz de fazer tudo o que gostaria para este teste, mas acredito ter demonstrado o conhecimento de grande parte do desenvolvimento de uma aplicação simples, quanto as estilizações, preferi focar mais na parte logica do que na estetica, por isso a estilização esta deixando a desejar
