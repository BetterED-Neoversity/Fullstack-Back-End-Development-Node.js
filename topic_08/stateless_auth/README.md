# Stateless auth (JWT + refresh)

**Принцип:** клієнт несе короткоживучий **access JWT** (`Authorization: Bearer …`) для захищених операцій. **Refresh** — не JWT, а випадковий рядок, який зберігається в БД і віддається клієнту в **httpOnly cookie** (і дублюється в JSON відповіді для зручності API-клієнтів). Оновлення пари токенів — `POST /api/auth/refresh` (cookie або тіло).

Це не «чистий stateless сервер» (refresh-токени — стан у БД), але **без серверної сесії** як у `express-session`: сервер не тримає «залогіненість» окремо від JWT і записів refresh.

## Зміст

| Каталог | Що всередині |
|---------|----------------|
| [`start/`](./start/) | REST + Prisma + OpenAPI як у темі 7, **без** `/api/auth` і без `authenticate`. Деталі: [`start/README.md`](./start/README.md) |
| [`finish/`](./finish/) | Те саме API + `User` / `RefreshToken` у схемі, bcrypt, маршрути auth, middleware JWT на мутаціях. Деталі: [`finish/README.md`](./finish/README.md) |

Поруч: [`base_example`](../base_example/) — мінімальні JWT-демо; [`stateful_auth`](../stateful_auth/) — логін через сесію та HTML.
