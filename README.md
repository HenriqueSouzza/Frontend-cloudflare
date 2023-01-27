<h1 align="center">
  <br>Frontend with Clouldflare
</h1>

## Objetivo

Este repo apresenta uma poc de duas aplicações sendo gerenciada por um orchestrador, cloudFlare. A ideia não é apresentar boas práticas de implementação componentes ou design pattern nesse projeto. Basicamente, é apresentar uma possível solução para manter duas aplicações com intuito de uma possível modernização em uma delas. <br>

## Overview

Inicialmente, depois que a aplicação estiver rodando no link <b>http://localhost:9000</b> notará que no title da aba apresentará a aplicação <b>App People</b> com informação de qual aplicação foi renderizada, quando clicar no menu <b>carros</b> apresentará a aplicação <b>App Car</b>.

- App People <br> 
> app-people/

Projeto para apresentar um dashboard com o menu no header da página. Ao clicar no menu pessoas, apresenta uma lista de pessoas. <br>

- App Car <br> 
> app-car/

Projeto para apresentar um dashboard com o menu na lateral da página. Ao clicar no menu carros, apresenta uma lista de carros. <br>

- Worker <br>
> src/

A implementação do worker está no arquivo <b>src/index.ts</b>, toda regra de roteamento está nesse arquivo. <br>

A regra implementada foi direcionar o usuário para outra aplicação caso em alguma rota específica, tudo é baseado em javascript, tendo este conhecimento você conseguirá adicionar regras que fizer sentido a sua aplicação.<br>


## Como instalar o projeto?

> - Clonar o projeto

- App People <br>
> - raiz do projeto
> - cd app-people 
> - yarn install
> - yarn build && yarn preview
> - Teste o host http://localhost:3000 se está funcionando <b>Se estiver funcionando deu tudo certo</b>
> - Deixe a aplicação rodando

- App Car <br>
> - raiz do projeto
> - cd app-car 
> - yarn install
> - yarn build && yarn preview
> - Teste o host http://localhost:3001 se está funcionando <b>Se estiver funcionando deu tudo certo</b>
> - Deixe a aplicação rodando

- Worker <br>
> - raiz do projeto
> - yarn install
> - yarn start
> - Irá pedir para você criar uma conta, crie a conta.
> - Volte no terminal e pressione a <b>l</b> para prosseguir o start do servidor.
> - Teste o host http://localhost:9000 se está funcionando <b>Se estiver funcionando deu tudo certo</b>
> - Agora pode realizar a navegação 
