# Cron-example

**node-cron:** розклад у форматі cron-рядка; задачі пишуть у консоль, поки процес живий.

## Файли

| Файл | Сенс |
|------|------|
| [`app.ts`](./app.ts) | Дві задачі: кожну хвилину і кожні 5 хвилин; Express на 3000 з `GET /hello` (щоб процес не завершувався одразу). |
| [`app-pause.ts`](./app-pause.ts) | Одна хвилинна задача + `POST /task/stop` і `POST /task/start` для керування. |
| [`check.ts`](./check.ts) | Консольний скрипт: `cron.validate(...)` для коректних і некоректних виразів. |

## Запуск

```bash
npx tsx Cron-example/app.ts
npx tsx Cron-example/check.ts
```
