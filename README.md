# Desafio DIO Fastify

API REST simples desenvolvida com **Fastify** e **TypeScript** para listar equipes e pilotos de Formula 1.

## Objetivo do projeto

Este projeto foi criado para praticar:

- criacao de servidor HTTP com Fastify;
- criacao de rotas REST;
- uso de parametros de rota;
- organizacao basica de uma API em TypeScript.

## Tecnologias utilizadas (explicacao didatica)

- **Node.js**
  Ambiente de execucao JavaScript fora do navegador. E ele que executa a API no seu computador/servidor.

- **TypeScript**
  Superset do JavaScript com tipagem estatica. Ajuda a evitar erros em tempo de desenvolvimento.

- **Fastify**
  Framework web focado em performance para Node.js. Facilita criacao de rotas e respostas HTTP.

- **@fastify/cors**
  Plugin de CORS do Fastify. Permite que frontends em outras origens acessem a API.

- **tsx**
  Ferramenta para rodar arquivos TypeScript diretamente no ambiente de desenvolvimento, sem build manual.

- **tsup**
  Bundler para gerar build de producao na pasta `dist/`.

## Estrutura do projeto

```txt
.
|-- src/
|   `-- server.ts
|-- .env
|-- .gitignore
|-- package.json
|-- package-lock.json
`-- tsconfig.json
```

## Pre-requisitos

- Node.js 18+ (recomendado);
- npm.

## Instalacao

```bash
npm install
```

## Variaveis de ambiente

Crie o arquivo `.env` na raiz do projeto:

```env
PORT=3636
```

## Como executar

### Desenvolvimento

```bash
npm run start:dev
```

### Desenvolvimento com reload automatico

```bash
npm run start:watch
```

### Build

```bash
npm run dist
```

Depois do build, execute o arquivo gerado na pasta `dist/`.

## Endpoints da API

### `GET /teams`

Retorna a lista de equipes.

Exemplo de resposta:

```json
{
  "teams": [
    { "id": 1, "name": "McLaren", "base": "Woking, United Kingdom'" },
    { "id": 2, "name": "Merdeces", "base": "'Brackley, United Kingdom" },
    { "id": 3, "name": "Red Bull Racing", "base": "Milton Keynes, United Kingdom" },
    { "id": 4, "name": "Williams", "base": "Grove, United Kingdom" }
  ]
}
```

### `GET /drivers`

Retorna a lista de pilotos.

Exemplo de resposta:

```json
{
  "drivers": [
    { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" },
    { "id": 2, "name": "Lewis Hamilton", "team": "Mercedes" },
    { "id": 3, "name": "Charles Leclerc", "team": "Ferrari" },
    { "id": 4, "name": "Lando Norris", "team": "McLaren" }
  ]
}
```

### `GET /drivers/:id`

Retorna um piloto especifico pelo `id`.

Exemplo de sucesso (`200`):

```json
{
  "driver": { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" }
}
```

Exemplo de erro (`404`):

```json
{
  "error": "Driver not found"
}
```

## Testando com curl

```bash
curl http://localhost:3636/teams
curl http://localhost:3636/drivers
curl http://localhost:3636/drivers/1
```

## CORS

O projeto esta configurado com:

```ts
origin: ["*"]
```

Ou seja, a API aceita requisicoes de qualquer origem.
