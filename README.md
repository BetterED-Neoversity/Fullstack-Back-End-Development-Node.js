# Fullstack. Back End Development: Node.js — навчальні приклади (магістратура)

Репозиторій навчальних прикладів курсу Fullstack. Back End Development: Node.js. Теми розбиті по тижнях; кожна тека містить власний `README.md` з описом файлів і командами запуску.

---

## Тиждень 1 — Основи Node.js

### [Тема 1. Середовище Node.js та робота з файловою системою](./topic_01/)

Старт із Node.js: CommonJS і ESM модулі, вбудовані модулі `os`, `process`, `path`, `fs/promises`, CLI-утиліта.

| Папка                             | Зміст                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------- |
| [`01_Init/`](./topic_01/01_Init/) | Ініціалізація проєкту, CJS/ESM, імпорт/експорт                                  |
| [`02_File/`](./topic_01/02_File/) | `os`, `process`, `path`, `fs/promises`: читання, запис, метадані, права доступу |
| [`03_CLI/`](./topic_01/03_CLI/)   | CLI-аналізатор директорії з підрахунком статистики                              |

---

### [Тема 2. Node.js під капотом — Event Loop, асинхронність та Streams](./topic_02/)

Внутрішня механіка Node.js: черги задач, фази Event Loop, моніторинг файлів, потокова обробка.

| Папка                                         | Зміст                                                                                                          |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [`01-event-loop/`](./topic_02/01-event-loop/) | 23 приклади: `nextTick`, `Promise`, `setTimeout`, `setImmediate`, `queueMicrotask`, I/O callback, EventEmitter |
| [`02-watcher/`](./topic_02/02-watcher/)       | `fs.watch`: базовий watcher, клас `FileMonitor` на EventEmitter                                                |
| [`03-streams/`](./topic_02/03-streams/)       | Буферний підхід vs стріми, `createReadStream`, `createWriteStream`, `pipe`, `pipeline`                         |

---

## Тиждень 2 — Фреймворк Express

### [Тема 3. Знайомство з Express.js](./topic_03/)

Перший Express-сервер, маршрути, middleware-ланцюжки, централізована обробка помилок.

| Папка                                                   | Зміст                                                                |
| ------------------------------------------------------- | -------------------------------------------------------------------- |
| [`src/`](./topic_03/src/)                               | Окремі міні-сервери: від лог-middleware до JSON API в пам'яті        |
| [`example_middleware/`](./topic_03/example_middleware/) | 5 прикладів: порядок шарів, валідація у middleware, збагачення `req` |
| [`example_error/`](./topic_03/example_error/)           | 4 приклади: від «процес падає» до `AppError` + error middleware      |

```bash
cd topic_03 && npm install
npm run dev          # src/server.ts
npm run dev:send-data
npm run middleware:03
npm run error:02
```

---

### [Тема 4. Статичні файли, форми та завантаження файлів](./topic_04/)

`express.static`, EJS-шаблонізація, обробка HTML-форм, `multer`.

| Папка                                               | Зміст                                                    |
| --------------------------------------------------- | -------------------------------------------------------- |
| [`static_example/`](./topic_04/static_example/)     | Статика з префіксом `/static`, кешування                 |
| [`template_example/`](./topic_04/template_example/) | EJS, передача даних у view, partials                     |
| [`form_example/`](./topic_04/form_example/)         | `urlencoded`, GET/POST форми, redirect                   |
| [`upload_example/`](./topic_04/upload_example/)     | `multer`: single, array, fields, diskStorage, fileFilter |

```bash
cd topic_04 && npm install
npm run start:static
npm run start:ejs
npm run start:form
npm run start:upload
```

---

## Тиждень 3 — Docker та ORM

### [Тема 5. Основи технології Docker](./topic_05/)

Основна ідея — запускати залежності (Redis, PostgreSQL) у контейнерах через `docker compose`, щоб Node.js-застосунок міг до них підключатись.

```bash
cd topic_05
docker compose up --build
```

---

### [Тема 6. Робота з базами даних — Prisma ORM](./topic_06/)

Prisma + PostgreSQL: схема, міграції, seed, REST API над рецептами, окремі скрипти на всі типи запитів Prisma Client.

```bash
cd topic_06 && npm install
npx prisma migrate dev
npm run dev          # http://localhost:3000
```

Скрипти Prisma-запитів (не HTTP): `read-examples.ts`, `filter-examples.ts`, `filtering-by-links-examples.ts`, `sort-examples.ts`, `pagination-examples.ts`, `aggregate-functions-examples.ts`, `update-examples.ts`, `delete-examples.ts`.

---

## Тиждень 4 — REST API та автентифікація

### [Тема 7. Проєктування та створення RESTful API](./topic_07/)

Структура роутів/контролерів, Zod-валідація, OpenAPI/Swagger.

| Папка                           | Зміст                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------- |
| [`start/`](./topic_07/start/)   | Prisma-схема, міграції, seed. `app.ts` порожній — відправна точка                     |
| [`finish/`](./topic_07/finish/) | Повний API: роутери, контролери, Zod, middleware валідації, Swagger UI на `/api-docs` |

```bash
cd topic_07/finish && npm install
npm run dev          # http://localhost:3000/api-docs
```

---

### [Тема 8. Stateful та Stateless автентифікація](./topic_08/)

| Папка                                           | Зміст                                                                                                                          |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`base_example/`](./topic_08/base_example/)     | Окремі демо: cookie, `express-session`, bcrypt, JWT (створення / декодування / перевірка / помилки / захищений маршрут)        |
| [`stateful_auth/`](./topic_08/stateful_auth/)   | Повний stateful-логін: сесія на сервері (`connect-sqlite3`), bcrypt, Prisma. `start/` — каркас, `finish/` — готовий застосунок |
| [`stateless_auth/`](./topic_08/stateless_auth/) | Stateless JWT: `start/` — REST API з теми 7 + заготовка під JWT middleware                                                     |

```bash
# base_example
cd topic_08/base_example && npm install
npm run jwt:create
npm run jwt:api      # http://localhost:3000

# stateful_auth/finish
cd topic_08/stateful_auth/finish && npm install
copy .env.example .env
npx prisma migrate dev
npm run dev          # http://localhost:3000
```
