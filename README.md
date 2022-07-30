<p align="center">
  <a>
    <a href="http://afirmajobs.herokuapp.com/"><img alt="Deploy on Heroku" src="https://img.shields.io/badge/deploy-heroku.com-purple">
    <a href="https://www.mongodb.com/cloud/atlas"><img alt="Database MongoDB" src="https://img.shields.io/badge/database-mongodb.com-blueviolet">
    <a href="https://nodejs.org/pt-br/"><img alt="Node version" src="https://img.shields.io/badge/node-v16.15.0-AA336A">
  </a>
</p>
<br>


# <div align = 'center'> AFIRMAJOBS </div>
<br>

<br>
<div align = "center">
<img src='./assets/afirmajobs-1.png' width = 1000 alt = 'afirmajobs'

</div>
<br>

<div align = "center">

> Este projeto é resultado do Bootcamp Back-End - Todas em Tech - { reprograma }
 
</div>

<br>

---

#  Justificativa

Grupos historicamente minorizados – população negra, indígena, mulheres, pessoas LGBTQIAP+, pessoas com deficiência, em situação de vulnerabilidade, 50+ e refugiados – tendem a sofrer mais com a falta de oportunidades e a má distribuição de renda. 

Segundo o IBGE, pessoas pretas ou pardas representem a maior parte da população (55,8%) e da força de trabalho brasileira (54,9%), porém apenas (29,9%) destas pessoas ocupavam cargos de gerência, segundo dados da Pesquisa Nacional por Amostra de Domicílios Contínua, em 2018.

No mercado de trabalho as ações afirmativas se apresentam como programas e políticas internas para tentar diminuir discrepâncias de equidade e inclusão no ambiente corporativo. As vagas afirmativas promovem alguma forma de reparação histórica, para combater a discriminação por meio de políticas sociais que promovem a inclusão destes grupos.

Mesmo com o aumento de programas e iniciativas que estimulam essas ações, ainda é árduo o processo de conexão entre as empresas e esses profissionais.

---
#  Solução 

A AfirmaJobs é uma plataforma de divulgação de vagas voltadas para a diversidade e inclusão. A iniciativa consiste em encurtar o caminho entre empresas contratantes e profissionais pertencentes a grupos minorizados.

</div>

---

<div align ='justify'>

#  Objetivo 

Por facilitar a conexão entre empresas e profissionais, a plataforma tem como objetivo principal estimular o aumento do índice de equidade corporativa, através de vagas afirmativas, utilizando a tecnologia para gerar impacto social.

---

#  Arquitetura 

<div align = "justify">

Esse projeto foi construído utilizando o padrão de arquitetura de software MVC, acrônimo para Model-View-Controller ou Modelo-Visão-Controle. 

A separação em camadas faz com que a aplicação fique leve e funcione de forma independente, permitindo que uma mesma lógica de negócios possa ser acessada e visualizada através de várias interfaces.

</div>


```

  📁 afirmajobs
   |
   |---📁 assets
   |
   |---📁 src
   |    |
   |    |--📄 app.js
   |    |
   |    |--📁 config
   |    |    |--📄 database.js
   |    |
   |    |--📁 controllers
   |    |    |--📄 businessController.js
   |    |    |--📄 jobOpportunityController.js
   |    |    |--📄 loginController.js
   |    |    |--📄 signUpController.js
   |    |    |--📄 userController.js
   |    |
   |    |--📁 middlewares
   |         |- 📄 auth.js
   |
   |    |--📁 models
   |    |    |--📄 businessSchema.js
   |    |    |--📄 jobOpportunitySchema.js
   |    |    |--📄 signUpSchema.js
   |    |    |--📄 userSchema.js
   |    |
   |    |--📁 routes
   |    |    |--📄 businessRoutes.js
   |    |    |--📄 indexRoutes.js
   |    |    |--📄 jobOpportunityRoutes.js
   |    |    |--📄 signUpRoutes.js
   |    |    |--📄 userRoutes.js
   |
   |    |--📁 test
   |         |- 📄 api.test.js     
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock,json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 server.js

```

#  Desenvolvimento 

A plataforma **Afirmajobs** é uma API REST, usando Node.js e o banco de dados noSQL MongoDB. No projeto também foi implementado testes unitários utilizando o jest e o supertest.

---

## 🔸 SignUp

Para acessar as funcionalidades da plataforma é preciso que seja feito o cadastro do usuário, nesse momento é solicitado email, senha e escolha do tipo da conta (Usuário ou Empresa). No projeto foi utilizado o método de criptografia do tipo hash, bcrypt para gerar senhas criptografadas. 

API deve retornar o seguinte Json caso o tipo da conta seja de Usuário:


```json
    {
        "_id": "62e284bd59687d4d337a4131",
        "email": "geankre@hotmail.com",
        "password": "$2b$10$JO1GlQWVsuj.jn7mC4Pgu.gBcRRktl7CxxlFouCiRhRamo.lQpDJe",
        "role": "user",
        "createdAt": "2022-07-28T12:42:16.054Z",
        "updatedAt": "2022-07-28T12:42:16.054Z",
        "__v": 0
    }

```

API deve retornar o seguinte Json caso o tipo da conta seja de Empresa:

```json
    {
        "_id": "62e2843d59687d4d337a4128",
        "email": "reprogramabr@hotmail.com",
        "password": "$2b$10$EaR4ufku7F2j7em0C3VWNe.kuwYFJedsxrL8W6IgwYGe3rz1rKIrW",
        "role": "business",
        "createdAt": "2022-07-28T12:42:16.054Z",
        "updatedAt": "2022-07-28T12:42:16.054Z",
        "__v": 0
    }

```
<div align = "center">
<img src ='./assets/afirmajobs-signup-business.gif' width = 500 alt = 'signUp'>

<div align ='justify'>

## 🔸 Login

Após a fase de cadastro, o usuário terá que fazer login, que por sua vez gerará um token para o mesmo tenha acesso as funcionalidades da aplicação.

API deve retornar o seguinte Json caso o login seja autorizado:

```json
{
    "message": "Authorized login",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTI4NDNkNTk2ODdkNGQzMzdhNDEyOCIsImlhdCI6MTY1OTA3NDgyMX0.rTEzMy5ue-0i-wVpraaWfIWxW398rMSar9gMXmBhjKk"
}

```
<div align = "center">
<img src ='./assets/afirmajobs-login.gif' width = 500 alt = 'login'>

<div align ='justify'>

## 🔸 Perfil de Usuário

Com o login autorizado o usuário poderá criar, atualizar e deletar o seu perfil na plataforma.

API deve retornar o seguinte Json para o perfil do Usuário:

```json
   {
        "_id": "62e28edcbd2736480b75876b",
        "userId": "62e284bd59687d4d337a4131",
        "name": "Geankre Souza",
        "pronoun": "Ela/Dela",
        "subTitle": [
            "JavaScript",
            "Node.js"
        ],
        "country": "Brasil",
        "city": "Recife",
        "resident": "São Paulo",
        "race": "Preta",
        "genderIdentity": "Mulher cis",
        "sexualOrientation": "Homossexual",
        "desability": false,
        "phone": 89886473643,
        "lookJob": true,
        "education": [
            {
                "institution": "Reprograma",
                "course": "Back-end Developer",
                "fieldOfStudy": "Desenvolvimento de Software",
                "status": "Completo",
                "start": "2011",
                "finish": "2015",
                "_id": "62e28edcbd2736480b75876c"
            }
        ],
        "workExperience": [
            {
                "title": "Diretora de arte",
                "typeOfContract": "PJ",
                "company": "Salobra Estúdio Criativo",
                "location": "Recife",
                "descriptionJob": "Lorem Impsum",
                "start": "2015",
                "finish": "2022",
                "_id": "62e28edcbd2736480b75876d"
            }
        ],
        "language": [
            {
                "language": "Inglês",
                "level": "Básico",
                "_id": "62e28edcbd2736480b75876e"
            }
        ],
        "description": "Lorem Impsum",
        "picture": "link.imagem",
        "otherSocialMedia": [
            "linklink"
        ],
        "interest": [
            "Tecnologia",
            "Criatividade",
            "Inovação"
        ],
        "createdAt": "2022-07-28T13:27:19.765Z",
        "updatedAt": "2022-07-28T13:27:19.765Z",
        "__v": 0
    }

```

<div align ='justify'>

## 🔸 Perfil de empresa

Com o login autorizado o usuário poderá criar, atualizar e deletar o seu perfil na plataforma.

PI deve retornar o seguinte Json para o perfil de Empresa:

```json
    {
        "userId": "62e2843d59687d4d337a4128",
        "name": "{Reprograma}",
        "subTitle": "+ Mulheres Programando",
        "segment": "Organizações sem fins lucrativos",
        "site": "www.reprograma.com.br",
        "description": "A {reprograma} é uma iniciativa de impacto social que foca em ensinar programação para mulheres cis e trans como forma de reduzir o gap de gênero no setor de tecnologia por meio da educação.",
            "based": "São Paulo",
        "foundation": "2016",
        "picture": "https://reprograma.com.br/assets/img/reprograma-fundos-claros.png",
        "interest": ["Tecnologia", "Educação", "Inovação"],
         "createdAt": "2022-07-28T14:15:23.676Z",
        "updatedAt": "2022-07-28T14:15:23.676Z",
        "__v": 0
    }

```

<div align ='justify'>

## 🔸 Vagas

As vagas são postadas exclusivamente por um usuário do tipo empresa e podem ser consultadas tanto pelo usuário comum, quanto por outras empresas. 

API deve retornar o seguinte Json para uma vaga cadastrada:

```json
    {
        "_id": "62e299fbe06adce4f5d3efa3",
        "position": "Engenheiro de software",
        "company": "{Reprograma}",
        "level": "Pleno",
        "typeOfWorkingPlace": "Híbrido",
        "location": "São Paulo",
        "contractType": "PJ",
        "salaryRange": "Indisponível",
        "description": "Lorem ipsum dolor sit amet",
        "afirmativePolicies": "Racial",
        "attachment": "anexo.png",
        "createdAt": "2022-07-28T14:15:23.676Z",
        "updatedAt": "2022-07-28T14:15:23.676Z",
        "__v": 0
    }

```

# Rotas

<br>

## Métodos POST/GET/PUT/DELETE - *SignUp/Login* 
<br>

<div align = "center">

|  Método  |                  Rota                       |                     Descrição                                |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  | https://afirmajobs.herokuapp.com/signUp/create          |    Cadastra novos usuários                  |
|  `POST`  | https://afirmajobs.herokuapp.com/signUp/login          |    Permite acesso a usuários cadastrados
|  `GET`   | https://afirmajobs.herokuapp.com/signUp/all                    |    Lista de todos os usuários cadastrados                      |                                    |
|   `PUT`  |  https://afirmajobs.herokuapp.com/signUp/update_email/:id       |       Atualiza o email do usuário buscando por ID                  |
|  `PUT`  | https://afirmajobs.herokuapp.com/signUp/update_password/:id                |    Atualizar senha do usuário buscando por ID                  |
| `DELETE` |  https://afirmajobs.herokuapp.com/signUp/delete/:id        |                      Deletar registro de usuário buscando por ID          |

</div>
<br>

## Métodos POST/GET/PUT/DELETE - *Perfil de usuário*
<br>

<div align = "center">

|  Método  |                  Rota                       |                     Descrição                                |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  | https://afirmajobs.herokuapp.com/user/profile                |    Cadastra perfil o usuário                  |
|  `GET`   | https://afirmajobs.herokuapp.com/user/all                    |    Lista de todos usuários cadastrados                        |
|  `GET`   | https://afirmajobs.herokuapp.com/user/by_name                 |             Busca por nome de usuário ou empresa                                     |
|  `GET`   | https://afirmajobs.herokuapp.com/user/by_interest                |             Busca usuário ou empresa de acordo com as tags de interesses adicionadas pelo usuário. 
|   `PUT`  |  https://afirmajobs.herokuapp.com/user/update_profile/:id        |       Atualiza informações do perfil do usuário buscando por ID                  |
| `DELETE` |  https://afirmajobs.herokuapp.com/user/delete_profile/:id        |                      Deleta perfil de usuário buscando por ID          |

</div>
<br>

## Métodos POST/GET/PUT/DELETE - *Perfil de empresa*
<br>

<div align = "center">

|  Método  |                  Rota                       |                     Descrição                                |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  | https://afirmajobs.herokuapp.com/business/profile                |    Cadastra perfil da empresa                  |
|  `GET`   | https://afirmajobs.herokuapp.com/business/all                    |    Lista de todas as empresas cadastradas                        |
|  `GET`   | https://afirmajobs.herokuapp.com/business/by_name                 |             Busca por nome de usuário ou empresa                                     |
|  `GET`   | https://afirmajobs.herokuapp.com/business/by_interest                |             Busca usuário ou empresa de acordo com as tags de interesses adicionadas pelo usuário. 
|  `GET`   | https://afirmajobs.herokuapp.com/business/profile_user                |             Filtro de busca de perfis de usuários pela localidade, raça, identidade de gênero, orientação sexual e palavras-chave
|   `PUT`  |  https://afirmajobs.herokuapp.com/business/update_profile/:id        |       Atualiza informações do perfil da empresa buscando por ID                  |
| `DELETE` |  https://afirmajobs.herokuapp.com/business/delete_profile/:id        |                      Deleta perfil da empresa buscando por ID          |

</div>
<br>

## Métodos POST/GET/PUT/DELETE - *Vagas*
<br>

<div align = "center">

|  Método  |                  Rota                       |                     Descrição                                |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  | https://afirmajobs.herokuapp.com/job/create                |    Cadastra uma nova vaga                 |
|  `GET`   | https://afirmajobs.herokuapp.com/job/all                    |    Lista todas as vagas cadastradas                        |
|  `GET`   | https://afirmajobs.herokuapp.com/job/by_position_company                 |             Busca vagas pelo cargo ou empresa                                     |
|  `GET`   | https://afirmajobs.herokuapp.com/job/filter                |             Filtro de busca de vagas de acordo com o nível do cargo, a localização da vaga, o tipo de contrato de trabalho, o formato de trabalho (Presencial, Híbrido ou Remoto) e o recorte ao qual a vaga é destinada
|   `PUT`  |  https://afirmajobs.herokuapp.com/job/update_job_opportunity/:id        |       Atualiza informações de uma vaga publicada buscando por ID                  |
| `DELETE` |  https://afirmajobs.herokuapp.com/job/delete_job_opportunity/:id        |                      Deleta uma vaga publicada buscando por ID          |

</div>
<br>

# Tecnologias Utilizadas
<br>

Para que fosse possível a execução desse projeto, foi necessário a utilização de algumas dependências, descritas a seguir:

## ⚙️Dependências do Projeto

<div align = "justify">

Para que fosse possível a execução desse projeto, foi necessário a utilização de algumas dependências, descritas a seguir:


- [Express](https://www.npmjs.com/package/express) - Framework para aplicativo da web do Node.js;
<br>

- [Cors](https://www.npmjs.com/package/cors) - Permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.
 <br>

 - [Mongoose](https://www.npmjs.com/package/mongoose) - É uma biblioteca de programação orientada a objetos JavaScript que cria uma conexão entre MongoDB e a estrutura de aplicativo da web Express.
 <br>

 - [Dotenv-safe](https://www.npmjs.com/package/dotenv-safes) - Carrega variáveis de ambiente de um arquivo .env para process.env.
 <br>
 - [Bcrypt](https://www.npmjs.com/package/bcryptjs) - Método de criptografia do tipo hash para senhas baseado no Blowfish.
 <br>

 - [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - É um método definido na RFC 7519 para autenticação remota entre duas partes. Ele é uma das formas mais utilizadas para autenticar usuários em APIs RESTful.

<br>

## ⚙️Dependências de desenvolvimento

- [Nodemon](https://www.npmjs.com/package/nodemon) - Ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor;
<br>

 - [Jest](https://www.npmjs.com/package/jest) - Framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.

 - [Supertest](https://www.npmjs.com/package/supertest) - É uma módulo que forja requisições visando testar webservers em Node.js e verifica o retorno das mesmas para automatizar testes desde tipo de infraestrutura, principalmente web APIs.
 

## 📑 Arquivos: 

<div align = "justify">

- [package-lock.json](https://github.com/Geankre/Reprograma-Afirmajobs/blob/main/package-lock.json) - Especifica a versão e suas dependências;
<br>

- [package.json](https://github.com/Geankre/Reprograma-Afirmajobs/blob/main/package.json) - Arquivo de configuração utilizado para estipular e configurar dependências;
<br>

- [.gitignore](https://github.com/Geankre/Reprograma-Afirmajobs/blob/main/.gitignore) - Arquivo que lista quais arquivos ou pastas o Git deve ignorar;

<br>

# Instalação
<br>

1. Entre na pasta onde você deseja clonar o repositório. Abra o **git** nela e digite: 

    ```bash
    $ git clone https://github.com/Geankre/Reprograma-Afirmajobs
    ```

2. Digite a linha abaixo para entrar na pasta correta: 

   ```bash
    $ cd afirmajobs
     ```

3. Escreva a seguinte linha para instalar as dependências utilizadas nesse projeto: 

   ```bash
    $ npm install
    ```
4. Inicie o servidor com o comando: 

   ```bash
    $ npm run dev
    ```   
5. Para realizar a verificação dos testes da API utilize o comando:

    ```bash
    $ npm run test
    ```
<br>

# Testando a API 
<br>

## Acesse através do Heroku:
<br>
<a href="http://afirmajobs.herokuapp.com/">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" width="80" height="80" />
</a>

<br>

## Acesse através do Postman:
<br>

- Importe a coleção para teste deste servidor clicando [aqui](https://www.getpostman.com/collections/c4fc57cbe6ab1687f775)!

- Copie o link acima e, no [Postman](https://www.postman.com/downloads/), clique em *Import* -> *Link* (cole o link) -> *Continue* -> *Import*.

- Ou forke diretamente para o seu Postman através do link:<div align = "justify"> [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/21749615-ab58573a-d513-4cc9-9bd8-b92faba3273e?action=collection%2Ffork&collection-url=entityId%3D21749615-ab58573a-d513-4cc9-9bd8-b92faba3273e%26entityType%3Dcollection%26workspaceId%3D45716587-bef7-4129-8bb5-954394cd60fe) </div>

<br>

# ©️ Licença
## Este projeto está sob a licença [MIT](./LICENSE).

<br>

# Implementações futuras
<br>

-  Serviço de chat com WebSocket;
-  Postagens no feed do perfil tipo usuário ou empresa;
-  Função de adicionar usuário ou empresa à sua rede;
-  Alerta de vagas;
-  Sugestão de vagas de acordo com o perfil do usuário;
-  Adicionar um perfil de Recrutador;

<br>


# Desenvolvedora

<div align = "center">
<img src ='./assets/foto_autora.jpg' width = 200 alt = 'autora'>

[![Linkedin Badge](https://img.shields.io/badge/-geankresouza-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/eliza-pimentel)](https://www.linkedin.com/in/geankresouza/) 


<div align ='justify'>
 
Também conhecida como Gel Souza, sou pernambucana, apaixonada por criação e inovação, desenvolvedora back-end pela 
{Reprograma} e musicista nas horas vagas. Desenvolvo APIs Rest ultilizando JavaScript e Node.js, integradas com o banco de dados NoSQL MongoDB e testes com Jest e Supertest. Utilizo o BCRYPT como método de criptografia do tipo hash e o JWT para autenticação e verificação do usuário. Me coloco aberta para novas possibilidades de aprender, fazer e existir no mundo. 

<br>

#  Referências


[O que são ações afirmativas](https://www.politize.com.br/acoes-afirmativas/?https://www.politize.com.br/&gclid=Cj0KCQjwio6XBhCMARIsAC0u9aHcJ60M8Ve2pIlr-qhGAE9jjCB-DH4u2DxnDMrYSI3djaDq55w8-vkaArUgEALw_wcB)

[Desigualdades sociais no brasil - IBGE](https://educa.ibge.gov.br/jovens/materias-especiais/21039-desigualdades-sociais-por-cor-ou-raca-no-brasil.html#:~:text=O%20IBGE%20revelou%20que%2C%20pela,%25%20(46%2C6%25))

[Falta de orferta em educação de qualidade aumenta a desigualdade racial](https://agenciabrasil.ebc.com.br/educacao/noticia/2016-11/educacao-reforca-desigualdades-entre-brancos-e-negros-diz-estudo)

[A importância de ações afirmativas nas empresas](https://editorabrasilenergia.com.br/a-importancia-das-acoes-afirmativas-das-empresas/)


