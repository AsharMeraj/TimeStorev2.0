import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: 'dsp72pe9u',
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});