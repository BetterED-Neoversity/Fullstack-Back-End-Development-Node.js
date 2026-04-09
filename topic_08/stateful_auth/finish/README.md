# finish

Готовий варіант **stateful**-логіну: один цілісний застосунок, де «залогінений» означає не токен у клієнта, а **запис про сесію на сервері**, а браузер лише носить ідентифікатор сесії (cookie).

## Принцип

- Після успішного входу сервер **запам’ятовує**, хто це (наприклад `userId` у сесії). Наступні запити приходять з тим самим cookie сесії — сервер **достає зі сховища** відповідний запис і розуміє, що користувач уже автентифікований.
- Пароль у БД зберігається **у вигляді хеша**; при логіні порівнюється хеш, а не «сирі» рядки.
- **Логаут** — це знищення сесії на сервері (і прибирання cookie), а не просто «забути токен» на клієнті.

Тобто довіра базується на тому, що **стан «хто залогінений» живе на сервері**; cookie лише вказує, яку сесію підвантажити.

## Що саме робить цей приклад

Користувач може зареєструватися, увійти, потрапити на сторінку, доступну лише після входу, і вийти. Головна сторінка показує контекст: залогінений чи ні. Усе це — одна послідовність **класичної веб-сесії**, як у багатьох серверних застосунках до ери «лише SPA + JWT».

## Маршрути

| Метод і шлях | Що відбувається |
|--------------|-----------------|
| `GET /` | [`home.ejs`](./views/home.ejs) — якщо в сесії є користувач, показується ім’я. |
| `GET` / `POST /register` | Форма реєстрації; `POST` — валідація, перевірка унікальності `username`, `bcrypt.hash`, `prisma.user.create`, редірект на `/login`. |
| `GET` / `POST /login` | Форма входу; `POST` — `findUnique`, `bcrypt.compare`, запис `userId` / `username` у `req.session`, редірект на `/dashboard`. |
| `GET /dashboard` | Middleware `requireAuth` у [`app.ts`](./app.ts); інакше редірект на `/login`. Рендер [`dashboard.ejs`](./views/dashboard.ejs). |
| `POST /logout` | `req.session.destroy`, `res.clearCookie('sessionId')`, редірект на `/login`. |

## Технічна реалізація

- [`app.ts`](./app.ts) — `express.urlencoded`, EJS, `cookie-parser`, `express-session` + `connect-sqlite3` (`SQLiteStore`, `db: "dev.db"`, `dir: "."`), augmentation `SessionData` (`userId`, `username`), `requireAuth`, маршрути, 404 / error handler. Параметри cookie сесії: ім’я `sessionId`, `httpOnly`, `sameSite: 'strict'`, `maxAge` 24 год; `secure` при `NODE_ENV === 'production'`. Залежності — у [`package.json`](./package.json).
- [`lib/prisma.ts`](./lib/prisma.ts) — `PrismaClient` + `@prisma/adapter-better-sqlite3`, URL з `DATABASE_URL` (див. [`.env.example`](./.env.example)).
- [`prisma/schema.prisma`](./prisma/schema.prisma) — модель `User` (`username` унікальний, `password` — хеш).
- [`connect-sqlite3.d.ts`](./connect-sqlite3.d.ts) — типи для `connect-sqlite3`.
- Шаблони: [`home.ejs`](./views/home.ejs), [`register.ejs`](./views/register.ejs), [`login.ejs`](./views/login.ejs), [`dashboard.ejs`](./views/dashboard.ejs), [`404.ejs`](./views/404.ejs), [`error.ejs`](./views/error.ejs).
- Секрет для підпису session cookie: `SESSION_SECRET` у [`.env.example`](./.env.example).

## Запуск

```powershell
cd finish
npm install
copy .env.example .env
npx prisma migrate dev
npm run dev
```

Далі в браузері: `http://localhost:3000`.
