# start

Стартова точка після теми 7: повний REST (рецепти, категорії, теги, відгуки), Zod, Swagger UI на `/api-docs` (див. [`app.ts`](./app.ts)), Prisma + PostgreSQL. **Автентифікації немає** — усі операції залишаються відкритими, як у «готовому» API теми 7.

## Файли

- [`app.ts`](./app.ts) — підключення `express.json`, OpenAPI, роутерів `/api/recipes`, `/api/categories`, `/api/tags`, `/api` (reviews), глобальні 404 і error handler.
- [`prisma/schema.prisma`](./prisma/schema.prisma), [`seed.ts`](./seed.ts) — дані без моделі `User` (до міграцій теми finish).
- Роутери та контролери в [`src/`](./src/).

## Запуск

З кореня `start/`:

```bash
npm install
copy .env.example .env   # Windows; на Unix: cp .env.example .env
npx prisma migrate dev
npm run dev
```

Сервер: `http://localhost:3000`, документація: `http://localhost:3000/api-docs`.
