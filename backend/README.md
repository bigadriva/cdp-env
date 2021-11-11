# CDP Driva - Backend

## Descrição

Este software é o backend para o Customer Data Plataform (CDP) da Driva.
Aqui encontra-se uma API que fornece dados para o front-end da aplicação.

Por definição do time, será feita uma requisição por tela e, como resposta,
serão devolvidas todas as informações necessárias para preencher os cards da
respectiva tela.


## Pré-requisitos

Para desenvolver e executar o software deste repositório, é necessário que você
tenha o docker instalado, pois tudo será feito em containers.


## Execução

### Com Dockerfile

Após clonar o repositório, você pode executar

```bash
docker build -t <tag-da-imagem> .
```

Para gerar a imagem em seu computador.

Com a imagem gerada, execute

```bash
docker run -p 8080:8080 <tag-da-imagem>
```


### Com docker-compose

Após clonar o repositório, você pode executar

```bash
docker-compose up -d --build
```

Ao executar o comando acima, por padrão (e por segurança), você entrará em um
ambiente totalmente simulado e isolado, com um banco de dados local, para que
possa desenvolver e testar a vontade sem afetar o ambiente de produção.

Você também pode executar serviços um a um executando

```bash
docker-compose up --build <serviço>
```


# Documentação

## SUMÁRIO

1. [API](#api)
    1. SUBTÓPICO
2.
3.
4.
5.
6.
7.
8.
9.


## API

Um diagrama simplificado da API pode ser encontrado no whimsical da equipe de
tecnologia, no diagrama [CDP - Backend](https://whimsical.com/cdp-backend-Ud9mVCm1ngFwzwGYTwu8A4).

Como padrão para as requisições, foi definido pelo time de tecnologia que será feita uma requisição por página do front. Então, por exemplo, na tela principal do report de vendas, será feita uma requisição ao backend que retornará os dados para preencher os dados da tela principal, sendo eles:
1. Número de clientes ativos
2. Número de clientes potenciais
3. Número de dias sem comprar.