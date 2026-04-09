# Base Example

У цьому проєкті зібрані прості приклади роботи з:

- cookies в `Express`
- sessions через `express-session`
- хешуванням паролів через `bcrypt`
- JWT: створення, декодування, перевірка, помилки та захищений маршрут

## Встановлення

```powershell
npm install
```

## Приклади

### 1. Cookies

Файл: [`app-cookie.ts`](./app-cookie.ts)

У прикладі показано:

- створення cookie через `res.cookie(...)`
- читання cookie через `req.cookies`
- видалення cookie через `res.clearCookie(...)`

Маршрути:

- `GET /set` — встановити cookie
- `GET /read` — прочитати cookie
- `GET /logout` — видалити cookie

Запуск:

```powershell
npm run cookie
```

Після запуску сервер доступний на `http://localhost:3000`.

Для перевірки можна використати [`test-cookie.http`](./test-cookie.http) через HTTP Client у VS Code або іншому редакторі.

### 2. Sessions

Файл: [`app-session.ts`](./app-session.ts)

У прикладі показано:

- підключення `express-session`
- використання `connect-sqlite3` як сховища сесій
- типізацію власних полів сесії через `module augmentation`
- окрему декларацію [`connect-sqlite3.d.ts`](./connect-sqlite3.d.ts) для TypeScript

Запуск:

```powershell
npm run session
```

Скрипт сам передає `SESSION_SECRET=dev-secret`, тому окремо задавати змінну для локального запуску не потрібно.

Після запуску сервер доступний на `http://localhost:3000`.

### 3. Auth / bcrypt

Файл: [`auth.ts`](./auth.ts)

У прикладі показано:

- хешування пароля через `bcrypt.hash(...)`
- перевірку правильного пароля через `bcrypt.compare(...)`
- перевірку неправильного пароля

Це одноразовий консольний скрипт.

Запуск:

```powershell
npm run auth
```

### 4. JWT: створення токена

Файл: [`create-token.ts`](./create-token.ts)

У прикладі показано:

- створення JWT через `jwt.sign(...)`
- payload з полем `sub`
- час життя токена через `expiresIn`

Запуск:

```powershell
npm run jwt:create
```

### 5. JWT: декодування payload без перевірки підпису

Файл: [`decode-jwt.ts`](./decode-jwt.ts)

У прикладі показано:

- ручне розбиття JWT на частини
- декодування payload через `Buffer.from(..., 'base64url')`
- перетворення payload у JSON

Запуск:

```powershell
npm run jwt:decode
```

### 6. JWT: перевірка токена

Файл: [`verify-token.ts`](./verify-token.ts)

У прикладі показано:

- створення тестового токена
- перевірку токена через `jwt.verify(...)`
- обробку помилки у `try/catch`

Запуск:

```powershell
npm run jwt:verify
```

### 7. JWT: типові помилки

Файл: [`jwt-errors.ts`](./jwt-errors.ts)

У прикладі показано:

- помилку неправильного секрету
- помилку простроченого токена
- перевірку типу помилки через `JsonWebTokenError` і `TokenExpiredError`

Запуск:

```powershell
npm run jwt:errors
```

### 8. JWT: захищений API-маршрут

Файл: [`app.ts`](./app.ts)

У прикладі показано:

- middleware [`authenticate`](./middleware/authenticate.ts)
- розширення `Express.Request` полем `user`
- публічний маршрут без токена
- захищений маршрут з перевіркою `Authorization: Bearer <token>`

Маршрути:

- `GET /api/recipes` — публічний маршрут
- `POST /api/recipes` — захищений маршрут

Запуск:

```powershell
npm run jwt:api
```

Після запуску сервер доступний на `http://localhost:3000`.

Щоб швидко протестувати захищений маршрут:

1. Запусти `npm run jwt:create`
2. Скопіюй токен з консолі
3. Виконай `POST /api/recipes` з заголовком `Authorization: Bearer <token>`

## Команди запуску

Команди з [`package.json`](./package.json):

```powershell
npm run cookie
npm run session
npm run auth
npm run jwt:create
npm run jwt:decode
npm run jwt:verify
npm run jwt:errors
npm run jwt:api
```

## Додатково

- [`test-cookie.http`](./test-cookie.http) — перевірка cookie-маршрутів
- [`middleware/authenticate.ts`](./middleware/authenticate.ts) — JWT middleware для захищеного маршруту
- [`connect-sqlite3.d.ts`](./connect-sqlite3.d.ts) — типи для `connect-sqlite3`
- `dev.db` буде створений автоматично під час роботи прикладу з сесіями
- серверні приклади використовують порт `3000`, тому запускати їх одночасно не варто
