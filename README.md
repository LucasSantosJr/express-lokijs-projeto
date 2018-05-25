

#### API
`POST /register`

Send: JSON. Format: 

    { username: your-name-here, password: 'your-password-here' }

Answer: JSON.

Error: 

    { error: true }

Success: 

    { error: false, token: 'your-token-goes-here' }

`POST /login`

Send: JSON. Format: 

    { username: your-name-here, password: 'your-password-goes-here' }

Answer: JSON.

Error: 

    { error: true }

Success: 
      
    { error: false, token: 'your-token-goes-here' }

`POST /task`

Send: JSON. 
     
    { task: Object, token: 'your-token-goes-here' }

Answer: JSON.

Error: 

    { error:true, message: 'Send the token!' }

    { error:true, message: 'Send the task!' }
                  
    { error:true, message: 'Invalid token' }
                  
                  
Success: 

    { error: false, task: 'The added task!' }

`POST /tasks`

Send: JSON. 

    { error: false, token: 'your-token-goes-here' }

Answer: JSON.

Error: 

    { error: true, message: 'Invalid token!' }

Success: 

    [Objects]


##### Pré-requisitos:

1) Instale o banco de dados in-memory Redis. Ele é utilizado para gerenciamento de sessão da aplicação. Execute os comandos abaixo para a instalação.

        wget http://download.redis.io/redis-stable.tar.gz
        tar xvzf redis-stable.tar.gz
        cd redis-stable
        make

2) Para o utilização do projeto faça o clone do repositório e execute o comando: `npm install`

#### DEVELOPMENT MODE

To run the project you must use the following command: `npm run dev`

You can pass the port. The default port is `3000`. For example:`PORT=8080 npm run dev`.

The project uses the dependecy _Nodemon_ for doing the restart of the projeto at each change in files during the development.

#### PRODUCTION MODE

To run the project you must use the following command: `npm run prod`

You can pass the port in which the server will run, the default port is `3000`. For example:`PORT=8080 npm run prod`.

The project uses the process manager _PM2_ for running the project in mode cluster and uses all the cores of SO. The environment variables `ǸODE_ENV` is set to `prod`.
