import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.join(__dirname, ".env") });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ dest: path.join(__dirname, "tmp") });

const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.send(`
    <h2>Upload Image</h2>
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="image" accept="image/*" />
      <button type="submit">Upload</button>
    </form>
  `);
});

app.post(
  "/upload",
  upload.single("image"),
  async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "demo",
      });

      res.status(201).json({
        url: result.secure_url,
        publicId: result.public_id,
        width: result.width,
        height: result.height,
        format: result.format,
        size: result.bytes,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to upload image" });
    } finally {
      await fs.unlink(req.file.path).catch(() => {});
    }
  },
);

app.delete(
  "/upload/{*publicId}",
  async (req: Request, res: Response) => {
    const segments = req.params.publicId;
    const publicId = Array.isArray(segments)
      ? segments.join("/")
      : typeof segments === "string"
        ? segments
        : "";

    if (!publicId) {
      return res.status(400).json({ error: "publicId is required" });
    }

    try {
      const result = await cloudinary.uploader.destroy(publicId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to delete image" });
    }
  },
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
