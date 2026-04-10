# App-logging

Логування через **Pino**: структуровані JSON-логи; у dev зазвичай вивід через **pino-pretty**.

## Файли

| Файл | Сенс |
|------|------|
| [`app-simple.ts`](./app-simple.ts) | Один екземпляр `pino` з `pino-pretty`; ручні `logger.info` / `warn` / `error` на маршрутах (`POST /login`, `GET /hello`, `GET /error`). |
| [`app-http.ts`](./app-http.ts) | Middleware `pino-http`: лог кожного запиту; `req.log` у хендлерах. |
| [`app-production.ts`](./app-production.ts) | `NODE_ENV === 'production'` вимикає pretty-транспорт; рівень `debug` лише не в production. |
| [`test.http`](./test.http) | Приклади запитів. |

## Запуск

```bash
npx tsx App-logging/app-http.ts
```
