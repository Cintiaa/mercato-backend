# mercato-backend

**Mercato** é um sistema de vendas desenvolvido em **TypeScript** utilizando o framework **NestJS** e o banco de dados **SQLite**.

## Funcionalidades
- Cadastro de produtos.
- Exibição dos produtos.
- Utilização de um banco de dados SQLite para armazenamento de dados.
- Arquitetura modular utilizando controllers, services e repositories.

## Tecnologias Utilizadas
- [NestJS](https://nestjs.com/) - Framework backend.
- [Bun](https://bun.sh/) - Runtime JavaScript de alto desempenho.
- [TypeORM](https://typeorm.io/) - ORM para integração com banco de dados.
- [SQLite](https://sqlite.org/index.html) - Banco de dados relacional.
- [TypeScript](https://www.typescriptlang.org/) - Superconjunto do JavaScript com tipagem estática.
- [Argon2](https://www.npmjs.com/package/argon2) - Biblioteca de criptografia para hash e verificação de senhas.

## Requisitos

- **Bun** instalado. Para instalar, execute:

```bash
curl -fsSL https://bun.sh/install | bash
```

## Instalação e configuração

1. Clone o repositório:
```bash 
git clone https://github.com/seu-usuario/mercato.git
cd mercato-backend
```

2. Instale as dependências:
```bash
bun install
```

3. Configurações do banco de dados: O projeto usa SQLite por padrão. O arquivo do banco de dados será gerado automaticamente no diretório raiz do projeto com o nome `mercato.sqlite`. Caso queira alterar o nome do arquivo, edite a configuração do TypeORM em `src/ormconfig.ts`.
```bash
 export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'mercato.sqlite', // Ou o caminho desejado
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
```

4. Rodar a aplicação: Para iniciar o servidor NestJS utilizando bun:
```bash
bun run start
```

A aplicação será executada em `http://localhost:3000`

## Estrutura do Projeto

```bash 
├── src
│   ├── app.module.ts          # Módulo principal da aplicação
│   ├── ormconfig.ts           # Configurações do TypeORM
│   ├── user                   # Módulo de usuários
│   │   ├── entities           
│   │   │  ├── user.entity.ts  # Entidade de usuário
│   │   ├── user.module.ts     # Módulo de usuários
│   │   ├── user.service.ts    # Serviço de usuários
│   │   ├── user.controller.ts # Controlador de usuários
│   └── main.ts                # Ponto de entrada da aplicação
├── mercato.sqlite             # Arquivo do banco de dados (gerado automaticamente)
├── README.md                  # Documentação do projeto
└── package.json               # Scripts e dependências do projeto
```

## Exemplo de Requisição

- Cadastrar usuário (POST):
  - URL: `http://localhost:3000/user`
    ```bash
    {
      "email": "johndoe@example.com",
      "password": "abobrinha"
    }
    ```
- Obter todos os usuários (GET): 
  - URL: `http://localhost:3000/user`
