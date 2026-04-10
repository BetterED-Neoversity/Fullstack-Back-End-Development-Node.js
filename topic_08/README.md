# Тема 8. Stateful та Stateless автентифікація

Три блоки: ізольовані демо (cookie, session, JWT), повний веб-логін на сесіях і REST API з access JWT + refresh у БД.

## Зміст

| Каталог | Ідея |
|---------|------|
| [`base_example/`](./base_example/) | Малі окремі файли: cookies, `express-session` + SQLite, bcrypt, JWT (консоль + захищений маршрут). Деталі: [`base_example/README.md`](./base_example/README.md) |
| [`stateful_auth/`](./stateful_auth/) | Сесія на сервері, EJS, Prisma + SQLite. Деталі: [`stateful_auth/README.md`](./stateful_auth/README.md) |
| [`stateless_auth/`](./stateless_auth/) | Той самий REST-стек що в темі 7, плюс реєстрація/логін, access JWT і refresh-токен у БД + httpOnly cookie. Деталі: [`stateless_auth/README.md`](./stateless_auth/README.md) |
