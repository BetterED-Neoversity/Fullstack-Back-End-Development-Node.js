# Тема 9. Додаткові можливості (Security, Logging, Cloud upload, Email, Cron)

Окремі демо-файли на TypeScript: безпека HTTP (`helmet`, rate limit), структуроване логування (`pino`), завантаження зображення в Cloudinary, листи через Nodemailer, періодичні задачі `node-cron`. Один спільний [`package.json`](./package.json) у корені `topic_09`.

## Структура

| Папка | Зміст |
|-------|--------|
| [`Security/`](./Security/) | Деталі: [`Security/README.md`](./Security/README.md) |
| [`App-logging/`](./App-logging/) | Деталі: [`App-logging/README.md`](./App-logging/README.md) |
| [`Cloud_upload/`](./Cloud_upload/) | Деталі: [`Cloud_upload/README.md`](./Cloud_upload/README.md) |
| [`Send-email/`](./Send-email/) | Деталі: [`Send-email/README.md`](./Send-email/README.md) |
| [`Cron-example/`](./Cron-example/) | Деталі: [`Cron-example/README.md`](./Cron-example/README.md) |

## Встановлення

```bash
cd topic_09
npm install
```

## Запуск прикладу

З кореня `topic_09` через `tsx` (порт **3000** — не запускай кілька серверів одночасно):

```bash
npx tsx Security/app-helmet.ts
npx tsx App-logging/app-simple.ts
npx tsx Cloud_upload/app.ts
npx tsx Send-email/app.ts
npx tsx Cron-example/app.ts
```

## Налаштування `.env`

- **Cloud_upload** — скопіювати [`Cloud_upload/.env.example`](./Cloud_upload/.env.example) → `Cloud_upload/.env` (Cloudinary).
- **Send-email** — [`Send-email/.env.example`](./Send-email/.env.example) → `Send-email/.env` (`EMAIL_USER`, `EMAIL_PASS` тощо).

## Залежності

`helmet`, `express-rate-limit`, `pino`, `pino-http`, `pino-pretty`, `multer`, `cloudinary`, `nodemailer`, `node-cron`, `express`, `dotenv`, `cors`.
