# finish

Завершена версія REST API: роутери, контролери, Zod, middleware валідації, згенерований OpenAPI і Swagger UI.

## Swagger / OpenAPI

- **Інтерактивна документація (Swagger UI):** `GET /api-docs`  
  Після `npm run dev` у браузері: `http://localhost:3000/api-docs` (якщо `PORT` не змінював — інакше твій порт + шлях `/api-docs`).
- Документ збирається в [`src/openapi.ts`](./src/openapi.ts) (`generateOpenApiDocument`), підключається в [`app.ts`](./app.ts) через `swagger-ui-express`. У `openapi.ts` за замовчуванням `servers[0].url` — `http://localhost:3000`.

## Базові шляхи API

| Префікс | Призначення |
|--------|-------------|
| `/api/recipes` | рецепти |
| `/api/categories` | категорії |
| `/api/tags` | теги |
| `/api/recipes/:recipeId/reviews`, `/api/reviews/:id` | відгуки (вкладені та плоскі маршрути в одному роутері на `/api`) |

## Структура репозиторію

- [`app.ts`](./app.ts) — точка входу: `express.json()`, `/api-docs`, монтування роутерів, 404, обробка помилок (у т.ч. Prisma-коди).
- [`src/routes/`](./src/routes/) — маршрути за доменами.
- [`src/controllers/`](./src/controllers/) — обробники запитів.
- [`src/validators/`](./src/validators/) — Zod-схеми.
- [`src/middleware/validate.ts`](./src/middleware/validate.ts) — `validateBody` / `validateParams`.
- [`test-validation.http`](./test-validation.http) — приклади HTTP для перевірки валідації.
- [`test-zod.ts`](./test-zod.ts) — окремий прогін схем без сервера.
- [`prisma/`](./prisma/) — схема БД і міграції.
- [`seed.ts`](./seed.ts) — початкові дані.

## Запуск

```bash
npm install
npm run dev
```
