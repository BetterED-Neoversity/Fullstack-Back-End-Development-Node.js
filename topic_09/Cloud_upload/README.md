# Cloud_upload

Форма завантаження зображення: **multer** пише файл у тимчасову теку, потім **Cloudinary** `uploader.upload` повертає `secure_url` і метадані. Після відповіді тимчасовий файл видаляється.

## Файли

| Файл | Сенс |
|------|------|
| [`app.ts`](./app.ts) | `GET /` — HTML-форма; `POST /upload` — `multer.single('image')`, upload у Cloudinary, тимчасовий файл з диска видаляється; `DELETE /upload/*` — `cloudinary.uploader.destroy` за `publicId`. |
| [`photo.jpg`](./photo.jpg) | Можна використати для ручних тестів. |
| [`requests.http`](./requests.http) | Приклади (де підтримується multipart). |
| [`.env.example`](./.env.example) | `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`. |

## Запуск

```bash
# скопіювати .env.example → .env і заповнити ключі
npx tsx Cloud_upload/app.ts
```
