# Тема 3. Знайомство з Express.js

Навчальні приклади старту з `Express`: підняття сервера, базові маршрути, middleware-ланцюжки та централізована обробка помилок.

## Структура теми

- [`src`](./src/) — окремі міні-сервери: middleware, стартові маршрути, HTTP-методи на одному шляху, невелике JSON API в пам’яті.
  Деталі: [`src/README.md`](./src/README.md)
- [`example_middleware`](./example_middleware/) - приклади middleware та їх порядку виконання.
  Деталі: [`example_middleware/README.md`](./example_middleware/README.md)
- [`example_error`](./example_error/) - приклади error-handling middleware.
  Деталі: [`example_error/README.md`](./example_error/README.md)
- [`requests.http`](./requests.http) - готові HTTP-запити для ручного тестування.

## Швидкий старт

```bash
npm run dev
npm run dev:start
npm run dev:verbs
npm run dev:send-data
```

Приклади з `example_middleware` та `example_error`:

```bash
npm run middleware:01
npm run error:02
```

(скрипти `middleware:02`…`05`, `error:01`…`04` — за аналогією.)
