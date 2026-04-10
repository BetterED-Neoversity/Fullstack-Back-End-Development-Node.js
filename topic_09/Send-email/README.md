# Send-email

**Nodemailer:** транспорт на Gmail (465, SSL); HTML-форма на `GET /` і відправка з `POST /send`.

## Файли

| Файл | Сенс |
|------|------|
| [`app.ts`](./app.ts) | Текстовий лист з полів форми (`to`, `subject`, `text`). |
| [`app-html.ts`](./app-html.ts) | Варіант з HTML-тілом листа (`html` у `sendMail`). |
| [`.env.example`](./.env.example) | `EMAIL_USER`, `EMAIL_PASS` (або інші змінні під твій SMTP). |

## Запуск

```bash
# .env з реальними обліковими даними SMTP
npx tsx Send-email/app.ts
```
