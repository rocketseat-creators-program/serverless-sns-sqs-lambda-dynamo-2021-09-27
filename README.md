## Montando uma base de auditoria com Serverless, SNS, SQS, Lambda e DynamoDB

<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

Existem momentos em que precisaremos processar dados, porém não precisamos fazer isso junto com uma requisição. Para não perdermos performance, podemos utilizar alguns recursos, como por exemplo mensagens e filas.

Nesta aula mostro a arquitetura de um serviço de auditoria, no qual usamos SNS, SQS, Lambda e DynamoDB para processar dados de forma assíncrona e gravarmos quando uma conta de usuário foi apagada.

Utilizo o Serverless Framework para fazer o deploy de todos os recursos na AWS e o código das Lambdas (reponsáveis por enviar mensagens no SNS, ler mensagens da fila e gravar no DynamoDB) é feito utilizando Node.js.

## Expert

| [<img src="https://avatars.githubusercontent.com/u/711732?s=460&u=6b1039f8a921c5733d92d13b2971c55157fee005&v=4" width="75px;"/>](https://github.com/askmon) |
| :-: |
|[André Spanguero Kanayama](https://github.com/askmon)|

### Requisitos

- Node.js v14 (`.nvmrc` incluso no projeto)
- Conta na AWS (utilizaremos IAM e DynamoDB)
- Serverless framework
