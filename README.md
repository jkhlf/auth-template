# Template de Autenticação

Um template completo para aplicações Next.js com sistema de autenticação usando Auth.js, Prisma ORM e Supabase.

## Características

- ✅ Login e registro de usuários
- 🔐 Senhas criptografadas com bcrypt
- 🔄 Gerenciamento de sessões com Auth.js
- 📊 Banco de dados PostgreSQL com Supabase
- 🛠️ Prisma ORM para manipulação do banco de dados
- 📱 Interface responsiva com TailwindCSS

## Estrutura do Projeto

```
app/
  ├── api/
  │   ├── auth/
  │   │   └── [...nextauth]/   # Configuração do Auth.js
  │   └── register/            # API para registro de usuários
  ├── components/              # Componentes reutilizáveis
  │   ├── AuthForm.tsx         # Formulário de login/registro
  │   ├── AuthProvider.tsx     # Provedor de contexto de autenticação
  │   └── Navbar.tsx           # Barra de navegação
  ├── login/                   # Página de login
  ├── register/                # Página de registro
  ├── types/                   # Tipos personalizados
  └── page.tsx                 # Página inicial
prisma/
  └── schema.prisma            # Schema do Prisma
```

## Configuração

### 1. Clone este repositório

```bash
git clone <url-do-seu-repositorio>
cd auth-template
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o Supabase

1. Crie uma conta no [Supabase](https://supabase.io/)
2. Crie um novo projeto
3. Obtenha a URL de conexão do banco de dados

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
DATABASE_URL="postgresql://postgres:[SEU-PASSWORD]@db.[SEU-PROJECT-ID].supabase.co:5432/postgres"
AUTH_SECRET="seu_auth_secret_aqui" # Gere um com: openssl rand -base64 32
AUTH_URL="http://localhost:3000"
```

### 5. Execute as migrações do Prisma

```bash
npx prisma migrate dev --name init
```

### 6. Execute o projeto

```bash
npm run dev
```

## Personalizando o Template

### Adicionar novos campos ao usuário

1. Modifique o modelo `User` no arquivo `prisma/schema.prisma`
2. Execute `npx prisma migrate dev --name add_user_fields`
3. Atualize os componentes relevantes para incluir os novos campos

### Adicionar novos provedores de autenticação

1. Instale o provedor desejado (ex: `npm install @auth/github-provider`)
2. Adicione o provedor na configuração do Auth.js em `app/api/auth/[...nextauth]/route.ts`
3. Configure as variáveis de ambiente necessárias

## Implantação

### Banco de Dados

O Supabase já está configurado como seu banco de dados em nuvem.

### Aplicação

Você pode implantar este template em plataformas como:

- [Vercel](https://vercel.com) (recomendado)
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)

## Licença

Este projeto está sob a licença MIT.
