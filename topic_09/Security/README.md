# Security

Приклади на Express + TypeScript: заголовки безпеки та обмеження частоти запитів.

## Файли

| Файл | Сенс |
|------|------|
| [`app-helmet.ts`](./app-helmet.ts) | Лише `helmet()` + тестовий `GET /hello`. |
| [`app-ratelimit.ts`](./app-ratelimit.ts) | Глобальний `express-rate-limit` на всі маршрути. |
| [`app-hard-ratelimit.ts`](./app-hard-ratelimit.ts) | Глобальний ліміт + окремий жорсткіший ліміт на `POST /login`. |
| [`app-full.ts`](./app-full.ts) | Разом: `cors`, `helmet`, глобальний rate limit, потім `express.json()`, маршрути. |
| [`test.http`](./test.http) | Запити для REST Client / Thunder Client. |

## Запуск

З кореня `topic_09`:

```bash
npx tsx Security/app-full.ts
```
