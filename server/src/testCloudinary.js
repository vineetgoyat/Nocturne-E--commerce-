import dotenv from "dotenv";

dotenv.config();

console.log("NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("KEY:", process.env.CLOUDINARY_API_KEY);
console.log("SECRET EXISTS:", !!process.env.CLOUDINARY_API_SECRET);