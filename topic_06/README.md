# Тема 6. Робота з базами даних за допомогою Prisma ORM

Prisma + PostgreSQL: схема, міграції, seed, Express API над рецептами та окремі скрипти з викликами Prisma Client.

## Структура теми

- [`prisma/`](./prisma/) — модель даних і міграції.
- [`db.ts`](./db.ts) — екземпляр Prisma Client для імпорту в скриптах і сервері.
- [`server.ts`](./server.ts) — REST над рецептами: список з query (`category`, `maxTime`, `search`), один запис по `id`, `POST` / `PATCH` / `DELETE`, валідації та каскад через схему.
- [`seed.ts`](./seed.ts), [`seed-nested.ts`](./seed-nested.ts) — початкове наповнення БД (у т.ч. зв’язані сутності).

## Скрипти з Prisma-запитами (не HTTP)

Запуск з кореня теми, наприклад: `npx tsx read-examples.ts` (як у тебе прийнято в проєкті).

- [`read-examples.ts`](./read-examples.ts) — `findUnique` / `findFirst` / `findMany`, фільтр по `categoryId`, `include` vs `select` для зв’язаних полів.
- [`filter-examples.ts`](./filter-examples.ts) — скалярні умови (`lte`, `gt`, `in`), діапазон дат, `contains` + `mode: insensitive`, `AND` / `OR` / `NOT`, комбіновані умови.
- [`filtering-by-links-examples.ts`](./filtering-by-links-examples.ts) — фільтрація по зв’язках: `tags` (`some` / `none`), категорії з `recipes.some`, поєднання тегів і часу.
- [`sort-examples.ts`](./sort-examples.ts) — `orderBy` по одному полю і масивом (кілька ключів сортування).
- [`pagination-examples.ts`](./pagination-examples.ts) — `take` / `skip`, обгортка «сторінка + загальна кількість», курсорна пагінація через `cursor` + `skip`.
- [`aggregate-functions-examples.ts`](./aggregate-functions-examples.ts) — `aggregate` з `_avg` / `_max` / `_min` / `_count`, з і без `where`.
- [`update-examples.ts`](./update-examples.ts) — `update` одного запису і `updateMany` за умовою.
- [`delete-examples.ts`](./delete-examples.ts) — `delete` одного рецепта (з урахуванням відгуків і каскаду в схемі), `deleteMany` за категорією та за датою.

## `test.http` — що це за запити

Файл для клієнта типу REST Client / Thunder Client: **HTTP до `server.ts`** на `http://localhost:3000`, поки сервер запущений (`npm run dev`).

| Блок у файлі | Сенс |
|--------------|------|
| `GET /recipes` | повний список з `include` категорій і тегів (як у коді сервера). |
| `GET /recipes?category=…` | фільтр по `categoryId` з query. |
| `GET /recipes?maxTime=…` | рецепти з `cookingTime <= maxTime`. |
| `GET /recipes?search=…` | підрядок у `title` (`contains`). |
| Комбінований `GET` з кількома query | кілька фільтрів одночасно. |
| `GET /recipes/:id` | один рецепт з вкладеними `category`, `tags`, `reviews`. |
| `GET` неіснуючий id / `abc` | відповіді **404** і **400** (некоректний id). |
| `POST /recipes` з повним JSON | створення рецепта з обов’язковими полями та `categoryId`. |
| `POST` з неповним телом / з чужим `categoryId` | перевірки **400** від сервера. |
| `PATCH /recipes/:id` | часткове оновлення полів; окремі запити — успіх, **404** для чужого id. |
| `DELETE /recipes/:id` | видалення; окремо — **404** для неіснуючого. |
| `GET /nonexistent` | **404** на невідомий маршрут. |

## Швидкий старт

```bash
npm install
npx prisma migrate dev
npm run dev
```
